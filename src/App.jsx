import React from 'react';
import minhaFoto from './assets/minhaFoto.png'; 

function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white bg-[#050505] text-slate-300">
      
      {/* 1. NAVBAR FIXA */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-purple-500 font-mono font-bold tracking-tighter text-xl">{'<THAMILES />'}</span>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#sobre" className="hover:text-purple-400 transition">Sobre</a>
            <a href="#sistemas" className="hover:text-purple-400 transition">Sistemas</a>
            <a href="#habilidades" className="hover:text-purple-400 transition">Habilidades</a>
          </div>
        </div>
      </nav>

      {/* Estrelas de fundo */}
      <div className="fixed inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

           

      {/* 2. HERO SECTION REFINADA */}
      <header className="relative pt-48 pb-32 px-6">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative p-1 bg-gradient-to-tr from-purple-400 via-fuchsia-500 to-transparent rounded-full">
              <img 
                src={minhaFoto} 
                alt="Thamiles Carvalho" 
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#050505]"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <span className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 block">Status: Disponível para Missões</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              THAMILES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">CARVALHO</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 font-light max-w-xl">
              Desenvolvedora Back-End Jr focada em construir o motor que faz a tecnologia girar: APIs robustas, escaláveis e resilientes[cite: 11].
            </p>
          </div>
        </div>
      </header>

      {/* 3. SEÇÃO SOBRE (O STORYTELLING) */}
      <section id="sobre" className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-3xl relative">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-purple-500"></span> Bio-Transmissão
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Minha trajetória começou em Suporte e Operações, onde aprendi que tecnologia não é apenas código, mas a resolução de problemas reais de pessoas reais. 
            Hoje, como recém-formada em ADS pela **UNIFOR** [cite: 86], aplico essa visão prática na construção de arquiteturas Back-End com Node.js e SQL, garantindo que o sistema funcione melhor do que ontem.
          </p>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
<a 
  href="https://wa.me/5585981852263" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 group">
  {/* Efeito de Brilho Neon Atrás */}
  <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-500"></div>
  
  <div className="relative bg-[#0a0a0a] border border-purple-500/50 p-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
    <svg 
      className="w-7 h-7 text-purple-400 group-hover:text-purple-300" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
  </a>

      {/* 4. SISTEMAS ATIVOS (PROJETOS) */}
      <section id="sistemas" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-xs font-bold text-purple-500 mb-12 tracking-[0.4em] uppercase text-center">Protocolos & Projetos</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Gestão Financeira */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-mono text-[10px] text-slate-600 tracking-tighter uppercase">Deployed: Render // Neon</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">Gestão Financeira API</h3>
            <p className="mt-4 text-slate-400 mb-6">
              Implementação de uma API RESTful para controle de transações utilizando **Arquitetura MVP**. Otimizada para consultas complexas em PostgreSQL.
            </p>
            <div className="flex gap-3">
              <span className="text-[10px] font-bold border border-purple-500/20 px-2 py-1 rounded text-purple-300">NODE.JS</span>
              <span className="text-[10px] font-bold border border-purple-500/20 px-2 py-1 rounded text-purple-300">POSTGRESQL</span>
            </div>
          </div>
          
          {/* Espaço para o próximo projeto */}
          <div className="border border-dashed border-white/10 p-8 rounded-2xl flex items-center justify-center text-slate-600">
             Próxima Missão em Desenvolvimento...
          </div>
        </div>
      </section>

      {/* 5. HABILIDADES (CORE ENGINE) */}
<section id="habilidades" className="max-w-6xl mx-auto py-20 px-6">
  <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-3xl relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px]"></div>
    <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
      <span className="w-8 h-[1px] bg-purple-500"></span> Core Engine Skills
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: 'Node.js', icon: '⚡' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'SQL', icon: 'DB' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'API RESTful', icon: '☁️' },
        { name: 'Git/GitHub', icon: 'GIT' },
        { name: 'Kotlin', icon: 'K' },
        { name: 'Python', icon: 'PY' }
      ].map(skill => (
        <div key={skill.name} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition shadow-sm hover:shadow-purple-500/10">
          <span className="text-xs font-mono text-purple-500">{skill.icon}</span>
          <span className="text-sm font-bold text-slate-300">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. FOOTER FINAL */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
           <p className="text-purple-300 font-bold tracking-widest uppercase text-sm">Thamiles Carvalho // 2026</p>
           <p className="mt-2 text-slate-600 text-[10px] uppercase">Fortaleza, CE // UNIFOR // Análise e Desenvolvimento de Sistemas [cite: 86, 96, 97]</p>
        </div>
      </footer>
    </div>
    
    
  );
  
  
}


export default App;