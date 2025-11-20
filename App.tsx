import React from 'react';
import { NeoButton } from './components/NeoButton';
import logo from './assets/logo.svg?url';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-scptric-black text-white font-sans selection:bg-scptric-blue selection:text-white flex flex-col">

      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-scptric-black border-b-2 border-white">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Scptric logo" className="h-12 w-auto" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative flex items-center justify-center overflow-hidden pt-20">

        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}>
        </div>

        {/* Background Marquee for ambience */}
        <div className="absolute top-1/4 w-full overflow-hidden opacity-10 z-0 pointer-events-none select-none rotate-6 scale-110">
          <div className="flex w-max animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[6rem] md:text-[10rem] font-bold uppercase leading-none stroke-text-white whitespace-nowrap mr-16">
                COMING SOON
              </span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-scptric-blue text-white px-4 py-1 font-bold mb-8 border-2 border-white transform -rotate-2 shadow-neo-white">
            SYSTEM UPDATE
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-none mb-8 tracking-tight">
            Stay <br className="md:hidden" /> Tuned
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-3xl font-medium border-2 border-white bg-black p-6 shadow-neo">
              <span className="text-scptric-blue font-bold">SCPTRIC</span> IS COMING SOON
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <NeoButton onClick={() => window.location.href = 'mailto:sales@scptric.dev'}>
              Contact Us
            </NeoButton>
            <a
              href="https://x.com/scptric"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-bold text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider flex items-center justify-center"
            >
              Follow Updates
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-white bg-scptric-black py-8 relative z-20">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-sm text-gray-500 mb-4 md:mb-0">
            &copy; 2025 SCPTRIC SOFTWARE INC.
          </p>
          <div className="font-mono text-sm text-scptric-blue animate-pulse">
            STATUS: DEPLOYING...
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;