import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+919843315323";
const WA_TEXT = encodeURIComponent(
  "Namaste, I would like to enquire about a pooja / homam service.",
);

export function StickyContact() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/919843315323?text=${WA_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Enquiry"
        className="group h-13 w-13 sm:h-14 sm:w-14 rounded-full flex items-center justify-center bg-whatsapp text-white shadow-lg shadow-black/15 hover:scale-105 transition-transform"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Now"
        className="rounded-full flex items-center justify-center bg-maroon text-primary-foreground shadow-lg shadow-black/15 hover:scale-105 transition-transform"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
