import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Plans } from "./components/Plans"
import { Portfolio } from "./components/Portfolio"
import { Testimonials } from "./components/Testimonials"

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Testimonials />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
