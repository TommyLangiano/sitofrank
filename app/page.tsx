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
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md shadow-lg px-6 py-3 rounded-full border border-foreground/5">
          <div className="flex items-center gap-10">
            <div className="text-[15px] font-semibold tracking-tight text-[var(--primary)]">
              Azienda
            </div>
            <div className="flex gap-6">
              <a href="#calcio" className="text-[13px] text-foreground/70 hover:text-[var(--primary)] transition-colors font-medium">
                Calcio
              </a>
              <a href="#immobiliare" className="text-[13px] text-foreground/70 hover:text-[var(--primary)] transition-colors font-medium">
                Immobiliare
              </a>
              <a href="#team" className="text-[13px] text-foreground/70 hover:text-[var(--primary)] transition-colors font-medium">
                Team
              </a>
              <a href="#contatti" className="text-[13px] text-foreground/70 hover:text-[var(--primary)] transition-colors font-medium">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent"></div>
            {/* Gradient bottom per transizione fluida */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full pl-16 md:pl-24 lg:pl-32">
            <div className="max-w-[700px]">
              <h1 className="text-[80px] leading-[1.05] font-bold tracking-tight mb-6">
                <span className="text-[var(--primary)]">Calcio</span> & <span className="text-[var(--primary)]">Immobiliare</span>
              </h1>
              <p className="text-[20px] leading-relaxed text-foreground/80 mb-12 max-w-[500px]">
                Eccellenza nella gestione di carriere calcistiche e proprietà immobiliari
              </p>
              <div className="flex gap-3">
                <Button size="lg" className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 rounded-full px-8 shadow-lg border-0">
                  Parla con noi
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-white/90 rounded-full px-8">
                  Servizi
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Football Agency Section */}
      <section id="calcio" className="relative py-32 -mt-20">
        <div className="w-full relative z-10">
          <div className="text-center mb-12 px-6">
            <h2 className="text-[48px] font-light mb-4 text-[var(--primary)]">Football Agency</h2>
            <p className="text-[18px] text-foreground/60 max-w-[600px] mx-auto">
              Gestione professionale di carriere calcistiche
            </p>
          </div>

          <InfiniteCarousel />
        </div>
      </section>

      {/* Real Estate Section */}
      <section id="immobiliare" className="py-32 px-6 bg-[var(--primary)] text-white">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-light mb-4">Real Estate</h2>
            <p className="text-[18px] text-white/80 max-w-[600px] mx-auto">
              Gestione professionale di proprietà e locazioni in Svizzera
            </p>
          </div>

          <BentoGrid />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="text-[20px] font-medium mb-2">Affidabilità</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                Partner di fiducia per la gestione immobiliare
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[20px] font-medium mb-2">Gestione Proprietà</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                Servizio completo di amministrazione e manutenzione
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[20px] font-medium mb-2">Locazioni</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                Consulenza specializzata per affitti residenziali e commerciali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <h2 className="text-[48px] font-light mb-4 text-[var(--primary)]">Il Team</h2>
          <p className="text-[18px] text-foreground/60 mb-16 max-w-[600px]">
            Professionisti dedicati al vostro successo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-xl mb-4"></div>
              <h3 className="text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[14px] text-white/80 mb-3">Ruolo</p>
              <p className="text-[13px] text-white/70 leading-relaxed mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </Card>

            <Card className="p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-xl mb-4"></div>
              <h3 className="text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[14px] text-white/80 mb-3">Ruolo</p>
              <p className="text-[13px] text-white/70 leading-relaxed mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </Card>

            <Card className="p-6 border-none bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all shadow-lg">
              <div className="aspect-[3/4] bg-white/10 rounded-xl mb-4"></div>
              <h3 className="text-[20px] font-semibold text-white mb-1">Nome Cognome</h3>
              <p className="text-[14px] text-white/80 mb-3">Ruolo</p>
              <p className="text-[13px] text-white/70 leading-relaxed mb-4">
                Breve biografia professionale
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="max-w-[600px]">
            <h2 className="text-[48px] font-light mb-4 text-[var(--primary)]">Contattaci</h2>
            <p className="text-[18px] text-foreground/60 mb-12">
              Rispondiamo entro 24-48 ore
            </p>

            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Nome"
                  className="border-0 border-b border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-0 border-b border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)]"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Telefono (opzionale)"
                  className="border-0 border-b border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary)]"
                />
              </div>

              <div>
                <select className="w-full px-0 py-2 bg-transparent border-0 border-b border-foreground/10 text-[14px] focus:outline-none focus:border-[var(--primary)] transition-colors text-foreground/60">
                  <option>Sono interessato a...</option>
                  <option>Calcio</option>
                  <option>Immobiliare</option>
                  <option>Entrambi</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Messaggio"
                  rows={4}
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-foreground/10 text-[14px] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                ></textarea>
              </div>

              <p className="text-[13px] text-foreground/50">
                I tuoi dati saranno trattati nel rispetto della normativa svizzera sulla privacy
              </p>

              <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary)]/90">
                Invia richiesta
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-foreground/10">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[20px] font-medium mb-4">Azienda</h3>
              <p className="text-[14px] text-foreground/60">
                Ragione Sociale<br />
                Città, Svizzera
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium mb-4">Contatti</h3>
              <p className="text-[14px] text-foreground/60">
                email@azienda.ch
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium mb-4">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-[14px] text-foreground/60 hover:text-[var(--primary)] transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-[14px] text-foreground/60 hover:text-[var(--primary)] transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/10">
            <p className="text-[13px] text-foreground/50">
              © 2026 Azienda. Tutti i diritti riservati. <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
