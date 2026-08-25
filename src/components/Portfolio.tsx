import { useState } from "react"
import { photos } from "../data/galleries"
import { FadeIn, SectionHeading } from "./FadeIn"
import { Lightbox } from "./Lightbox"

const spanClass: Record<(typeof photos)[number]["span"], string> = {
  featured: "md:col-span-8 md:row-span-2 aspect-[4/5] md:aspect-auto",
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
  wide: "md:col-span-8 aspect-[16/10] md:aspect-auto",
  square: "md:col-span-4 aspect-[4/5] md:aspect-auto",
}

export function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="portafolio" className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portafolio"
          title="Historias de Amor"
          subtitle="Bodas, quinceañeras y sesiones seleccionadas — cada imagen, un instante que no se vuelve a repetir."
        />

        <div className="grid grid-cols-1 gap-3 md:auto-rows-[280px] md:grid-cols-12 md:grid-flow-dense md:gap-4 lg:auto-rows-[340px]">
          {photos.map((photo, index) => (
            <FadeIn
              key={photo.src}
              delay={Math.min(index * 0.04, 0.24)}
              className={`group relative h-full overflow-hidden bg-cream ${spanClass[photo.span]}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="absolute inset-0 h-full w-full cursor-zoom-in text-left"
                aria-label={`Ver ${photo.wedding}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/35" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col items-center px-4 py-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-xl text-ivory md:text-2xl">
                    {photo.wedding}
                  </span>
                  <span className="mt-2 text-[10px] tracking-[0.32em] text-champagne uppercase">
                    View Gallery
                  </span>
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {openIndex !== null ? (
        <Lightbox
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndex={setOpenIndex}
        />
      ) : null}
    </section>
  )
}
