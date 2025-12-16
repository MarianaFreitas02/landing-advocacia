import React from 'react';
import { CheckCircle, Shield, Award, Users, ChevronDown } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="animate-fade-in font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <section className="relative pt-40 pb-20 bg-primary text-white text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Nossa História</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Há mais de 15 anos construindo um legado de integridade, excelência e resultados jurídicos expressivos.
          </p>
        </div>
      </section>

      {/* --- A ORIGEM (Texto + Imagem) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Compromisso com a Justiça.</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600 text-justify">
            <p>
              O escritório <strong>Freitas & Associados</strong> nasceu da visão de oferecer uma advocacia que vai além do tecnicismo jurídico. Acreditamos que cada processo representa uma história de vida ou o futuro de um negócio.
            </p>
            <p>
              Desde a nossa fundação em 2010, mantemos o compromisso inegociável com a ética e a transparência. Nossa equipe cresceu, mas nossos valores permanecem os mesmos: tratar cada caso com a exclusividade e a atenção que ele merece.
            </p>
            <p>
              Hoje, somos referência em Direito Civil e Empresarial, aliando a tradição do direito à agilidade das novas tecnologias para entregar resultados rápidos e seguros.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
            alt="Sala de Reunião" 
            className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-gold max-w-xs">
            <p className="font-serif italic text-primary">"A justiça não consiste em ser neutro entre o certo e o errado, mas em descobrir o certo e sustentá-lo."</p>
          </div>
        </div>
      </section>

      {/* --- NOSSOS VALORES --- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Nossos Pilares</h2>
            <p className="text-slate-500">Os princípios que guiam cada decisão do nosso escritório.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integridade", text: "Atuação pautada na ética absoluta e transparência total com o cliente." },
              { icon: Award, title: "Excelência", text: "Busca incessante pela melhor estratégia jurídica e atualização constante." },
              { icon: Users, title: "Humanidade", text: "Atendimento acolhedor, entendendo a dor e a necessidade de cada cliente." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-slate-100">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-primary">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EQUIPE (Advogados) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Sócios Fundadores</h2>
          <p className="text-slate-500">Conheça os especialistas à frente do seu caso.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {[
            { 
              nome: "Dra. Mariana Freitas", 
              cargo: "Sócia Fundadora - Direito Civil", 
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
              oab: "OAB/SP 123.456"
            },
            { 
              nome: "Dr. Carlos Mendes", 
              cargo: "Sócio - Direito Empresarial", 
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
              oab: "OAB/SP 654.321"
            },
            { 
              nome: "Dra. Ana Paula Souza", 
              cargo: "Advogada Sênior - Trabalhista", 
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
              oab: "OAB/SP 987.654"
            },
          ].map((adv, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src={adv.img} alt={adv.nome} className="w-full h-96 object-cover object-top transition duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary via-primary/90 to-transparent p-6 pt-20 text-white">
                <h3 className="text-xl font-bold font-serif">{adv.nome}</h3>
                <p className="text-gold text-sm font-medium mb-1">{adv.cargo}</p>
                <p className="text-xs text-slate-300 opacity-80">{adv.oab}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ (Perguntas Frequentes) --- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-10 text-center">Dúvidas Frequentes</h2>
          
          <div className="space-y-4">
            {[
              { p: "Como funciona a primeira consulta?", r: "A primeira consulta serve para entendermos o seu caso. Analisamos os documentos iniciais e propomos as melhores estratégias jurídicas. O valor da consulta é abatido caso fechemos contrato." },
              { p: "O escritório atende em todo o Brasil?", r: "Sim! Com o processo eletrônico, atuamos em tribunais de todo o país. Também realizamos reuniões por videoconferência para sua comodidade." },
              { p: "Quais são as formas de pagamento?", r: "Trabalhamos com honorários flexíveis, podendo ser parcelados no cartão de crédito ou boleto, dependendo da complexidade da causa." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-primary flex justify-between items-center cursor-pointer">
                  {faq.p}
                  <ChevronDown size={20} className="text-gold" />
                </h3>
                <p className="text-slate-600 mt-3 text-sm leading-relaxed">{faq.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;