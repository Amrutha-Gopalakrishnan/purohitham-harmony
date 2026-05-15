import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

let serverModule: any;

async function getServerModule() {
  if (!serverModule) {
    try {
      // Try to load the built server module
      const serverPath = path.join(process.cwd(), "dist/server/index.js");
      
      if (fs.existsSync(serverPath)) {
        serverModule = await import(serverPath);
      } else {
        console.error("Server build not found at", serverPath);
        throw new Error("Server build not found");
      }
    } catch (error) {
      console.error("Failed to load server module:", error);
      throw error;
    }
  }
  return serverModule;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const server = await getServerModule();

    // The server should have a fetch handler or default export
    const handler = server.default || server.fetch || server.handler;

    if (!handler) {
      return res.status(500).json({
        error: "Server handler not found",
        available: Object.keys(server),
      });
    }

    // Create a proper Request object
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = new URL(req.url || "/", `${protocol}://${host}`);

    const request = new Request(url, {
      method: req.method || "GET",
      headers: new Headers(req.headers as Record<string, string>),
      body:
        req.method !== "GET" && req.method !== "HEAD" && req.body
          ? typeof req.body === "string"
            ? req.body
            : JSON.stringify(req.body)
          : undefined,
    });

    const response = await (typeof handler === "function"
      ? handler(request)
      : handler.fetch(request));

    // Set response headers
    const headers = new Headers(response.headers);
    for (const [key, value] of headers.entries()) {
      if (key.toLowerCase() === "content-encoding") {
        // Skip content-encoding, let Vercel handle compression
        continue;
      }
      res.setHeader(key, value);
    }

    res.status(response.status);

    // Send the response body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("API handler error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
