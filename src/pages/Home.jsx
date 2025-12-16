import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Scale, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-3 py-1 mb-6 border border-gold/50 rounded-full text-gold text-sm font-semibold tracking-wider">
              EXCELÊNCIA JURÍDICA DESDE 2010
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 max-w-4xl">
              Defendendo seus direitos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">autoridade.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
              Soluções jurídicas estratégicas em Direito Civil e Empresarial. Proteja seu patrimônio com quem entende do assunto.
            </p>
            <div className="flex gap-4">
              <Link to="/contato" className="px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-orange-800 transition">
                Agendar Consulta
              </Link>
              <Link to="/atuacao" className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition font-medium text-white">
                Saiba Mais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CARDS FLUTUANTES --- */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {[
                { icon: Shield, title: "Segurança Jurídica", text: "Análise de riscos detalhada." },
                { icon: Users, title: "Atendimento Personalizado", text: "Tratamento exclusivo." },
                { icon: Scale, title: "Resultados Comprovados", text: "Alto índice de êxito." }
            ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-gold hover:-translate-y-2 transition duration-300">
                    <item.icon size={32} className="text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 font-serif text-primary">{item.title}</h3>
                    <p className="text-slate-600">{item.text}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- RESUMO "O ESCRITÓRIO" (A parte que faltava) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem */}
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-br-3xl -z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                    alt="Escritório Moderno" 
                    className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                />
            </div>
            
            {/* Texto */}
            <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                    Tradição aliada à <span className="text-gold">modernidade.</span>
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg mb-8">
                    <p>
                        Fundado com o propósito de oferecer uma advocacia de excelência, o escritório <strong>Freitas & Associados</strong> combina a segurança jurídica tradicional com a agilidade do mundo moderno.
                    </p>
                    <p>
                        Entendemos que por trás de cada processo existe uma vida ou um negócio. Nossa equipe é formada por especialistas dedicados a encontrar a melhor solução para o seu caso.
                    </p>
                </div>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle size={20} className="text-gold"/> <span>Especialistas em Direito Civil e Empresarial</span></li>
                    <li className="flex items-center gap-2"><CheckCircle size={20} className="text-gold"/> <span>Atendimento em todo o território nacional</span></li>
                    <li className="flex items-center gap-2"><CheckCircle size={20} className="text-gold"/> <span>Tecnologia para acompanhamento processual</span></li>
                </ul>
                
                <Link to="/sobre" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all border-b-2 border-accent pb-1">
                    Conheça Nossa História <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </section>
      
      {/* --- BLOG TEASER --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-2">Artigos Recentes</h2>
                    <p className="text-slate-600">Mantenha-se informado sobre seus direitos.</p>
                </div>
                <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">Ver Blog <ArrowRight size={20}/></button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((post) => (
                    <div key={post} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer">
                        <div className="h-48 bg-slate-200 overflow-hidden">
                            <img src={`https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800&auto=format&fit=crop`} alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-gold font-bold uppercase">Direito Civil</span>
                            <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-accent transition">Mudanças na legislação de proteção de dados em 2025</h3>
                            <p className="text-slate-500 text-sm">Entenda como a nova lei impacta diretamente o seu negócio e o que fazer para se adequar...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
export default Home;