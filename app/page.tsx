'use client';
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

export default function RobotPortfolio() {
  const [modal, setModal] = useState(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Carrega Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  const projects = [
    {
      id: 1,
      title: "ENAP - Escola Nacional de Administração Pública",
      desc: "Plataforma de capacitação e formação de servidores públicos federais",
      icon: "fa-graduation-cap",
      tags: ["Gov.br", "EaD", "React"],
      link: "https://www.enap.gov.br/"
    },
    {
      id: 2,
      title: "Consultoria WE",
      desc: "Site institucional para consultoria especializada em saúde e gestão estratégica",
      icon: "fa-briefcase",
      tags: ["WordPress", "SEO", "UX/UI"],
      link: "https://consultoriawe.com/"
    },
    {
      id: 3,
      title: "ICIMA - Instituto de Cooperação Internacional",
      desc: "Portal para instituto focado em meio ambiente e energias renováveis",
      icon: "fa-leaf",
      tags: ["Institucional", "CMS", "Responsive"],
      link: "https://www.icima.org.br/"
    },
    {
      id: 4,
      title: "CITER - Conferência Internacional",
      desc: "Website para conferência de tecnologias de energias renováveis",
      icon: "fa-bolt",
      tags: ["Landing Page", "Events", "Multi-idioma"],
      link: "https://www.citer.com.br/"
    },
    {
      id: 5,
      title: "Garcia & Xavier Advogados",
      desc: "Site profissional para escritório de advocacia com atuação preventiva e judicial",
      icon: "fa-balance-scale",
      tags: ["Jurídico", "WordPress", "SEO"],
      link: "https://www.garciaexavier.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      
      {/* LAYOUT DESKTOP */}
      <div className="hidden lg:flex min-h-screen items-center justify-center p-8">
        <div className="w-full max-w-7xl grid grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Card de Ações */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-6xl font-black text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Olá! <span className="inline-block animate-wave">👋</span>
                </h1>
                <p className="text-xl text-white/60 mb-8">Como posso te ajudar hoje?</p>
              </motion.div>

              <div className="space-y-4">
                <motion.a
                  href="https://thaispaivacaliandra-chatbot-demo-nexus.hf.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <i className="fas fa-robot text-xl"></i>
                    <h3 className="text-lg font-bold">Conheça nosso SDR de IA</h3>
                  </div>
                  <p className="text-sm opacity-90">
                    Descubra oportunidades no seu negócio em 5 minutos
                  </p>
                </div>
                </motion.a>

                <motion.a
                  href="/sobre#portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-briefcase text-white text-lg mr-3"></i>
                        <span className="text-white font-semibold text-lg">Ver Trabalhos</span>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="/sobre"
                  className="block group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-user text-white text-lg mr-3"></i>
                        <span className="text-white font-semibold text-lg">Sobre Mim</span>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="/curriculo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-file-alt text-white text-lg mr-3"></i>
                        <span className="text-white font-semibold text-lg">Currículo</span>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="/3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-cube text-white text-lg mr-3"></i>
                        <span className="text-white font-semibold text-lg">Interaja com modelo 3D</span>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Social Icons */}
              <motion.div
                className="flex justify-center gap-4 mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <a href="https://www.linkedin.com/in/caliandramedia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#0077b5] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50" aria-label="Visit my LinkedIn profile">
                  <i className="fab fa-linkedin-in text-white text-xl"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/thaispaivacaliandra" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#333] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-gray-500/50" aria-label="GitHub Profile">
                  <i className="fab fa-github text-white text-xl"></i>
                </a>
                <a href="https://www.instagram.com/thaispaivaoliver/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50" aria-label="GitHub Profile">
                  <i className="fab fa-instagram text-white text-xl"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Lado Direito - Robot 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
            
            {!splineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            <Spline
              scene="https://prod.spline.design/WZKj51QRxEizlgQC/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* LAYOUT MOBILE */}
      <div className="lg:hidden min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-black text-white mb-2">
              Olá! <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-lg text-white/60">Como posso te ajudar hoje?</p>
          </motion.div>

          {/* Robot 3D Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px]"
          >
            {!splineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            <Spline
              scene="https://prod.spline.design/WZKj51QRxEizlgQC/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
              className="w-full h-full"
            />
          </motion.div>

          {/* Action Card Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl" />
            
            <div className="relative backdrop-blur-xl p-6 shadow-2xl space-y-3 relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
              <motion.a
                href="https://thaispaivacaliandra-chatbot-demo-nexus.hf.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.97 }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <i className="fas fa-robot text-xl"></i>
                    <h3 className="text-lg font-bold">Conheça nosso SDR de IA</h3>
                  </div>
                  <p className="text-sm opacity-90">
                    Descubra oportunidades no seu negócio em 5 minutos
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="/sobre#portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.97 }}
              >
                <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                  <i className="fas fa-briefcase mr-2"></i>
                  Ver Trabalhos
                </div>
              </motion.a>

              <motion.a
                href="/sobre"
                className="block"
                whileTap={{ scale: 0.97 }}
              >
                <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                  <i className="fas fa-user mr-2"></i>
                  Sobre Mim
                </div>
              </motion.a>

              <motion.a
                href="/curriculo"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.97 }}
              >
                <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                  <i className="fas fa-file-alt mr-2"></i>
                  Currículo
                </div>
              </motion.a>

              <motion.a
                href="/3d"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.97 }}
              >
                <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 p-5 rounded-2xl transition-all duration-300">
                  <i className="fas fa-cube text-lg mr-3"></i>
                  Interaja com modelo 3D
                </div>
              </motion.a>

              {/* Social Icons Mobile */}
              <div className="flex justify-center gap-4 pt-4">
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0077b5] rounded-full hover:scale-110 transition-transform" aria-label="Visit my LinkedIn profile">
                  <i className="fab fa-linkedin-in text-white text-lg"></i>
                </a>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#333] rounded-full hover:scale-110 transition-transform" aria-label="Visit my GitHub profile">
                  <i className="fab fa-github text-white text-lg"></i>
                </a>
                <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full hover:scale-110 transition-transform" aria-label="Visit my Instagram profile">
                  <i className="fab fa-instagram text-white text-lg"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Trabalhos */}
      <AnimatePresence>
        {modal === 'trabalhos' && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white text-xl transition-colors"
              >
                ✕
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  <i className="fas fa-briefcase mr-3"></i>
                  Meus Trabalhos
                </h2>
                <p className="text-white/60">Confira alguns dos projetos que desenvolvi</p>
              </div>

              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 cursor-pointer transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.5)' }}
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl h-32 flex items-center justify-center mb-4">
                      <i className={`fas ${project.icon} text-white text-6xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-purple-600/20 border border-purple-600/30 text-white/90 px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <div className="text-purple-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Visitar site <span>→</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}