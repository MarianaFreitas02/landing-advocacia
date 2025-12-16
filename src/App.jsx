import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Scale, Shield, Users, ArrowRight, CheckCircle, Menu, X, MessageCircle } from 'lucide-react';

// --- COMPONENTES VISUAIS ---

// Botão Principal (CTA)
const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-orange-800 transition-all transform hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Seção com Animação ao Rolar (Scroll Reveal)
const Section = ({ children, className = "", id = "" }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`py-20 px-6 ${className}`}
  >
    {children}
  </motion.section>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função simulada de envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! (Isso é uma demonstração)");
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="text-primary" size={32} />
            <span className="text-xl font-serif font-bold text-primary tracking-tight">Freitas & Associados</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#home" className="hover:text-primary transition">Início</a>
            <a href="#areas" className="hover:text-primary transition">Atuação</a>
            <a href="#about" className="hover:text-primary transition">O Escritório</a>
            <a href="#contact" className="text-accent font-bold">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 flex flex-col gap-4 text-center">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#areas" onClick={() => setIsMenuOpen(false)}>Atuação</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-primary text-white overflow-hidden">
        {/* Imagem de Fundo Escurecida */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" 
                alt="Law Background" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-gold/50 rounded-full text-gold text-sm font-semibold tracking-wider">
              EXCELÊNCIA JURÍDICA DESDE 2010
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Defendendo seus direitos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">autoridade.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
              Especialistas em Direito Civil e Empresarial. Oferecemos soluções jurídicas estratégicas para proteger o seu patrimônio e o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.href='#contact'}>Agendar Consulta</Button>
              <a href="#areas" className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition font-medium text-white">
                Nossas Áreas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DIFERENCIAIS (Cards Flutuantes) --- */}
      <div className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {[
                { icon: Shield, title: "Segurança Jurídica", text: "Análise de riscos detalhada para blindar suas operações." },
                { icon: Users, title: "Atendimento Personalizado", text: "Cada cliente é único. Tratamos seu caso com exclusividade." },
                { icon: Scale, title: "Resultados Comprovados", text: "Mais de 500 casos resolvidos com alto índice de êxito." }
            ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-gold"
                >
                    <div className="bg-slate-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary mb-6">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* --- ÁREAS DE ATUAÇÃO --- */}
      <Section id="areas" className="bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
                <p className="text-slate-600">Nossa equipe multidisciplinar está pronta para atuar nas demandas mais complexas.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Direito Civil', 'Direito Trabalhista', 'Direito Tributário', 'Direito Digital'].map((area, i) => (
                    <div key={i} className="group bg-white p-6 rounded-lg hover:shadow-lg transition border border-slate-100 hover:border-gold/30 cursor-default">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg text-primary">{area}</h3>
                            <ArrowRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                        </div>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>• Consultoria Preventiva</li>
                            <li>• Contencioso</li>
                            <li>• Análise de Contratos</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      {/* --- SOBRE O ESCRITÓRIO (Imagem + Texto) --- */}
      <Section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-br-3xl -z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                    alt="Escritório Moderno" 
                    className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Tradição aliada à modernidade.</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                    <p>
                        Fundado com o propósito de oferecer uma advocacia de excelência, o escritório <strong>Freitas & Associados</strong> combina a segurança jurídica tradicional com a agilidade do mundo moderno.
                    </p>
                    <p>
                        Entendemos que por trás de cada processo existe uma vida ou um negócio. Por isso, utilizamos tecnologia de ponta para acompanhamento processual, garantindo transparência total para nossos clientes.
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                        <div className="text-4xl font-bold text-gold mb-1">15+</div>
                        <div className="text-sm font-bold text-primary uppercase tracking-wide">Anos de Experiência</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-gold mb-1">98%</div>
                        <div className="text-sm font-bold text-primary uppercase tracking-wide">Clientes Satisfeitos</div>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* --- CONTATO E MAPA --- */}
      <Section id="contact" className="bg-primary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Vamos conversar sobre o seu caso?</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Preencha o formulário ou entre em contato pelos nossos canais diretos. Garantimos sigilo absoluto.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">Telefone</p>
                            <p className="font-bold text-lg">(11) 99999-9999</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">E-mail</p>
                            <p className="font-bold text-lg">contato@freitasadv.com.br</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">Localização</p>
                            <p className="font-bold text-lg">Av. Paulista, 1000 - SP</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulário */}
            <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-primary">Nome Completo</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-gold transition" placeholder="Seu nome" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-primary">E-mail ou Telefone</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-gold transition" placeholder="Seu contato" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-primary">Breve descrição do caso</label>
                        <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-gold transition h-32" placeholder="Como podemos ajudar?" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
      </Section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            <p>&copy; 2025 Freitas & Associados. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido por Mariana Freitas.</p>
        </div>
      </footer>

      {/* --- WHATSAPP FLUTUANTE --- */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center gap-2 group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
            Falar no WhatsApp
        </span>
      </a>

    </div>
  );
}

export default App;