'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SobrePage() {
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
              Sou a Thais Paiva e minha missão é simplificar processos, criar soluções inteligentes 
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
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mt-2 flex-shrink-0"></div>
                  <p>Crio <span className="text-white font-semibold">sites modernos e funcionais</span> que comunicam a essência de cada marca.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mt-2 flex-shrink-0"></div>
                  <p>Estruturo <span className="text-white font-semibold">funis e estratégias de marketing</span> com foco em ROI, custo por venda e LTV.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mt-2 flex-shrink-0"></div>
                  <p>Desenvolvo e implemento <span className="text-white font-semibold">agentes de IA</span> e <span className="text-white font-semibold">automações inteligentes</span> que otimizam processos.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mt-2 flex-shrink-0"></div>
                  <p>Crio e ajusto <span className="text-white font-semibold">SDRs de IA</span>, trazendo mais escala e eficiência para operações comerciais.</p>
                </motion.div>
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
                desc: "Sites modernos, funcionais e que comunicam a essência da sua marca",
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
                href="mailto:contato@thaispaiva.com"
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
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}