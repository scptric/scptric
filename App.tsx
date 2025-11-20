import React, { useState } from 'react';
import { Menu, X, LayoutGrid, Users, CreditCard, TrendingUp, ArrowRight, Layers, Server, Box, Check } from 'lucide-react';
import { NeoButton } from './components/NeoButton';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-scptric-black text-white font-sans selection:bg-scptric-blue selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-scptric-black border-b-2 border-white">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Inlined SVG Logo */}
            <svg viewBox="0 0 32 32" className="w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.4" y="8.9" width="17.1" height="3.2" transform="translate(-4.2 10.9) rotate(-45)"/>
              <rect x="2.2" y="19.8" width="17.1" height="3.2" transform="translate(-11.9 13.9) rotate(-45)"/>
              <polygon points="26.3 3.3 18.6 11 24.1 16.4 14.2 26.3 16.5 28.6 28.6 16.4 23.2 11 28.6 5.5 26.3 3.3"/>
            </svg>
            <span className="text-3xl font-bold tracking-tighter">SCPTRIC</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-bold text-lg uppercase tracking-wide">
            <a href="#solutions" className="hover:text-scptric-blue hover:underline decoration-4 underline-offset-4 decoration-scptric-blue transition-all">Capabilities</a>
            <a href="#products" className="hover:text-scptric-blue hover:underline decoration-4 underline-offset-4 decoration-scptric-blue transition-all">Products</a>
            <a href="#partners" className="hover:text-scptric-blue hover:underline decoration-4 underline-offset-4 decoration-scptric-blue transition-all">Partners</a>
            <a href="#about" className="hover:text-scptric-blue hover:underline decoration-4 underline-offset-4 decoration-scptric-blue transition-all">Company</a>
            <NeoButton variant="secondary" className="text-sm px-6 py-2" onClick={() => window.location.href = 'mailto:sales@scptric.dev'}>Contact Sales</NeoButton>
          </div>

          <button className="lg:hidden p-2 border-2 border-white" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-scptric-black border-b-2 border-white p-6 flex flex-col gap-4 z-40 shadow-neo">
            <a href="#solutions" className="text-xl font-bold uppercase border-2 border-white p-3 hover:bg-white hover:text-black transition-colors" onClick={toggleMenu}>Capabilities</a>
            <a href="#products" className="text-xl font-bold uppercase border-2 border-white p-3 hover:bg-white hover:text-black transition-colors" onClick={toggleMenu}>Products</a>
            <a href="#partners" className="text-xl font-bold uppercase border-2 border-white p-3 hover:bg-white hover:text-black transition-colors" onClick={toggleMenu}>Partners</a>
            <a href="#about" className="text-xl font-bold uppercase border-2 border-white p-3 hover:bg-white hover:text-black transition-colors" onClick={toggleMenu}>Company</a>
            <NeoButton className="w-full" onClick={() => { window.location.href = 'mailto:sales@scptric.dev'; toggleMenu(); }}>Contact Sales</NeoButton>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-white min-h-[85vh] flex flex-col justify-center">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
             style={{
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
               backgroundSize: '50px 50px'
             }}>
        </div>

        {/* Marquee Backgrounds */}
        <div className="absolute top-[10%] left-0 w-full overflow-hidden opacity-100 z-0 pointer-events-none select-none">
           <div className="flex w-max animate-marquee">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold uppercase leading-none stroke-text-white whitespace-nowrap mr-16 md:mr-32">
                  System Logic Data
                </span>
              ))}
           </div>
        </div>

        <div className="absolute bottom-[10%] left-0 w-full overflow-hidden opacity-100 z-0 pointer-events-none select-none">
           <div className="flex w-max animate-marquee-reverse">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold uppercase leading-none stroke-text-white whitespace-nowrap mr-16 md:mr-32">
                  Deploy Scale Secure
                </span>
              ))}
           </div>
        </div>
        
        {/* Blue Accent Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-scptric-blue opacity-10 -skew-x-12 transform origin-top pointer-events-none z-0 border-l-2 border-white/10"></div>
        
        <div className="container mx-auto px-4 relative z-10 pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            <div className="inline-block bg-white text-black px-2 py-1 font-bold mb-6 border-2 border-scptric-blue transform -rotate-2 shadow-neo-hover">
              ENTERPRISE GRADE SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 uppercase tracking-tight">
              Smart Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">For Complex</span> <br/>
              <span className="bg-scptric-blue text-white px-2">Business</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed border-l-4 border-scptric-blue pl-6 bg-black/50 backdrop-blur-sm py-2">
              Scptric engineers high-performance ERP, CRM, and POS systems. We build the digital backbone of modern commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <NeoButton onClick={() => window.location.href = '#products'}>
                View Products
              </NeoButton>
              <NeoButton variant="outline" onClick={() => window.location.href = '#solutions'}>
                Explore Modules
              </NeoButton>
            </div>
          </div>
        </div>
      </header>

      {/* Core Capabilities Section - Added scroll-mt-28 for nav offset */}
      <section id="solutions" className="py-20 bg-white text-black relative scroll-mt-28">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16 border-b-4 border-black pb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">Core Capabilities</h2>
            <ArrowRight className="w-12 h-12 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <LayoutGrid className="w-10 h-10" />, 
                title: "Integration", 
                desc: "Seamlessly unify supply chain, manufacturing, and logistics data into one source of truth." 
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: "Intelligence", 
                desc: "Automated customer insights, lead scoring, and predictive behavior analysis." 
              },
              { 
                icon: <CreditCard className="w-10 h-10" />, 
                title: "Commerce", 
                desc: "High-speed transactional processing built for omnichannel retail environments." 
              },
              { 
                icon: <TrendingUp className="w-10 h-10" />, 
                title: "Finance", 
                desc: "Precision accounting with real-time ledgers and automated compliance reporting." 
              }
            ].map((service, idx) => (
              <div key={idx} className="border-4 border-black p-8 shadow-neo hover:shadow-[12px_12px_0px_0px_#0057d9] transition-all hover:-translate-y-2 bg-white group cursor-pointer flex flex-col h-full">
                <div className="mb-6 p-4 border-2 border-black inline-block bg-scptric-blue text-white group-hover:bg-black group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-lg font-medium leading-relaxed opacity-80 flex-grow">{service.desc}</p>
                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 bg-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Added scroll-mt-28 for nav offset */}
      <section id="products" className="py-24 bg-scptric-black relative border-y-2 border-white scroll-mt-28">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#0057d9 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 border-2 border-scptric-blue px-4 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-scptric-blue rounded-full"></div>
                <span className="text-scptric-blue font-bold uppercase text-sm">Available Now</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6">Our Product Suite</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-xl">Complete software packages ready to deploy for your enterprise.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product 1: ERP */}
              <div className="border-2 border-white bg-black p-8 hover:border-scptric-blue transition-colors relative group flex flex-col">
                 <div className="absolute top-0 right-0 p-2 bg-white text-black font-bold text-xs border-l-2 border-b-2 border-black z-10">v4.2.0</div>
                 <div className="mb-6 text-scptric-blue">
                   <Server className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-bold uppercase mb-2">Scptric ERP</h3>
                 <p className="text-gray-400 mb-8">Total resource management for complex industrial operations.</p>
                 <ul className="space-y-3 mb-8 text-sm border-t border-gray-800 pt-6 flex-grow">
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Multi-Warehouse Sync</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Automated Procurement</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> HR & Payroll Module</li>
                 </ul>
                 <NeoButton className="w-full mt-auto">View Specs</NeoButton>
              </div>

              {/* Product 2: CRM */}
              <div className="border-2 border-white bg-black p-8 hover:border-scptric-blue transition-colors relative group shadow-neo-white transform lg:-translate-y-4 flex flex-col">
                 <div className="absolute top-0 right-0 p-2 bg-scptric-blue text-white font-bold text-xs border-l-2 border-b-2 border-white z-10">BESTSELLER</div>
                 <div className="mb-6 text-white">
                   <Users className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-bold uppercase mb-2">Nexus CRM</h3>
                 <p className="text-gray-400 mb-8">Customer intelligence platform driven by behavioral data.</p>
                 <ul className="space-y-3 mb-8 text-sm border-t border-gray-800 pt-6 flex-grow">
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Pipeline Automation</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Email Marketing Integration</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> AI Lead Scoring</li>
                 </ul>
                 <NeoButton variant="primary" className="w-full mt-auto">Start Trial</NeoButton>
              </div>

              {/* Product 3: POS */}
              <div className="border-2 border-white bg-black p-8 hover:border-scptric-blue transition-colors relative group flex flex-col">
                 <div className="absolute top-0 right-0 p-2 bg-white text-black font-bold text-xs border-l-2 border-b-2 border-black z-10">v2.1.5</div>
                 <div className="mb-6 text-scptric-blue">
                   <Box className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-bold uppercase mb-2">PointMax POS</h3>
                 <p className="text-gray-400 mb-8">High-velocity transaction terminal for retail and hospitality.</p>
                 <ul className="space-y-3 mb-8 text-sm border-t border-gray-800 pt-6 flex-grow">
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Offline Capability</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Real-time Inventory</li>
                   <li className="flex items-center gap-2"><Check className="w-4 h-4 text-scptric-blue" /> Hardware Agnostic</li>
                 </ul>
                 <NeoButton className="w-full mt-auto">Get Demo</NeoButton>
              </div>
            </div>
         </div>
      </section>

      {/* Partners Section - Added scroll-mt-28 for nav offset */}
      <section id="partners" className="py-20 bg-white text-black border-b-2 border-white scroll-mt-28">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
               <h2 className="text-3xl md:text-4xl font-bold uppercase">Trusted By Industry Leaders</h2>
               <p className="text-lg font-medium mt-4 md:mt-0">Powering systems for 500+ companies.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {['GOOGLE', 'MICROSOFT', 'SHOPIFY', 'STRIPE', 'AMAZON', 'ORACLE'].map((partner, idx) => (
                  <div key={idx} className="h-24 border-2 border-black flex items-center justify-center font-bold text-xl md:text-2xl tracking-tighter hover:bg-black hover:text-white transition-all cursor-default select-none shadow-neo-hover">
                     {partner}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-20 bg-scptric-blue border-b-2 border-white text-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
               { label: "Uptime Guarantee", val: "99.99%" },
               { label: "Enterprise Clients", val: "500+" },
               { label: "Daily Transactions", val: "2.4M" },
               { label: "Custom Modules", val: "150+" },
             ].map((stat, idx) => (
               <div key={idx} className="border-2 border-white p-6 hover:bg-white hover:text-scptric-blue transition-colors cursor-default">
                 <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.val}</div>
                 <div className="text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* About / Feature Split - Added scroll-mt-28 for nav offset */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] scroll-mt-28">
        <div className="bg-white text-black p-12 md:p-14 lg:p-20 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-white">
          <Layers className="w-16 h-16 mb-8 text-scptric-blue" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-8">Software Architecture</h2>
          <p className="text-xl font-medium mb-8">
            We don't rely on bloated templates. Scptric builds lean, modular, and scalable software tailored to your specific operational workflows. Our systems grow as you grow.
          </p>
          <ul className="space-y-4 font-bold">
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-scptric-blue"></div> API-First Design
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-scptric-blue"></div> Cloud-Native Deployment
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-scptric-blue"></div> Real-Time Analytics
            </li>
          </ul>
        </div>
        <div className="bg-[#111] text-white p-12 md:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-scptric-blue opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-8">Clean Code Protocol</h2>
             <p className="text-xl text-gray-300 mb-10">
               Inefficiency is a bug. We write software that optimizes your business logic, eliminating redundancy and accelerating decision-making.
             </p>
             <div className="p-6 border-2 border-white bg-black/50 backdrop-blur-sm">
              <code className="font-mono text-green-400 text-sm block mb-2">
                &gt; compiling_modules... <br />
                &gt; erp_core: integrated <br />
                &gt; crm_sync: active <br />
                &gt; deployment: success
              </code>
                <div className="h-2 w-full bg-gray-800 mt-4 overflow-hidden">
                  <div className="h-full bg-white w-2/3 animate-pulse"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-scptric-black border-t-2 border-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-5xl font-bold uppercase mb-6">Ready to<br/>Scale Up?</h2>
              <NeoButton className="text-xl px-10 py-4" onClick={() => window.location.href = 'mailto:sales@scptric.dev'}>Request Demo</NeoButton>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-lg">
              <div>
                <h4 className="font-bold uppercase text-scptric-blue mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><a href="#products" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">ERP Suite</a></li>
                  <li><a href="#products" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">CRM Cloud</a></li>
                  <li><a href="#products" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">Retail POS</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-scptric-blue mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">Documentation</a></li>
                  <li><a href="#" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">API Status</a></li>
                  <li><a href="mailto:support@scptric.dev" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-scptric-blue mb-4">Socials</h4>
                <ul className="space-y-2">
                  <li><a href="https://x.com/scptric" target="_blank" rel="noopener noreferrer" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">X / Twitter</a></li>
                  <li><a href="https://instagram.com/scptric" target="_blank" rel="noopener noreferrer" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">Instagram</a></li>
                  <li><a href="https://facebook.com/scptric" target="_blank" rel="noopener noreferrer" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">Facebook</a></li>
                  <li><a href="https://linkedin.com/company/scptric" target="_blank" rel="noopener noreferrer" className="hover:text-scptric-blue hover:underline decoration-2 underline-offset-4">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
             <p>&copy; 2025 SCPTRIC SOFTWARE INC. ALL RIGHTS RESERVED.</p>
             <div className="flex gap-4 mt-4 md:mt-0 font-mono">
               <span>BUILD: STABLE</span>
               <span>REGION: GLOBAL</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;