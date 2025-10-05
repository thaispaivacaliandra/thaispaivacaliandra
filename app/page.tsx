'use client';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

export default function RobotPortfolio() {
  const [modal, setModal] = useState(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    alert('Mensagem enviada com sucesso!');
    setForm({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      id: 1,
      title: "ENAP - Escola Nacional de Administração Pública",
      desc: "Plataforma de capacitação e formação de servidores públicos federais",
      icon: "🎓",
      tags: ["Gov.br", "EaD", "React"],
      link: "https://www.enap.gov.br/"
    },
    {
      id: 2,
      title: "Consultoria WE",
      desc: "Site institucional para consultoria especializada em saúde e gestão estratégica",
      icon: "💼",
      tags: ["WordPress", "SEO", "UX/UI"],
      link: "https://consultoriawe.com/"
    },
    {
      id: 3,
      title: "ICIMA - Instituto de Cooperação Internacional",
      desc: "Portal para instituto focado em meio ambiente e energias renováveis",
      icon: "🌱",
      tags: ["Institucional", "CMS", "Responsive"],
      link: "https://www.icima.org.br/"
    },
    {
      id: 4,
      title: "CITER - Conferência Internacional",
      desc: "Website para conferência de tecnologias de energias renováveis",
      icon: "⚡",
      tags: ["Landing Page", "Events", "Multi-idioma"],
      link: "https://www.citer.com.br/"
    },
    {
      id: 5,
      title: "Garcia & Xavier Advogados",
      desc: "Site profissional para escritório de advocacia com atuação preventiva e judicial",
      icon: "⚖️",
      tags: ["Jurídico", "WordPress", "SEO"],
      link: "https://www.garciaexavier.com/"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f0f',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <motion.div
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '0.5rem',
              lineHeight: '1.2'
            }}>
              Olá! <span style={{
                display: 'inline-block',
                animation: 'wave 2.5s ease-in-out infinite'
              }}>👋</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>Como posso te ajudar hoje?</p>
          </motion.div>

          {/* Robot 3D */}
          <motion.div 
            style={{
              width: '100%',
              height: '400px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!splineLoaded && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  border: '3px solid rgba(255, 255, 255, 0.1)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              </div>
            )}
            <Spline
              scene="https://prod.spline.design/WZKj51QRxEizlgQC/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
              style={{ 
                touchAction: 'auto',
                pointerEvents: 'auto'
              }}
            />
          </motion.div>

          {/* Action Card */}
          <motion.div 
            className="action-card"
            style={{
              width: '100%',
              maxWidth: '500px',
              background: 'white',
              borderRadius: '2rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://qualificacaonexus.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#e8e8e8',
                border: 'none',
                borderRadius: '1.5rem',
                padding: '1.25rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Diagnóstico do Projeto
            </motion.a>

            <motion.button
              style={{
                background: '#e8e8e8',
                border: 'none',
                borderRadius: '1.5rem',
                padding: '1.25rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setModal('trabalhos')}
            >
              Ver Trabalhos
            </motion.button>

            <motion.a
              href="/sobre"
              style={{
                display: 'block',
                background: '#e8e8e8',
                border: 'none',
                borderRadius: '1.5rem',
                padding: '1.25rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Sobre Mim
            </motion.a>

            {/* Social Icons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '0.5rem'
            }}>
              <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0077b5',
                borderRadius: '50%',
                transition: 'transform 0.2s',
                textDecoration: 'none'
              }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#333',
                borderRadius: '50%',
                transition: 'transform 0.2s',
                textDecoration: 'none'
              }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                borderRadius: '50%',
                transition: 'transform 0.2s',
                textDecoration: 'none'
              }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {modal === 'trabalhos' && (
          <motion.div 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '1.5rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div 
              style={{
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                maxWidth: '40rem',
                width: '100%',
                padding: '2rem',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setModal(null)} style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                cursor: 'pointer',
                width: '2.25rem',
                height: '2.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '1.25rem',
                color: 'white'
              }}>
                ✕
              </button>

              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>💼 Meus Trabalhos</h2>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.6',
                  fontSize: '0.875rem'
                }}>Confira alguns dos projetos que desenvolvi</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem'
              }}>
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      padding: '1.25rem',
                      cursor: project.link ? 'pointer' : 'default',
                      transition: 'all 0.3s ease'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={project.link ? { 
                      scale: 1.02,
                      borderColor: 'rgba(102, 126, 234, 0.5)'
                    } : {}}
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                      borderRadius: '0.75rem',
                      height: '8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      fontSize: '3.75rem'
                    }}>
                      {project.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}>{project.title}</h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.875rem',
                      marginBottom: '0.75rem',
                      lineHeight: '1.6'
                    }}>{project.desc}</p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} style={{
                          background: 'rgba(102, 126, 234, 0.2)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          padding: '0.375rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid rgba(102, 126, 234, 0.3)'
                        }}>{tag}</span>
                      ))}
                    </div>
                    {project.link && (
                      <div style={{
                        marginTop: '1rem',
                        color: 'rgba(102, 126, 234, 0.9)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        Visitar site <span style={{ fontSize: '1rem' }}>→</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (min-width: 768px) {
          .action-card {
            position: absolute !important;
            top: 30%;
            left: 50%;
            transform: translateX(-50%) !important;
          }
        }
        
        a:hover svg {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}