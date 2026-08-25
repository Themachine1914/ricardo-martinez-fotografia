import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import { type FormEvent } from "react"
import { WHATSAPP_DISPLAY, whatsappUrl } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const date = String(data.get("date") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    const lines = [
      `Hola Ricardo, soy ${name}.`,
      email ? `Email: ${email}` : "",
      date ? `Fecha: ${date}` : "",
      message,
    ].filter(Boolean)

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contacto" className="bg-cream/70 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Reservar"
          title="Hablemos de tu día"
          subtitle="Escríbeme por WhatsApp con la fecha, el lugar y cómo imaginan su sesión. Respondo personalmente cada mensaje."
        />

        <div className="grid gap-16 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <FadeIn>
            <p className="font-display text-2xl leading-snug text-ink italic">
              Si sientes que tu historia merece ser contada con calma y
              verdad, este es el primer paso.
            </p>
            <ul className="mt-10 space-y-5 text-sm text-ink-soft">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-champagne" strokeWidth={1.5} />
                <a
                  href={whatsappUrl(
                    "Hola Ricardo, me gustaría reservar una sesión.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-champagne" strokeWidth={1.5} />
                <a href="mailto:hola@ricardomartinez.photo" className="hover:text-ink">
                  hola@ricardomartinez.photo
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={16} className="mt-0.5 text-champagne" strokeWidth={1.5} />
                <a
                  href="https://www.instagram.com/p/DbCcF5IDCtx/?igsi=b2Z1dWpmMjFzemV5"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  @ricardomartinezfotografia
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-champagne" strokeWidth={1.5} />
                <span>Reside en Santiago. Viaja al interior para bodas.</span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Nombre" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Fecha" name="date" type="date" />
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.24em] text-stone uppercase">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink outline-none transition focus:border-champagne"
                  placeholder="Cuéntame sobre ustedes, el lugar, el plan y lo que imaginan…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex border border-ink bg-ink px-10 py-3 text-[11px] font-medium tracking-[0.28em] text-ivory uppercase transition duration-500 hover:bg-transparent hover:text-ink"
              >
                Reservar por WhatsApp
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type: string
  required?: boolean
}

function Field({ label, name, type, required }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] tracking-[0.24em] text-stone uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink outline-none transition focus:border-champagne"
      />
    </label>
  )
}
