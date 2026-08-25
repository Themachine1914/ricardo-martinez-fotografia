import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const light = scrolled || open

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light
          ? "bg-ivory/95 shadow-[0_1px_0_rgba(28,25,23,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-[5.5rem] md:px-8">
        <a href="#inicio" className="relative z-50 block" aria-label="Ricardo Martinez — inicio">
          <img
            src="/logo.png"
            alt="Ricardo Martinez Fotografía Studio"
            className={`h-12 w-auto origin-left transition duration-500 md:h-14 ${
              light ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.28em] uppercase transition-colors duration-300 ${
                light
                  ? "text-ink/80 hover:text-ink"
                  : "text-ivory/85 hover:text-ivory"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`relative z-50 md:hidden ${light ? "text-ink" : "text-ivory"}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
        </button>
      </div>

    </header>
    {createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col items-center justify-center gap-8 pt-8"
              aria-label="Móvil"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.45 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    )}
    </>
  )
}
