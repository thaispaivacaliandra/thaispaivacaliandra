'use client';

'use client';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {}; 

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Spline3DSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar se é mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Carregar o script do Spline Viewer
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.76/build/spline-viewer.js';
    script.onload = () => {
      setTimeout(() => setIsLoaded(true), 1000);
    };
    document.head.appendChild(script);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setTimeout(() => setIsInteracting(false), 100);
  };

  return (
    <>
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-white/70 transition-colors">
            ← Voltar
          </Link>
          <div className="flex gap-6">
            <a href="#experiencia" className="text-sm hover:text-white/70 transition-colors">Experiência 3D</a>
            <a href="#instrucoes" className="text-sm hover:text-white/70 transition-colors">Como Usar</a>
          </div>
        </div>
      </nav>

      <section id="experiencia" className="pt-32 py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#667eea] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#764ba2] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />
            <span className="text-purple-400 font-medium text-sm uppercase tracking-wider">
              {isMobile ? "Toque e explore" : "Interaja com tecnologia"}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold leading-none mb-6"
          >
            EXPERIÊNCIA <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">3D</span>
            <span className="text-[#667eea]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/60 max-w-3xl leading-relaxed"
          >
            {isMobile 
              ? "Toque e explore nosso modelo 3D com seus dedos. Sinta a tecnologia ao seu alcance."
              : "Interaja com nosso modelo 3D. Use o mouse para rotacionar, aproximar e explorar cada detalhe."
            }
          </motion.p>
        </div>

        {/* Container do Spline Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            ref={viewerRef}
            className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#667eea]/50 transition-all duration-300"
            style={{ height: isMobile ? '500px' : '700px' }}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            {/* Loading State */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f]/90 z-20">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 border-4 border-[#667eea] border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-white text-lg">Carregando experiência 3D...</p>
                </div>
              </div>
            )}

            {/* Dica inicial para mobile */}
            {isMobile && !isInteracting && isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 rounded-full text-white text-sm font-medium animate-bounce shadow-lg">
                  👆 Toque para interagir
                </div>
              </div>
            )}

            {/* Spline Viewer */}
            <spline-viewer url="https://prod.spline.design/rqxdRlpA2zf8XSsG/scene.splinecode" />

            {/* Indicador de Interação */}
            {isInteracting && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                Interagindo...
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#764ba2] to-[#667eea] rounded-full blur-2xl opacity-20 pointer-events-none"></div>
        </motion.div>

        {/* Instruções de Uso */}
        <div id="instrucoes" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {isMobile ? (
            // Instruções Mobile
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="text-4xl mb-4">👆</div>
                <h3 className="text-xl font-bold mb-3 text-white">Rotacionar</h3>
                <p className="text-white/60 leading-relaxed">Toque e arraste com um dedo para girar o modelo</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="text-4xl mb-4">🤏</div>
                <h3 className="text-xl font-bold mb-3 text-white">Zoom</h3>
                <p className="text-white/60 leading-relaxed">Pinça com dois dedos para aproximar ou afastar</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="text-4xl mb-4">✌️</div>
                <h3 className="text-xl font-bold mb-3 text-white">Mover</h3>
                <p className="text-white/60 leading-relaxed">Arraste com dois dedos para reposicionar</p>
              </motion.div>
            </>
          ) : (
            // Instruções Desktop
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-2xl">🖱️</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Rotacionar</h3>
                <p className="text-white/60 leading-relaxed">Clique e arraste para girar o modelo em qualquer direção</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-2xl">🔍</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Zoom</h3>
                <p className="text-white/60 leading-relaxed">Use a roda do mouse para aproximar e ver cada detalhe</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#667eea]/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-2xl">✋</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Mover</h3>
                <p className="text-white/60 leading-relaxed">Botão direito do mouse para mover a câmera livremente</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Spline3DSection;