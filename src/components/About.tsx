import { ABOUT_IMAGE } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"

export function About() {
  return (
    <section id="sobre-mi" className="bg-cream/60 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Desde 2001"
          title="Sobre mí"
          subtitle="Especialista en bodas y quinceañeras en República Dominicana"
        />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-3 border border-champagne/40 md:-inset-5" aria-hidden="true" />
              <img
                src={ABOUT_IMAGE}
                alt="Retrato de Ricardo Martínez, fotógrafo de bodas y quinceañeras"
                className="relative aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="max-w-xl">
            <p className="font-display text-2xl leading-snug text-ink italic md:text-[1.7rem]">
              Inmortalizar momentos irrepetibles con autenticidad y elegancia.
            </p>
            <p className="mt-8 font-light leading-8 text-ink-soft">
              Desde 2001, mi propósito ha sido el mismo: inmortalizar momentos
              irrepetibles con autenticidad y elegancia.
            </p>
            <p className="mt-5 font-light leading-8 text-ink-soft">
              Creo firmemente en la magia de lo espontáneo. Lejos de las poses
              rígidas, mi enfoque busca capturar la emoción genuina de tu
              celebración: la mirada cómplice antes del “sí”, la risa nerviosa,
              las lágrimas de alegría y la energía en la pista de baile.
            </p>
            <p className="mt-5 font-light leading-8 text-ink-soft">
              Como especialista en bodas y quinceañeras en Santiago,
              he tenido el privilegio de acompañar a cientos de familias,
              transformando instantes fugaces en recuerdos que trascienden
              generaciones.
            </p>

            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] tracking-[0.28em] text-champagne uppercase">
                  Estilo
                </dt>
                <dd className="mt-2 font-light leading-7 text-ink-soft">
                  Natural, atemporal y cinematográfico.
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.28em] text-champagne uppercase">
                  Filosofía
                </dt>
                <dd className="mt-2 font-light leading-7 text-ink-soft">
                  Tú vive y disfruta cada segundo; yo me encargo de hacerlo
                  eterno.
                </dd>
              </div>
            </dl>

            <p className="font-display mt-10 text-xl text-ink">Ricardo Martínez</p>
            <p className="mt-1 text-[11px] tracking-[0.28em] text-champagne uppercase">
              Bodas y quinceañeras
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
