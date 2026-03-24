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
      <footer className="py-20 px-10 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-black tracking-tighter text-white uppercase italic">STUDIO</div>
          <div className="flex gap-10 text-zinc-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div className="text-zinc-700 text-[10px] font-mono tracking-widest uppercase">
            &copy; 2026 WHISK STUDIO. ALL SYSTEMS GO.
          </div>
        </div>
      </footer>
    </main>
  );
}
