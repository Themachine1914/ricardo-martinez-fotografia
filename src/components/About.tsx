import { ABOUT_IMAGE } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"

export function About() {
  return (
    <section id="sobre-mi" className="bg-cream/60 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="El fotógrafo" title="Sobre mí" />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-3 border border-champagne/40 md:-inset-5" aria-hidden="true" />
              <img
                src={ABOUT_IMAGE}
                alt="Retrato de novia a contraluz, representando el estilo de Ricardo Martinez"
                className="relative aspect-[3/4] w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="max-w-xl">
            <p className="font-display text-2xl leading-snug text-ink italic md:text-[1.7rem]">
              No fotografío bodas para que se vean perfectas.
              Las fotografío para que se sientan verdaderas.
            </p>
            <p className="mt-8 font-light leading-8 text-ink-soft">
              Soy Ricardo Martinez, fotógrafo de bodas. Trabajo con un estilo
              natural, documental y romántico: observo más de lo que dirijo, y
              dejo que la luz, los gestos y los silencios cuenten la historia.
            </p>
            <p className="mt-5 font-light leading-8 text-ink-soft">
              Creo que el lujo de un recuerdo no está en la pose, sino en lo
              que ocurrió cuando nadie estaba mirando. Un velo al viento, una
              mano que busca otra, una risa que no se ensayó. Eso es lo que
              busco preservar.
            </p>
            <p className="mt-5 font-light leading-8 text-ink-soft">
              Si estás soñando un día íntimo, elegante y lleno de emoción, me
              encantaría caminarlo a tu lado — con calma, con respeto y con
              la mirada atenta de quien sabe que este momento no se repite.
            </p>
            <p className="font-display mt-10 text-xl text-ink">Ricardo Martinez</p>
            <p className="mt-1 text-[11px] tracking-[0.28em] text-champagne uppercase">
              Wedding Photographer
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
