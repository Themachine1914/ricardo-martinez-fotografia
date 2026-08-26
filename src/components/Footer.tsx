import { Instagram, Phone } from "lucide-react"
import { WHATSAPP_DISPLAY, whatsappUrl } from "../data/galleries"

export function Footer() {
  return (
    <footer className="border-t border-sand/80 bg-ivory px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <a href="#inicio" aria-label="Volver al inicio">
          <img
            src="/logo.png"
            alt="Ricardo Martinez Fotografía Studio"
            className="h-14 w-auto opacity-80"
          />
        </a>
        <div className="flex items-center gap-5">
          <a
            href={whatsappUrl("Hola Ricardo, me gustaría reservar una sesión.")}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
            className="text-stone transition hover:text-ink"
          >
            <Phone size={18} strokeWidth={1.4} />
          </a>
          <a
            href="https://www.instagram.com/ricardomartinezfotografia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-stone transition hover:text-ink"
          >
            <Instagram size={18} strokeWidth={1.4} />
          </a>
        </div>
        <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
          © {new Date().getFullYear()} Ricardo Martinez · All rights reserved
        </p>
      </div>
    </footer>
  )
}
