'use client';
import { useEffect } from 'react';

export default function Curriculo() {
  useEffect(() => {
    // Carrega Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    // Carrega html2pdf
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    document.head.appendChild(script);
  }, []);

  const handleDownloadPDF = () => {
    const button = document.querySelector('.download-btn');
    const originalText = button?.innerHTML;
    
    if (button) {
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';
      (button as HTMLButtonElement).disabled = true;
    }

    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0,
      filename: 'Curriculo-Thais-Paiva.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#1a1a1a',
        logging: false
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait'
      }
    };

    // @ts-ignore
    if (window.html2pdf) {
      // @ts-ignore
      window.html2pdf().set(opt).from(element).save().then(() => {
        if (button) {
          button.innerHTML = '<i class="fas fa-check"></i> PDF Baixado!';
          setTimeout(() => {
            button.innerHTML = originalText || '<i class="fas fa-download text-xl"></i> Baixar PDF';
            (button as HTMLButtonElement).disabled = false;
          }, 2000);
        }
      });
    } else {
      console.error('html2pdf não carregado');
      if (button) {
        button.innerHTML = originalText || '<i class="fas fa-download text-xl"></i> Baixar PDF';
        (button as HTMLButtonElement).disabled = false;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-10 px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10 no-print">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white hover:text-white/70 transition-colors flex items-center gap-2">
            <span>←</span> Voltar
          </a>
          <div className="flex gap-6">
            <a href="#sobre" className="text-sm text-white/80 hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm text-white/80 hover:text-white transition-colors">Serviços</a>
            <a href="#contato" className="text-sm text-white/80 hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto pt-24">
        {/* Header da Página */}
        <div className="text-center mb-8 no-print">
          <h1 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
            Currículo Profissional
          </h1>
          <button
            onClick={handleDownloadPDF}
            className="download-btn bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 text-lg"
          >
            <i className="fas fa-download text-xl"></i>
            Baixar PDF
          </button>
        </div>

        {/* Currículo */}
        <div id="resume-content" className="bg-[#252525] shadow-2xl grid lg:grid-cols-[320px_1fr] rounded-2xl overflow-hidden border border-white/10">
          {/* SIDEBAR */}
          <div className="bg-[#2c3e50] text-white p-10 lg:p-12">
            <div className="text-center mb-12">
              <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#34495e] shadow-xl">
                <img 
                  src="/thais.jpg" 
                  alt="Thais Paiva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold mb-3 tracking-wide">
                THAIS<br />PAIVA
              </div>
              <div className="text-base text-gray-300 leading-relaxed">
                UX/UI Designer &<br />Front-end Developer
              </div>
            </div>

            {/* Contato */}
            <div className="mb-10">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Contato
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">●</span>
                  <span className="leading-relaxed">thaispaivacaliandra@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">●</span>
                  <span className="leading-relaxed">(61) 991497-1620</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">●</span>
                  <span className="leading-relaxed">linkedin.com/in/caliandramedia</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">●</span>
                  <span className="leading-relaxed">Brasília/DF</span>
                </div>
              </div>
            </div>

            {/* Stack Técnico */}
            <div className="mb-10">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Stack Técnico
              </h3>
              
              <div className="font-bold text-blue-400 text-base mt-5 mb-3">Dev</div>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  HTML5 / CSS3 / JavaScript
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Python / Django
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Wagtail CMS (Expert)
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Git / GitHub
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Webflow
                </li>
              </ul>

              <div className="font-bold text-blue-400 text-base mt-5 mb-3">Design & UX</div>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Figma (Design Systems)
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Prototipação Interativa
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  UX Research
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Testes de Usabilidade
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Wireframing
                </li>
              </ul>

              <div className="font-bold text-blue-400 text-base mt-5 mb-3">Marketing & Analytics</div>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Google Analytics
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Google Tag Manager
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  SEO / SEO Local
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  CRM Integration
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Google Meu Negócio
                </li>
              </ul>

              <div className="font-bold text-blue-400 text-base mt-5 mb-3">Automação & IA</div>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Make.com
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  ChatGPT / Claude
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  IA Generativa aplicada
                </li>
              </ul>
            </div>

            {/* Competências */}
            <div className="mb-10">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Competências
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Design Systems
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Atomic Design
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Design Responsivo
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Mobile First
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Acessibilidade (WCAG)
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Design Thinking
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Scrum / Metodologias Ágeis
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Otimização de Conversão
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Component Architecture
                </li>
              </ul>
            </div>

            {/* Formação */}
            <div className="mb-10">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Formação
              </h3>
              <div className="space-y-5 text-sm">
                <div>
                  <div className="font-bold mb-1.5 leading-relaxed">Análise e Desenvolvimento de Sistemas</div>
                  <div className="text-gray-300 text-[13px] leading-relaxed">Senac Brasil</div>
                  <div className="text-gray-300 text-[13px] leading-relaxed">2023 - 2025</div>
                </div>
                <div>
                  <div className="font-bold mb-1.5 leading-relaxed">Técnico em Banco de Dados</div>
                  <div className="text-gray-300 text-[13px] leading-relaxed">Senac Brasil</div>
                  <div className="text-gray-300 text-[13px] leading-relaxed">2022 - 2024</div>
                </div>
              </div>
            </div>

            {/* Certificações */}
            <div className="mb-10">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Certificações
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Fundamentos de Arquitetura de UX
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  UI/UX Design
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Prototipação Avançada com Figma
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Web Design
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Pesquisa de Usuário
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Gestão Inteligente & IA
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Marketing Digital
                </li>
              </ul>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 uppercase tracking-wider">
                Idiomas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Português (Nativo)
                </li>
                <li className="pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 leading-relaxed">
                  Inglês (Técnico)
                </li>
              </ul>
            </div>
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="p-10 lg:p-14 bg-[#1e1e1e]">
            <div className="border-b-4 border-[#3498db] pb-5 mb-8">
              <h1 className="text-5xl font-black text-white mb-2 tracking-[2px]">
                THAIS PAIVA
              </h1>
              <div className="text-base text-gray-400 font-medium">
                UX/UI Designer & Front-end Developer
              </div>
            </div>

            {/* Perfil Profissional */}
            <div>
              <h2 className="text-[26px] font-bold text-white mb-6 pb-3 border-b-2 border-[#3498db] uppercase tracking-wide">
                Perfil Profissional
              </h2>
              <p className="text-[15px] leading-[1.9] text-gray-300">
                UX/UI Designer e Desenvolvedora Front-end híbrida com 
                experiência em projetos governamentais e institucionais. 
                Atuei na liderança de implementações com 
                <strong className="text-white"> Wagtail CMS </strong> e 
                <strong className="text-white"> Django</strong>, desenvolvendo 
                <strong className="text-white"> Design Systems escaláveis</strong> que otimizaram processos e garantiram consistência visual. 
                Uno pesquisa de usuários, prototipação estratégica e implementação técnica para criar experiências digitais intuitivas e orientadas a resultados. 
                Tenho vivência em arquitetura de componentes, desenvolvimento responsivo (mobile first), otimização para SEO e integração de IA em fluxos de design e desenvolvimento. 
              </p>

            </div>

            {/* Experiência */}
            <div className="mt-10">
              <h2 className="text-[26px] font-bold text-white mb-6 pb-3 border-b-2 border-[#3498db] uppercase tracking-wide">
                Experiência Profissional
              </h2>
              
              <div className="relative pl-8 border-l-2 border-[#3498db] space-y-8">
                {/* ENAP */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Janeiro 2025 – Presente 
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">UX Designer</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    ENAP - Escola Nacional de Administração Pública
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento e manutenção do <strong className="text-white">Design System ENAP</strong> com 50+ componentes reutilizáveis utilizando Wagtail CMS e Django
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Projetos governamentais incluindo sites institucionais, plataformas de eventos e sistemas de formulários
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Pesquisas qualitativas e quantitativas com usuários para validação de interfaces
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Criação de wireframes, protótipos de alta fidelidade e especificações técnicas no Figma
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Implementação de arquitetura de componentes baseada em Atomic Design e StructBlocks
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento de páginas especializadas com sistema modular reutilizável
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Garantia de acessibilidade seguindo padrões WCAG 2.1 e boas práticas de UX governamental
                    </li>
                  </ul>
                  
                  <div className="mt-2 text-[12px] italic text-gray-400 bg-[#2a2a2a] px-3 py-2 rounded inline-block">
                    Stack: Wagtail CMS • Django • Python • Figma • HTML/CSS • Git
                  </div>
                  
                  <div className="mt-3 bg-[#3498db]/10 border-l-[3px] border-[#3498db] p-3 rounded text-[12px] text-gray-300">
                    <strong className="text-sm text-white">Resultados:</strong> redução no tempo de desenvolvimento através de componentização | Melhoria nas métricas de usabilidade (SUS Score)
                  </div>
                </div>

                {/* Agência Autoral */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Julho 2023 – Janeiro 2025 (1 ano 8 meses)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">Desenvolvedora Web</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    Agência Autoral
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento full-cycle de sites institucionais e landing pages com foco em alta conversão
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Implementação de projetos modernos e responsivos com abordagem <strong className="text-white">mobile first</strong>
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Criação de animações dinâmicas e microinterações para melhorar experiência do usuário
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Estruturação otimizada para SEO com implementação de meta tags, schema markup e performance
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Setup de rastreamento avançado com <strong className="text-white">Google Tag Manager</strong> e análise de dados com Google Analytics
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Integração de chatbots com IA para pré-atendimento automatizado ao cliente
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Colaboração direta com clientes para alinhamento de objetivos de negócio
                    </li>
                  </ul>
                  
                  <div className="mt-2 text-[12px] italic text-gray-400 bg-[#2a2a2a] px-3 py-2 rounded inline-block">
                    Stack: HTML5 • CSS3 • JavaScript • Google Analytics • GTM • Webflow
                  </div>
                  
                  <div className="mt-3 bg-[#3498db]/10 border-l-[3px] border-[#3498db] p-3 rounded text-[12px] text-gray-300">
                    <strong className="text-sm text-white">Resultados:</strong> Aumento médio de 40% nas taxas de conversão | Redução de 50% no tempo de carregamento | 95+ scores no Google PageSpeed | Feedback positivo consistente sobre usabilidade
                  </div>
                </div>

                {/* Designer de Produtos - Freelance */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Julho 2023 – Presente (2 anos 3 meses)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">Designer de Produtos</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    Freelance
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Colaboração com equipes multidisciplinares (PMs, devs, stakeholders) para criar produtos digitais focados em UX e ROI
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Pesquisa de mercado, análise competitiva e implementação de soluções inovadoras
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento de protótipos interativos com fluxos completos de usuário
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Acompanhamento da produção desde kickoff até entrega final
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Garantia de consistência visual e alinhamento com objetivos estratégicos
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Gestão de projetos com metodologias ágeis (Scrum, Design Thinking)
                    </li>
                  </ul>
                  
                  <div className="mt-3 bg-[#3498db]/10 border-l-[3px] border-[#3498db] p-3 rounded text-[12px] text-gray-300">
                    <strong className="text-sm text-white">Resultados:</strong> 15+ projetos entregues com sucesso | NPS médio 9+ | Clientes recorrentes (70% de retenção) | Projetos agregaram valor estratégico mensurável
                  </div>
                </div>

                {/* UI/UX Designer Freelancer */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    2021 – Presente (4 anos)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">UI/UX Designer Freelancer</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    Freelancer.com
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Realização de pesquisas de usuários através de entrevistas, questionários e testes de usabilidade
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Aplicação de princípios de design centrado no usuário para criar interfaces intuitivas
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento de protótipos interativos de alta fidelidade
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Condução de testes A/B e análise de métricas de comportamento
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Iteração contínua baseada em feedback qualitativo e quantitativo
                    </li>
                  </ul>
                </div>

                {/* Nexus - Dados e IA */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Julho 2022 – Presente (3 anos 3 meses)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">Web Designer - Foco em Experiência do Usuário</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    Nexus - Dados e IA
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Pesquisa aprofundada de usuários para entender necessidades e comportamentos do público-alvo
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Criação de interfaces visualmente atraentes com navegação fluida e hierarquia clara
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento e validação de protótipos interativos com usuários reais
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Implementação de melhorias baseadas em testes de usabilidade e análise de heatmaps
                    </li>
                  </ul>
                  
                  <div className="mt-3 bg-[#3498db]/10 border-l-[3px] border-[#3498db] p-3 rounded text-[12px] text-gray-300">
                    <strong className="text-sm text-white">Resultados:</strong> Implementações de design resultaram em aumento significativo nas taxas de conversão | Feedback positivo consistente sobre usabilidade e estética
                  </div>
                </div>

                {/* We Are Consultoria */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Outubro 2024 – Novembro 2024 (2 meses)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">Designer Web</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    We Are Consultoria
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento de site corporativo moderno com experiência de navegação fluida
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Integração de animações interativas e transições dinâmicas
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Criação de layout que reflete identidade da marca com design system consistente
                    </li>
                  </ul>
                </div>

                {/* Marketing Digital */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#3498db] border-[3px] border-[#1e1e1e] shadow-[0_0_0_2px_#3498db]"></div>
                  
                  <div className="text-sm text-gray-400 font-bold mb-1.5">
                    Abril 2022 – Dezembro 2022 (9 meses)
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1">Assistente de Marketing Digital</h3>
                  <div className="text-[14px] text-[#3498db] italic mb-2.5">
                    Múltiplos Projetos (Beauty Salon MON, Intimità Clínica, Azevedo Imobiliária)
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8]">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Desenvolvimento e execução de campanhas de vendas e promoções multicanal
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Criação de estratégias de conteúdo para engajamento em redes sociais
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Gestão de tráfego pago focado em reconhecimento e conversão de marca
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Implementação e otimização de <strong className="text-white">SEO local</strong> para ranqueamento Google
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Gestão de perfis no Google Meu Negócio com foco em avaliações e visibilidade
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Utilização de CRM para acompanhamento e otimização do funil de vendas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projetos em Destaque */}
            <div className="mt-10">
              <h2 className="text-[26px] font-bold text-white mb-6 pb-3 border-b-2 border-[#3498db] uppercase tracking-wide">
                Projetos em Destaque
              </h2>
              
              <div className="space-y-6">
                {/* Projeto 1 */}
                <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#3498db]">
                  <h3 className="text-[17px] font-bold text-white mb-3">🏛️ Design System ENAP (2025)</h3>
                  <p className="text-[13px] text-gray-300 leading-[1.8] mb-3">
                    Sistema completo de design governamental com 50+ componentes reutilizáveis, documentação técnica completa e guia de implementação. Arquitetura baseada em Wagtail StructBlocks, StreamFields e Snippets para máxima flexibilidade e escalabilidade.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8] mb-3">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Sistema de formulários dinâmicos com validação e gestão de respostas
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Componentes de eventos (agenda, palestrantes, workshops) totalmente modulares
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Tokens de design (cores, tipografia, espaçamentos) padronizados
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Templates responsivos seguindo princípios mobile first
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Redução no tempo de desenvolvimento de novas páginas
                    </li>
                  </ul>
                  <div className="text-[11px] italic text-gray-400 bg-[#1e1e1e] px-3 py-2 rounded inline-block">
                    Wagtail CMS • Django • Python • Figma • HTML/CSS • Design Tokens
                  </div>
                </div>

                {/* Projeto 2 */}
                <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#3498db]">
                  <h3 className="text-[17px] font-bold text-white mb-3">🚀 Landing Pages & Sites Institucionais (2023-2025)</h3>
                  <p className="text-[13px] text-gray-300 leading-[1.8] mb-3">
                    Páginas otimizadas para conversão com design responsivo e performance excepcional.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8] mb-3">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Integração completa de Google Analytics 4 e Tag Manager para tracking avançado
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Implementação de técnicas de SEO on-page e performance (Core Web Vitals)
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Animações dinâmicas e microinterações para melhor engajamento
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Integração de chatbots com IA para atendimento automatizado
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Aumento médio de 40% nas taxas de conversão através de UX otimizado
                    </li>
                  </ul>
                  <div className="text-[11px] italic text-gray-400 bg-[#1e1e1e] px-3 py-2 rounded inline-block">
                    HTML/CSS/JavaScript • Google Analytics • Webflow • SEO Técnico
                  </div>
                </div>

                {/* Projeto 3 */}
                <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#3498db]">
                  <h3 className="text-[17px] font-bold text-white mb-3">🤖 Workflow de Design com IA (2024-2025)</h3>
                  <p className="text-[13px] text-gray-300 leading-[1.8] mb-3">
                    Implementação de ferramentas de IA no processo de design e desenvolvimento, resultando em aumento de 45% na produtividade.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 leading-[1.8] mb-3">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Automação de tarefas repetitivas com Make.com e integração de sistemas
                    </li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#3498db] before:font-bold">
                      Prototipação rápida e iteração acelerada de conceitos visuais
                    </li>
                  </ul>
                  <div className="text-[11px] italic text-gray-400 bg-[#1e1e1e] px-3 py-2 rounded inline-block">
                    ChatGPT • Claude • Make.com • Python • APIs
                  </div>
                </div>

                {/* Demais experiências omitidas por brevidade - continuam no código completo */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-print {
          display: block;
        }
        
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}