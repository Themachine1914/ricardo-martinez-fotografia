import { motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import type { Photo } from "../data/galleries"

type LightboxProps = {
  photos: Photo[]
  index: number
  onClose: () => void
  onIndex: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onIndex }: LightboxProps) {
  const photo = photos[index]
  const reduce = useReducedMotion()

  const prev = useCallback(() => {
    onIndex((index - 1 + photos.length) % photos.length)
  }, [index, onIndex, photos.length])

  const next = useCallback(() => {
    onIndex((index + 1) % photos.length)
  }, [index, onIndex, photos.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [next, onClose, prev])

  if (!photo) return null

  return createPortal(
    <motion.div
        className="fixed inset-0 z-[100] flex flex-col bg-ink"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Galería"
      >
        <div className="flex items-center justify-between px-5 py-4 text-ivory/80 md:px-8">
          <p className="text-[11px] tracking-[0.28em] uppercase">
            {photo.wedding}
            <span className="mx-3 text-champagne">·</span>
            {photo.location}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-1 transition hover:text-ivory"
          >
            <X size={22} strokeWidth={1.4} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 md:px-16">
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-2 z-10 hidden p-2 text-ivory/70 transition hover:text-ivory md:block"
          >
            <ChevronLeft size={36} strokeWidth={1.2} />
          </button>

          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="max-h-full max-w-full object-contain shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          />

          <button
            type="button"
            onClick={next}
            aria-label="Foto siguiente"
            className="absolute right-2 z-10 hidden p-2 text-ivory/70 transition hover:text-ivory md:block"
          >
            <ChevronRight size={36} strokeWidth={1.2} />
          </button>
        </div>

        <div className="flex items-center justify-between px-5 pb-6 text-ivory/55 md:px-8">
          <div className="flex gap-4 md:hidden">
            <button type="button" onClick={prev} aria-label="Foto anterior">
              <ChevronLeft size={28} strokeWidth={1.2} />
            </button>
            <button type="button" onClick={next} aria-label="Foto siguiente">
              <ChevronRight size={28} strokeWidth={1.2} />
            </button>
          </div>
          <p className="ml-auto text-[11px] tracking-[0.22em]">
            {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </p>
        </div>
      </motion.div>,
    document.body,
  )
}
