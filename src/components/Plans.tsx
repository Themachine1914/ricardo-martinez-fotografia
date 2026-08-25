import { plans } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"

export function Plans() {
  return (
    <section id="planes" className="bg-cream/50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inversión"
          title="Planes"
          subtitle="Sesiones fotográficas y eventos — cada plan incluye el álbum, las fotos en HD y una pieza para colgar en casa."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col border bg-ivory px-8 py-10 ${
                  plan.featured
                    ? "border-champagne shadow-[0_18px_50px_rgba(28,25,23,0.06)]"
                    : "border-sand"
                }`}
              >
                <p className="font-display text-3xl italic text-ink">{plan.name}</p>
                <span
                  className="mt-5 block h-px w-10 bg-champagne/80"
                  aria-hidden="true"
                />
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-6 font-light text-ink-soft">
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-10 text-[11px] tracking-[0.22em] text-stone uppercase">
                  Inversión
                </p>
                <p className="mt-2 font-display text-2xl text-ink md:text-[1.65rem]">
                  {plan.price}
                </p>
                <a
                  href="#contacto"
                  className={`mt-8 inline-flex justify-center px-6 py-3 text-[11px] font-medium tracking-[0.28em] uppercase transition duration-500 ${
                    plan.featured
                      ? "border border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink"
                      : "border border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  Reservar
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
