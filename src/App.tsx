import { useState, useEffect } from 'react';
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../tina/__generated__/client";

function App() {
  const [activeData, setActiveData] = useState<any>(null);

  useEffect(() => {
    client.queries.page({ relativePath: 'home.md' }).then((res) => setActiveData(res));
  }, []);

  const { data } = useTina({
    query: activeData?.query,
    variables: activeData?.variables,
    data: activeData?.data,
  });

  const content = data?.page;

  if (!content) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background-warm/90 backdrop-blur-md border-b border-accent/10">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">favorite</span>
            </div>
            <div className="flex flex-col leading-tight">
              <h2 className="text-lg font-bold tracking-tight text-primary">{content.header?.title}</h2>
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">{content.header?.subtitle}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#narrative">Meine Geschichte</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#mission">Vision</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#approach">Der Weg</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#formats">Begleitung</a>
            </nav>
            <button className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold h-11 px-7 rounded-full transition-all shadow-md">
              Gespräch vereinbaren
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wide uppercase text-xs">
                <span className="w-8 h-[1px] bg-accent"></span> {content.hero?.badge}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a202c]">
                {content.hero?.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                {content.hero?.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white text-base font-bold h-14 px-10 rounded-full transition-all shadow-lg flex items-center justify-center gap-2">
                  {content.hero?.ctaPrimary} <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-transparent border border-accent/30 hover:border-accent text-accent font-bold h-14 px-8 rounded-full transition-all flex items-center justify-center">
                  {content.hero?.ctaSecondary}
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div
                className="aspect-[4/5] rounded-[2rem] bg-cover bg-center shadow-2xl overflow-hidden"
                data-alt="Candid moment of two nurses laughing softly in a warm, sunlit hallway"
                style={{ backgroundImage: `url("${content.hero?.image}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block border border-accent/10">
                <p className="text-sm italic text-gray-500 mb-2">"Gute Pflege beginnt bei der Pflege der Pflegenden."</p>
                <span className="text-xs font-bold text-primary">— Dr. Elena Schmidt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="warm-gradient py-24" id="narrative">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-5/12 order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3 transition-transform group-hover:rotate-1"></div>
                  <img alt="Elena Schmidt portrait" className="relative rounded-2xl shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 w-full aspect-[3/4] object-cover" src={content.mission?.image} />
                </div>
              </div>
              <div className="w-full md:w-7/12 order-1 md:order-2">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">{content.mission?.badge}</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{content.mission?.title}</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <div className="tina-content">
                    <TinaMarkdown content={content.mission?.content} />
                  </div>

                  <div className="pt-4">
                    <p className="font-serif italic text-2xl text-primary">"Ich zeige Ihnen nicht nur, wie das Gehirn funktioniert – ich zeige Ihnen, wie wir gemeinsam wieder Mensch sein können."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wenn das System schwer wird...</h2>
            <p className="text-gray-500">Ich kenne die Knotenpunkte, die den Klinikalltag ersticken. Lassen Sie uns diese gemeinsam lösen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="story-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Stille Erschöpfung</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Wenn "Funktionieren" zur einzigen Priorität wird, stirbt die Freude am Beruf. Wir reaktivieren die neurobiologischen Grundlagen der Resilienz.</p>
            </div>
            <div className="story-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined">chat_bubble_outline</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mauern in der Kommunikation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Missverständnisse zwischen Stationen oder Hierarchien. Ich schaffe Räume für echte Begegnung, basierend auf Vertrauen statt Angst.</p>
            </div>
            <div className="story-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Verlust der Bindung</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Fachkräfte gehen nicht wegen der Arbeit, sondern wegen der Kultur. Wir bauen eine Umgebung, die Menschen hält, weil sie sich gesehen fühlen.</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-24 border-y border-accent/5" id="mission">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Transformation</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Wie wir die Kultur in Ihrer Klinik <span className="text-primary italic">neu beleben</span>.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary shrink-0">spa</span>
                    <div>
                      <h4 className="font-bold mb-1">Innere Ruhe</h4>
                      <p className="text-sm text-gray-500">Strategien, um auch im Chaos des Schichtdienstes bei sich zu bleiben.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary shrink-0">volunteer_activism</span>
                    <div>
                      <h4 className="font-bold mb-1">Empathische Führung</h4>
                      <p className="text-sm text-gray-500">Leiten mit Klarheit und Herz, statt mit Druck und Kontrolle.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary shrink-0">groups_2</span>
                    <div>
                      <h4 className="font-bold mb-1">Echter Zusammenhalt</h4>
                      <p className="text-sm text-gray-500">Ein Wir-Gefühl, das auch unter hoher Last nicht bricht.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary shrink-0">psychology_alt</span>
                    <div>
                      <h4 className="font-bold mb-1">Neuro-Growth</h4>
                      <p className="text-sm text-gray-500">Fehler als Chance nutzen, um gemeinsam zu wachsen.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img alt="Team interacting positively" className="rounded-3xl shadow-lg brightness-90 saturate-[0.8]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwhM73E5iXGJLvY7o4DpQrpZP17QFT6t0pzFLNUUJJD7MbR0VZqbx5yFddSbGt7ijwZKq09n9d3A_px1OyiSz7q2WZ1j6G78d9kf8x0VPO1Ybtg1Co7m4SSf0p4lDFIZLQJeb68GHQYKTixIRf6ii2uwisMGYaj4Ga98Q_B7xSbVujbskad16n3Bqf8SP1RmX82DTfDKA_RWc6qbfCikgVHC2uFU27gSLht7AEQYEvgtBoV-AXUL0DSOPcq7C80laK1oB10gfN4l8" />
                  <div className="absolute inset-0 border-[20px] border-white/20 rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="max-w-[1200px] mx-auto px-6 py-24" id="formats">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Gemeinsame Wege gehen</h2>
            <p className="text-gray-500 text-lg">Kein Standard-Coaching, sondern individuelle Begleitung für Ihren Klinikalltag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-background-warm p-10 rounded-[2rem] border border-accent/20 flex flex-col items-start text-left hover:bg-white transition-all shadow-sm hover:shadow-md">
              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Für Stationen</span>
              <h3 className="text-2xl font-bold mb-4">Menschliche Team-Tage</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">Wir nehmen uns Zeit für die Dynamik im Team. Vor Ort, praxisnah und mit sofort spürbarer Entlastung durch neurobiologische Tools.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Stress-Mapping Station</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Kommunikation im Fokus</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Sofortige Umsetzung</li>
              </ul>
              <button className="mt-auto w-full py-4 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Details anfragen</button>
            </div>
            <div className="bg-primary p-10 rounded-[2rem] text-white flex flex-col items-start text-left shadow-2xl scale-105 relative z-10">
              <div className="absolute -top-4 right-8 bg-accent text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Beliebt</div>
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest mb-6">Für Führungskräfte</span>
              <h3 className="text-2xl font-bold mb-4">Neuro-Leader Circle</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">Führen in der Pflege ist Hochleistungssport. Lernen Sie, wie Sie Ihr Gehirn und das Ihres Teams auf Resilienz und Kooperation programmieren.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="material-symbols-outlined">verified</span> Strategisches Coaching</li>
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="material-symbols-outlined">verified</span> Burnout-Prävention</li>
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="material-symbols-outlined">verified</span> Kulturwandel-Begleitung</li>
              </ul>
              <button className="mt-auto w-full py-4 rounded-full bg-white text-primary font-bold hover:bg-background-warm transition-all">Jetzt Platz sichern</button>
            </div>
            <div className="bg-background-warm p-10 rounded-[2rem] border border-accent/20 flex flex-col items-start text-left hover:bg-white transition-all shadow-sm hover:shadow-md">
              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Für Events</span>
              <h3 className="text-2xl font-bold mb-4">Wissens-Impulse</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">Inspirierende Keynotes, die komplexe Hirnforschung lebendig und nahbar für alle Mitarbeitenden Ihrer Klinik übersetzen.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Aha-Momente garantiert</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Storytelling-Format</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="material-symbols-outlined text-primary">done</span> Aktuelle Forschung</li>
              </ul>
              <button className="mt-auto w-full py-4 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Themen entdecken</button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="bg-accent/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-primary" cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"></circle>
                <circle className="text-accent" cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5"></circle>
              </svg>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Gute Pflege ist kein Zufall, sondern das Ergebnis <span className="text-primary">menschlicher Arbeit</span>.</h2>
              <p className="text-lg text-gray-600 mb-12">Sind Sie bereit, den ersten Schritt in eine gesündere Zukunft für Ihr Team zu gehen? Ich freue mich auf Ihre Nachricht.</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-12 rounded-full shadow-xl transition-all">
                  Kennenlerngespräch buchen
                </button>
                <button className="bg-white border border-accent/20 hover:border-accent text-accent font-bold h-16 px-10 rounded-full transition-all">
                  Methodik-Guide (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-accent/10 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">favorite</span>
                <span className="font-bold text-xl tracking-tight">Neuroscience Healthcare</span>
              </div>
              <p className="max-w-xs text-sm text-gray-500 leading-relaxed">Begleitung für Kliniken und Pflegeteams. Wissenschaftlich fundiert, menschlich gelebt.</p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Menü</h4>
                <a className="text-sm text-gray-600 hover:text-primary" href="#narrative">Über mich</a>
                <a className="text-sm text-gray-600 hover:text-primary" href="#mission">Vision</a>
                <a className="text-sm text-gray-600 hover:text-primary" href="#approach">Methodik</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Rechtliches</h4>
                <a className="text-sm text-gray-600 hover:text-primary" href="#">Impressum</a>
                <a className="text-sm text-gray-600 hover:text-primary" href="#">Datenschutz</a>
                <a className="text-sm text-gray-600 hover:text-primary" href="#">Kontakt</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© 2024 Dr. Elena Schmidt. Für eine Pflege mit Zukunft.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary" href="#">LinkedIn</a>
              <a className="hover:text-primary" href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
