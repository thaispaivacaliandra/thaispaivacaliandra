'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SobrePage() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const userInteractingRef = useRef(false);

  const projects = [
    { src: "/icima.jpg", title: "ICIMA Portal" },
    { src: "/citer.jpg", title: "CITER Landing Page" },
    { src: "/enap.jpg", title: "ENAP Platform" },
    { src: "/autoral.jpg", title: "Projeto Autoral" },
    { src: "/equity.jpg", title: "Equity Design" },
    { src: "/vaicred.jpg", title: "VaiCred Platform" },
    { src: "/autotek.jpg", title: "Autotek" },
    { src: "/inn.jpg", title: "INN Project" }
  ];

  // Auto-scroll infinito
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = .9; // ajuste a velocidade aqui

    const animate = () => {
      if (container && !userInteractingRef.current) {
        container.scrollLeft += scrollSpeed;
        
        // Reset infinito quando chegar na metade
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  // Pause quando usuário interagir
  const handleUserInteractionStart = () => {
    userInteractingRef.current = true;
    setIsPaused(true);
  };

  const handleUserInteractionEnd = () => {
    userInteractingRef.current = false;
    // Retoma após 3 segundos de inatividade
    setTimeout(() => {
      if (!userInteractingRef.current) {
        setIsPaused(false);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-white/70 transition-colors">
            ← Voltar
          </Link>
          <div className="flex gap-6">
            <a href="#sobre" className="text-sm hover:text-white/70 transition-colors">Sobre</a>
            <a href="#portfolio" className="text-sm hover:text-white/70 transition-colors">Portfolio</a>
            <a href="#servicos" className="text-sm hover:text-white/70 transition-colors">Serviços</a>
            <a href="#contato" className="text-sm hover:text-white/70 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Transformo negócios em experiências digitais
            </h1>
            <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
              Minha missão é simplificar processos, criar soluções inteligentes 
              e entregar resultados que façam sentido na prática do dia a dia de cada cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-white/80"
          >
            <p>
              Ao longo da minha trajetória, desenvolvi um olhar estratégico que une{' '}
              <span className="text-white font-semibold">design, tecnologia e marketing de performance</span>. 
              Não entrego apenas um site bonito ou uma campanha isolada — entrego clareza, eficiência e 
              crescimento sustentável.
            </p>

            <div className="pt-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Meu trabalho é olhar além do óbvio:
              </h2>
              
              <div className="space-y-6">
                {[
                  "Crio soluções digitais modernas que se adaptam ao novo comportamento do usuário — rápidas, intuitivas e conectadas à forma como consumimos informação na era da IA.",
                  "Estruturo funis e estratégias de marketing com foco em ROI, custo por venda e LTV.",
                  "Desenvolvo e implemento agentes de IA e automações inteligentes que otimizam processos.",
                  "Crio e ajusto SDRs de IA, trazendo mais escala e eficiência para operações comerciais."
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mt-2 flex-shrink-0"></div>
                    <p>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-12 space-y-6">
              <p>
                Acredito que cada negócio tem sua singularidade, e é por isso que minhas soluções são 
                sempre personalizadas. Quero que cada cliente sinta que não contratou apenas uma profissional, 
                mas sim uma <span className="text-white font-semibold">parceira de crescimento</span>.
              </p>

              <p className="text-xl text-white font-medium pt-4">
                Se você procura alguém para <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                tirar ideias do papel, acelerar seus resultados e criar estratégias digitais que realmente funcionam</span>, 
                você está no lugar certo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - CARROSSEL INFINITO COM SCROLL LIVRE */}
      <section id="portfolio" className="py-32 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm">Explore public works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-bold leading-none"
          >
            PORTFÓLIO<span className="text-purple-500">.</span>
          </motion.h2>

          {/* Indicador de swipe no mobile */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-white/40 text-sm mt-6 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Deslize para navegar
          </motion.p>
        </div>

        <div className="relative">
          {/* Left Arrow - Desktop only */}
          <button
            onClick={scrollLeft}
            onMouseEnter={handleUserInteractionStart}
            onMouseLeave={handleUserInteractionEnd}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border-2 border-white/20 hover:border-purple-500 hover:bg-purple-500/20 transition-all items-center justify-center group"
            aria-label="Scroll left"
          >
            <svg className="w-7 h-7 transform rotate-180 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Right Arrow - Desktop only */}
          <button
            onClick={scrollRight}
            onMouseEnter={handleUserInteractionStart}
            onMouseLeave={handleUserInteractionEnd}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border-2 border-white/20 hover:border-purple-500 hover:bg-purple-500/20 transition-all items-center justify-center group"
            aria-label="Scroll right"
          >
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto touch-pan-x"
            onMouseEnter={handleUserInteractionStart}
            onMouseLeave={handleUserInteractionEnd}
            onTouchStart={handleUserInteractionStart}
            onTouchEnd={handleUserInteractionEnd}
            onScroll={() => {
              // Quando o usuário scrolla manualmente, pausa o auto-scroll
              if (!userInteractingRef.current) {
                handleUserInteractionStart();
                handleUserInteractionEnd();
              }
            }}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Renderiza 3x para garantir scroll infinito suave */}
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={`project-${index}`}
                className="flex-shrink-0 w-[85vw] max-w-[420px] md:w-[420px] group cursor-pointer"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                    <img 
                      src={project.src} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      draggable="false"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <h4 className="text-xl font-bold text-white px-6 text-center">{project.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          div[ref] {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          div[ref]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center"
          >
            Como posso ajudar
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design & Desenvolvimento",
                desc: "Soluções digitais que comunicam a essência da sua marca, adaptadas ao jeito atual de consumir informação.",
                icon: "https://cdn-icons-png.flaticon.com/512/3308/3308395.png"
              },
              {
                title: "Marketing de Performance",
                desc: "Funis estratégicos com foco em ROI, custo por venda e LTV",
                icon: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
              },
              {
                title: "IA & Automação",
                desc: "Agentes inteligentes e SDRs de IA para escalar sua operação",
                icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-[#667eea]/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src={service.icon} alt={service.title} className="w-8 h-8 brightness-0 invert" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20">
                <img 
                  src="/thais4.jpg" 
                  alt="Thais Paiva"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#764ba2] to-[#667eea] rounded-full blur-2xl opacity-40"></div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                <span className="text-purple-400 font-medium text-sm uppercase tracking-wider">Sobre mim</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Me chamo <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Thais</span>
              </h2>

              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Na minha jornada com design digital, 
                  marketing e tecnologia, desenvolvi um olhar estratégico que une criatividade, dados e inovação.
                </p>

                <p>
                  Minha abordagem vai além do visual: trabalho para criar experiências que simplificam processos, 
                  otimizam resultados e geram <span className="text-white font-semibold">crescimento sustentável</span> para 
                  cada cliente. Minhas soluções digitais também acompanham o novo comportamento do usuário moderno — 
                  rápido, conectado e acostumado a informações claras e acessíveis.
                </p>

                <p>
                  Acredito que cada negócio tem sua própria identidade, e por isso minhas soluções são sempre 
                  personalizadas. Do design à implementação de IA, meu objetivo é transformar desafios em 
                  oportunidades reais de crescimento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    +40%
                  </div>
                  <p className="text-white/60 text-sm">de aumento na conversão de clientes</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    +30
                  </div>
                  <p className="text-white/60 text-sm">agentes de IA implementados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 px-6 bg-gradient-to-b from-transparent to-[#667eea]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Vamos conversar?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Estou pronta para transformar suas ideias em resultados concretos. 
              Entre em contato e vamos construir algo incrível juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(102,126,234,0.5)] transition-all"
              >
                Solicitar Diagnóstico
              </Link>
              <a
                href="mailto:thaispaivacaliandra@gmail.com"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2025 Thais Paiva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}