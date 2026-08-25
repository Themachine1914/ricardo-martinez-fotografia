import { testimonials } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"

export function Testimonials() {
  return (
    <section className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Palabras"
          title="Lo que recuerdan"
          subtitle="Parejas que confiaron en mí el día más importante de su historia."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {testimonials.map((item, i) => (
            <FadeIn key={item.names} delay={i * 0.08}>
              <blockquote>
                <span
                  className="font-display block text-6xl leading-none text-champagne/70"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="font-display -mt-4 text-xl leading-relaxed text-ink italic md:text-[1.35rem]">
                  {item.quote}
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block text-[11px] font-medium tracking-[0.28em] text-ink uppercase">
                      {item.names}
                    </span>
                    <span className="mt-1 block text-[11px] tracking-[0.2em] text-stone">
                      {item.place}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
