import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import NexusGallery from "@/components/NexusGallery";
import SpectrumServices from "@/components/SpectrumServices";
import QuantumArchive from "@/components/QuantumArchive";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-white selection:text-black filmic-grain">
      <Navbar />
      
      {/* Cinematic Horizontal Entry */}
      <div id="hero">
        <CinematicHero />
      </div>
      
      {/* Non-Typical Typographic Services (No Cards) */}
      <div id="services">
        <SpectrumServices />
      </div>

      {/* Deep 3D Z-Axis Portfolio */}
      <div id="gallery">
        <NexusGallery />
      </div>
      
      {/* Quantum Archive (replacement for typical process) */}
      <div id="archive">
        <QuantumArchive />
      </div>

      {/* Final Massive CTA */}
      <section id="cta" className="py-32 md:py-60 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),transparent)]" />
        <div className="container mx-auto text-center relative z-10">
          <p className="text-black/40 font-mono text-[10px] md:text-xs mb-6 md:mb-10 tracking-[0.5em]">READY TO ASCEND?_</p>
          <h2 className="text-5xl md:text-7xl lg:text-[12vw] font-black text-black leading-[0.85] tracking-tighter mb-10 md:mb-20 uppercase italic">
            Ascend Your <br /> Reality.
          </h2>
          <button className="group relative px-10 py-5 md:px-20 md:py-10 rounded-full bg-black text-white text-xl md:text-3xl font-black hover:scale-105 transition-transform active:scale-95 shadow-2xl overflow-hidden">
             <span className="relative z-10">Start The Jump</span>
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
             <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-black z-20">Start The Jump</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="relative overflow-hidden border-t border-white/8 bg-black px-6 py-16 pb-28 md:px-10 md:py-20 lg:pb-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:90px_90px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:gap-12 md:pb-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.55em] text-white/40">
                Whisk Studio
              </p>
              <h3 className="max-w-3xl text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                Built To Feel
                <br />
                Bigger Than The Screen.
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                We shape cinematic digital work with stronger motion, clearer systems, and production that keeps the concept sharp all the way through launch.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:pl-12">
              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.45em] text-white/38">
                  Connect
                </p>
                <div className="flex flex-col gap-3 text-sm font-medium text-zinc-400">
                  <a href="#" className="transition-colors hover:text-white">Instagram</a>
                  <a href="#" className="transition-colors hover:text-white">Dribbble</a>
                  <a href="#" className="transition-colors hover:text-white">Twitter</a>
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.45em] text-white/38">
                  Contact
                </p>
                <a
                  href="mailto:hello@whisk.studio"
                  className="inline-flex rounded-full border border-white/12 px-5 py-3 text-xs font-black uppercase tracking-[0.35em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  hello@whisk.studio
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-600 md:flex-row md:items-center md:justify-between md:pt-8">
            <div>Copyright 2026 Whisk Studio</div>
            <div>Colombo to Everywhere</div>
            <div>All Systems Go</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
