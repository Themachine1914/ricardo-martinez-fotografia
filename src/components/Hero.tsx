import { motion, useReducedMotion } from "framer-motion"
import { HERO_IMAGE } from "../data/galleries"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="inicio" className="relative h-svh min-h-[640px] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Pareja de recién casados en un momento íntimo al atardecer"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="text-[11px] font-medium tracking-[0.42em] text-champagne uppercase"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Wedding Photographer
        </motion.p>

        <motion.h1
          className="font-display mt-5 text-[2.7rem] leading-[1.1] text-ivory sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Ricardo Martínez
        </motion.h1>

        <motion.span
          className="mt-7 h-px w-16 bg-champagne/90"
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        <motion.p
          className="font-display mt-7 max-w-lg text-lg font-normal text-ivory/85 italic md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          Capturando el amor en sus momentos más auténticos
        </motion.p>

        <motion.a
          href="#portafolio"
          className="mt-12 inline-flex items-center border border-ivory/40 px-8 py-3 text-[11px] font-medium tracking-[0.28em] text-ivory uppercase transition duration-500 hover:border-champagne hover:bg-ivory/10"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          Ver Portafolio
        </motion.a>
      </div>
    </section>
  )
}
