import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { InfiniteCarousel } from "@/components/InfiniteCarousel"
import { BentoGrid } from "@/components/BentoGrid"
import { Linkedin } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1100px]">
        <div className="bg-[var(--primary)] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-4 md:px-10 py-3 md:py-4 rounded-[3px] border-[3px] border-[var(--primary)]">
          <div className="flex items-center justify-between">
            <div className="text-[14px] md:text-[16px] font-bold tracking-tight text-white">
              Azienda
            </div>
            <div className="flex gap-4 md:gap-10">
              <a href="#calcio" className="text-[12px] md:text-[14px] text-white/80 hover:text-white transition-colors font-medium">
                Calcio
              </a>
              <a href="#immobiliare" className="text-[12px] md:text-[14px] text-white/80 hover:text-white transition-colors font-medium whitespace-nowrap">
                Immobiliare
              </a>
              <a href="#team" className="text-[12px] md:text-[14px] text-white/80 hover:text-white transition-colors font-medium">
                Team
              </a>
              <a href="#contatti" className="text-[12px] md:text-[14px] text-white/80 hover:text-white transition-colors font-medium">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center px-4 md:px-6 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.png"
              alt="Hero background"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[center_70%]"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 md:via-background/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent"></div>
            {/* Gradient bottom per transizione fluida */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full pl-4 md:pl-16 lg:pl-32">
            <div className="max-w-[700px]">
              <h1 className="text-[40px] md:text-[60px] lg:text-[80px] leading-[1.05] font-bold tracking-tight mb-4 md:mb-6">
                <span className="text-[var(--primary)]">Calcio</span> & <span className="text-[var(--primary)]">Immobiliare</span>
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-foreground/80 mb-8 md:mb-12 max-w-[500px]">
                Eccellenza nella gestione di carriere calcistiche e proprietà immobiliari
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 rounded-full px-8 shadow-lg border-0 w-full sm:w-auto">
                  Parla con noi
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-white/90 rounded-full px-8 w-full sm:w-auto">
                  Servizi
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Football Agency Section */}
      <section id="calcio" className="relative py-16 md:py-32 -mt-10 md:-mt-20">
        <div className="w-full relative z-10">
          <div className="text-center mb-8 md:mb-12 px-4 md:px-6">
            <h2 className="text-[32px] md:text-[48px] font-light mb-3 md:mb-4 text-[var(--primary)]">Football Agency</h2>
            <p className="text-[15px] md:text-[18px] text-foreground/60 max-w-[600px] mx-auto">
              Gestione professionale di carriere calcistiche
            </p>
          </div>

          <InfiniteCarousel />
        </div>
      </section>

      {/* Real Estate Section */}
      <section id="immobiliare" className="py-16 md:py-32 px-4 md:px-6 bg-[var(--primary)] text-white">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[48px] font-light mb-3 md:mb-4">Real Estate</h2>
            <p className="text-[15px] md:text-[18px] text-white/80 max-w-[600px] mx-auto">
              Gestione professionale di proprietà e locazioni in Svizzera
            </p>
          </div>

          <BentoGrid />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mt-12 md:mt-16">
            <div className="text-center">
              <h3 className="text-[18px] md:text-[20px] font-medium mb-2">Affidabilità</h3>
              <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                Partner di fiducia per la gestione immobiliare
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[18px] md:text-[20px] font-medium mb-2">Gestione Proprietà</h3>
              <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                Servizio completo di amministrazione e manutenzione
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[18px] md:text-[20px] font-medium mb-2">Locazioni</h3>
              <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                Consulenza specializzata per affitti residenziali e commerciali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-light mb-3 md:mb-4 text-[var(--primary)]">Il Team</h2>
          <p className="text-[15px] md:text-[18px] text-foreground/60 mb-12 md:mb-16 max-w-[600px]">
            Professionisti dedicati al vostro successo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <Card className="p-5 md:p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-lg md:rounded-xl mb-3 md:mb-4"></div>
              <h3 className="text-[16px] md:text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mb-2 md:mb-3">Ruolo</p>
              <p className="text-[11px] md:text-[13px] text-white/70 leading-relaxed mb-3 md:mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </a>
            </Card>

            <Card className="p-5 md:p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-lg md:rounded-xl mb-3 md:mb-4"></div>
              <h3 className="text-[16px] md:text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mb-2 md:mb-3">Ruolo</p>
              <p className="text-[11px] md:text-[13px] text-white/70 leading-relaxed mb-3 md:mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </a>
            </Card>

            <Card className="p-5 md:p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-lg md:rounded-xl mb-3 md:mb-4"></div>
              <h3 className="text-[16px] md:text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mb-2 md:mb-3">Ruolo</p>
              <p className="text-[11px] md:text-[13px] text-white/70 leading-relaxed mb-3 md:mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background to-[var(--primary)]/5">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[48px] font-light mb-3 md:mb-4 text-[var(--primary)]">Contattaci</h2>
            <p className="text-[15px] md:text-[18px] text-foreground/60">
              Rispondiamo entro 24-48 ore
            </p>
          </div>

          <Card className="max-w-[900px] mx-auto p-6 md:p-12 border-none shadow-xl bg-white">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="text-[12px] md:text-[13px] font-medium text-foreground/70 mb-2 block">Nome *</label>
                  <Input
                    type="text"
                    placeholder="Il tuo nome"
                    className="border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[12px] md:text-[13px] font-medium text-foreground/70 mb-2 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="tuo@email.com"
                    className="border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="text-[12px] md:text-[13px] font-medium text-foreground/70 mb-2 block">Telefono</label>
                  <Input
                    type="tel"
                    placeholder="+41 XX XXX XX XX"
                    className="border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[12px] md:text-[13px] font-medium text-foreground/70 mb-2 block">Settore di interesse *</label>
                  <select className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-foreground/10 text-[13px] md:text-[14px] focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground/80">
                    <option>Seleziona...</option>
                    <option>Calcio</option>
                    <option>Immobiliare</option>
                    <option>Entrambi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[12px] md:text-[13px] font-medium text-foreground/70 mb-2 block">Messaggio *</label>
                <textarea
                  placeholder="Scrivi qui il tuo messaggio..."
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-foreground/10 text-[13px] md:text-[14px] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                <p className="text-[12px] md:text-[13px] text-foreground/50 max-w-[500px]">
                  I tuoi dati saranno trattati nel rispetto della normativa svizzera sulla privacy
                </p>

                <Button size="lg" className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 px-10 rounded-full shadow-lg whitespace-nowrap w-full sm:w-auto">
                  Invia richiesta
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary)] text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Azienda */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 md:mb-6">Azienda</h3>
              <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                Eccellenza nella gestione di carriere calcistiche e proprietà immobiliari in Svizzera.
              </p>
            </div>

            {/* Servizi */}
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6">Servizi</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#calcio" className="text-[13px] md:text-[14px] text-white/80 hover:text-white transition-colors">
                    Football Agency
                  </a>
                </li>
                <li>
                  <a href="#immobiliare" className="text-[13px] md:text-[14px] text-white/80 hover:text-white transition-colors">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-[13px] md:text-[14px] text-white/80 hover:text-white transition-colors">
                    Il Nostro Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6">Contatti</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="mailto:info@azienda.ch" className="text-[13px] md:text-[14px] text-white/80 hover:text-white transition-colors">
                    info@azienda.ch
                  </a>
                </li>
                <li>
                  <a href="tel:+41000000000" className="text-[13px] md:text-[14px] text-white/80 hover:text-white transition-colors">
                    +41 XX XXX XX XX
                  </a>
                </li>
                <li className="text-[13px] md:text-[14px] text-white/80 pt-2">
                  Città, Svizzera
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6">Seguici</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[12px] md:text-[13px] text-white/70 text-center md:text-left">
                © 2026 Azienda. Tutti i diritti riservati.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="#" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors whitespace-nowrap">
                  Termini e Condizioni
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
