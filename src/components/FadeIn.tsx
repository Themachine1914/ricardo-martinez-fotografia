import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
      <p className="text-[11px] font-medium tracking-[0.38em] text-champagne uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-4xl leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      <span
        className="mx-auto mt-6 block h-px w-16 bg-champagne/80"
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mt-6 font-light tracking-wide text-stone">{subtitle}</p>
      ) : null}
    </FadeIn>
  )
}
