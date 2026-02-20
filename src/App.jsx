import React, { useState, useRef } from 'react';
import minhaFoto from './assets/perfil.png'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Text } from '@react-three/drei';

// --- COMPONENTE 3D: PLANETA ---
function Planeta({ position, size, color, wireframe, speed, ring }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} wireframe={wireframe} roughness={0.3} />
        {ring && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[size * 1.5, 0.02, 16, 100]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
      </mesh>
    </Float>
  );
}

// --- COMPONENTE 3D: CÓDIGO FLUTUANTE ---
function ElementoTech({ position, texto, speed, scale = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.5}>
      <Text 
        position={position} 
        fontSize={0.5 * scale} 
        color="#e879f9" 
        anchorX="center" 
        anchorY="middle"
      >
        {texto}
      </Text>
    </Float>
  );
}

// --- O UNIVERSO GERAL ---
function UniversoEspacial() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.rotation.x += delta * 0.01;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Planeta position={[-5, 2, -10]} size={1.2} color="#8b5cf6" speed={1.5} ring={true} />
      <Planeta position={[6, -3, -15]} size={2.5} color="#c084fc" wireframe={true} speed={1} />
      <Planeta position={[4, 5, -20]} size={1.5} color="#d8b4fe" speed={2} ring={true} />
      <Planeta position={[-7, -4, -12]} size={0.8} color="#a855f7" speed={2.5} />
      <Planeta position={[0, 8, -25]} size={3} color="#f0abfc" wireframe={true} speed={0.5} />
      <ElementoTech position={[-3, -2, -8]} texto="<React />" speed={2} scale={1.2} />
      <ElementoTech position={[4, 2, -5]} texto="<Software engineer>" speed={1.5} />
      <ElementoTech position={[-5, 5, -12]} texto="{ @ancoradeepapel }" speed={2.5} scale={1.5} />
      <ElementoTech position={[2, -4, -6]} texto="Dev" speed={1.8} />
      <ElementoTech position={[8, 4, -10]} texto="const dev = 'Thamiles';" speed={1.2} />
    </group>
  );
}

function App() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [fotoExpandida, setFotoExpandida] = useState(false);

  const projetos = [
    {
      id: 1,
      titulo: "Gestão Financeira API",
      resumo: "API RESTful completa com arquitetura MVP para controle financeiro.",
      descricao: "Sistema de back-end robusto focado em integridade de dados e escalabilidade. Desenvolvido para transformar ideias de fluxo de caixa em uma realidade técnica eficiente.",
      stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
      banco: "Neon (PostgreSQL)",
      hospedagem: "Render",
      status: "Em Operação / Produção",
      criadoEm: "2024",
      link: "https://gestao-financeira-1m7v.onrender.com/",
      github: "https://github.com/thamilescarvalho/gestao-financeira", 
      detalhesTecnicos: "Uso de arquitetura MVP para separação de responsabilidades, garantindo facilidade em testes unitários e manutenção."
    },
    {
      id: 2,
      titulo: "API Cuidando Delas",
      resumo: "API de impacto social desenvolvida no bootcamp da {Reprograma} para gestão de atividades de saúde feminina em Fortaleza/CE.",
      descricao: "Desenvolvida como Projeto Final do bootcamp 'Todas em Tech' da {Reprograma}, esta API une código e propósito. O sistema foi projetado para promover as ações do projeto Social 'CUIDANDO DELAS', voltados para mulheres em situações de vulnerabilidade social na região de Fortaleza/CE. A aplicação realiza o controle eficiente e seguro de cadastros, gestão de atividades e acompanhamento de participantes, viabilizando a promoção de serviços essenciais de saúde física e mental para mulheres.",
      stack: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Supertest"], 
      banco: "MongoDB Atlas",
      hospedagem: "Backend / API",
      status: "Concluído",
      criadoEm: "2022",
      link: "", 
      github: "https://github.com/thamilescarvalho/cuidando-delas/tree/main/projeto_final",
      detalhesTecnicos: "Implementação de Hashes de senha com Bcrypt, geração e validação de Tokens JWT para controle de sessão e infraestrutura preparada para testes de integração com Supertest."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white bg-space-black text-slate-300 overflow-x-hidden ">
      
      {/* NAVBAR FIXA */}
      <nav className="fixed top-0 w-full z-50 bg-space-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center font-mono">
          <span className="text-purple-500 font-mono font-bold tracking-tighter text-xl ">{'<THAMILES />'}</span>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#sobre" className="hover:text-purple-400 transition">Sobre</a>
            <a href="#sistemas" className="hover:text-purple-400 transition">Projetos</a>
            <a href="#habilidades" className="hover:text-purple-400 transition">Habilidades</a>
          </div>
        </div>
      </nav>

      {/* === FUNDO GERAL === */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
        {/* O METAVERSO 3D FULLSCREEN */}
        <div className="absolute inset-0 z-0 opacity-90">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#c084fc" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
            <UniversoEspacial />
          </Canvas>
        </div>

        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-linear-to-b from-space-black/80 via-transparent to-space-black/90 "></div>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-48 pb-32 px-6 z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 w-full">
          
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition duration-700"></div>
            
            <div 
              onClick={() => setFotoExpandida(true)}
              className="relative p-1 bg-linear-to-tr from-purple-400 via-fuchsia-500 to-transparent rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 floating-element font-mono"
              title="Clique para ampliar"
            >
              <img 
                src={minhaFoto} 
                alt="Thamiles Carvalho" 
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-space-black "
              />
              <div className="absolute bottom-2 right-2 bg-purple-600 rounded-full p-2 border-2 border-space-black opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <span className="text-purple-400 font-mono text-sm tracking-[0.5em] uppercase mb-4 block drop-shadow-md">Status: Available for Missions</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none drop-shadow-2xl">
              THAMILES <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-fuchsia-400">CARVALHO</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400 font-light max-w-xl relative z-10 backdrop-blur-md bg-space-black/40 p-4 rounded-2xl border border-white/10 shadow-2xl font-mono">
              Desenvolvimento Full-Stack estratégico: converto requisitos complexos em soluções digitais escaláveis e de alto desempenho.
            </p>
          </div>
        </div>
      </header>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-purple-500/30 p-10 rounded-3xl relative shadow-[0_0_30px_rgba(168,85,247,0.15)] font-mono">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-purple-500 font-mono"></span> Bio.
          </h2>
          <p className="font-mono text-lg leading-relaxed text-slate-300 text-justify">
            Focada na engenharia de APIs robustas e de alta performance. Com formação em Análise e Desenvolvimento de Sistemas, combino conhecimento técnico atualizado com um background sólido em Suporte e Operações. Essa vivência prática me deu uma visão privilegiada sobre troubleshooting e impacto no usuário final, moldando minha abordagem para criar códigos não apenas funcionais, mas estáveis, escaláveis e fáceis de manter.
          </p>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="max-w-6xl mx-auto py-20 px-6 relative z-10">
        <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border font-mono border-purple-500/30 p-10 rounded-3xl relative overflow-hidden group shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-purple-500"></span> Core Engine Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Node.js', icon: '⚡' },
              { name: 'JavaScript', icon: 'JS' },
              { name: 'Express.js', icon: '🚂' }, 
              { name: 'API RESTful', icon: '☁️' },
              { name: 'PostgreSQL', icon: '🐘' },   
              { name: 'Render / Deploy', icon: '🚀' },
              { name: 'Git/GitHub', icon: '📦' },
              { name: 'Scrum / Agile', icon: '🔄' }  
            ].map(skill => (
              <div key={skill.name} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all shadow-md hover:shadow-purple-500/20 group-hover:bg-white/10">
                <span className="text-xl font-mono text-purple-400 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                  {skill.icon}
                </span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMAS ATIVOS */}
      <section id="sistemas" className="max-w-6xl mx-auto py-15 px-3 relative z-30">
        <h2 className="font-mono text-sm font-bold text-purple-600 mb-12 tracking-[0.5em] uppercase text-center drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
          Protocolos & Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projetos.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => setProjetoSelecionado(proj)}
              className="group cursor-pointer relative font-mono bg-[#0a0a0a]/90 backdrop-blur-xl border border-purple-400/50 p-8 rounded-2xl hover:border-purple-400 transition-all hover:-translate-y-2 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] text-purple-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition duration-300">Ver Detalhes</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">{proj.titulo}</h3>
              <p className="mt-4 text-slate-300 mb-6">{proj.resumo}</p>
              <div className="font-mono flex gap-3">
                <span className="text-[10px] font-bold border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full text-purple-200 uppercase tracking-wider">
                  Deployed: {proj.hospedagem}
                </span>
              </div>
            </div>
          ))}
          
          <div className="font-mono border border-dashed border-purple-500/20 p-8 rounded-2xl flex items-center justify-center text-slate-500 italic bg-[#0a0a0a]/50 backdrop-blur-sm">
             Próxima Missão em Desenvolvimento...
          </div>
        </div>
      </section>

      {/* MODAL DE PROJETOS */}
      {projetoSelecionado && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl font-mono">
          <div className="bg-[#0f0f0f] border border-purple-500/30 w-full md:max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] relative animate-in fade-in zoom-in duration-300 flex flex-col">
            <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start bg-[#0f0f0f] z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{projetoSelecionado.titulo}</h3>
                <p className="text-purple-400 font-mono text-sm mt-2 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                  Protocolo: {projetoSelecionado.status}
                </p>
              </div>
              <button 
                onClick={() => setProjetoSelecionado(null)} 
                className="text-slate-400 hover:text-white p-2 transition rounded-full hover:bg-purple-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <h5 className="text-xs text-purple-400 font-bold uppercase mb-2 tracking-wider flex items-center gap-2">Hospedagem</h5>
                    <p className="text-lg text-white font-medium">{projetoSelecionado.hospedagem}</p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <h5 className="text-xs text-purple-400 font-bold uppercase mb-2 tracking-wider flex items-center gap-2">Database</h5>
                    <p className="text-lg text-white font-medium">{projetoSelecionado.banco}</p>
                  </div>
              </div>
              <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3 uppercase text-sm tracking-widest text-purple-400 border-l-4 border-purple-500 pl-3 font-mono">Missão do Projeto</h4>
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">{projetoSelecionado.descricao}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 uppercase text-sm tracking-widest text-purple-400 border-l-4 border-purple-500 pl-3">Especificações Técnicas</h4>
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">{projetoSelecionado.detalhesTecnicos}</p>
                  </div>
              </div>
              <div>
                  <h4 className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-widest">Tecnologias Envolvidas</h4>
                  <div className="flex flex-wrap gap-3">
                    {projetoSelecionado.stack.map(s => (
                      <span key={s} className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm text-purple-200 font-mono font-semibold">{s}</span>
                    ))}
                  </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-white/5 border-t border-white/5 mt-auto flex flex-col md:flex-row gap-4 font-mono">
              {projetoSelecionado.link && (
                <a 
                  href={projetoSelecionado.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-center py-4 rounded-xl font-bold text-lg transition shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Acessar Sistema</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a 
                href={projetoSelecionado.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 border border-purple-500/30 hover:bg-purple-500/10 text-slate-200 hover:text-white text-center py-4 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2"
              >
                <span>Ver Código</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE ZOOM DA FOTO */}
      {fotoExpandida && (
        <div 
          className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setFotoExpandida(false)} 
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-[100px] opacity-50"></div>
            <img 
              src={minhaFoto} 
              alt="Thamiles Carvalho - Zoom" 
              className="relative w-75 h-75 md:w-125 md:h-125 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.6)] z-10 scale-100 animate-in zoom-in-50 duration-300"
            />
            <p className="text-center text-slate-400 mt-8 font-mono text-sm tracking-widest uppercase animate-pulse">
              Clique em qualquer lugar para fechar
            </p>
          </div>
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition"
            onClick={() => setFotoExpandida(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* WHATSAPP FLUTUANTE */}
      <a 
        href="https://wa.me/5585981852263" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-500"></div>
        <div className="relative bg-[#0a0a0a] border border-green-500/50 p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-110 transition flex items-center justify-center text-green-500">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </a>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-[#1c1c1c]">
        <div className="font-mono max-w-6xl mx-auto px-6">
           <div className="flex justify-center gap-6 mb-4">
            {/* GitHub */}
              <a 
                href="https://github.com/thamilescarvalho" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 group"
                title="GitHub Thamiles"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:scale-110">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/thamilescarvalho085/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 group"
                title="LinkedIn Thamiles"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:scale-110">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/ancoradeepapel" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 group"
                title="Instagram Thamiles"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:scale-110">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
           </div>
           <p className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-lg mb-4">Fortaleza, CE // UNIFOR // ADS 2025.1 </p>
           <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-help" title="Conexão Segura">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[9px] uppercase tracking-[0.3em] text-purple-300 font-mono">SSL Secure // Verified System</span>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;