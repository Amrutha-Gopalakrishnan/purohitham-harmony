import type { VercelRequest, VercelResponse } from "@vercel/node";

let serverEntry: any;

async function loadServerEntry() {
  if (!serverEntry) {
    const module = await import("../dist/server/index.js");
    serverEntry = module.default || module;
  }
  return serverEntry;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const entry = await loadServerEntry();

    if (entry && entry.fetch) {
      const response = await entry.fetch(
        new Request(new URL(req.url || "/", `http://${req.headers.host}`), {
          method: req.method,
          headers: req.headers as HeadersInit,
          body:
            req.method !== "GET" && req.method !== "HEAD"
              ? JSON.stringify(req.body)
              : undefined,
        })
      );

      res.status(response.status);
      response.headers.forEach((value, key) => {
        res.setHeader(key, value);
      });

      const buffer = await response.arrayBuffer();
      res.send(Buffer.from(buffer));
    } else {
      res.status(500).json({ error: "Server entry not found" });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
