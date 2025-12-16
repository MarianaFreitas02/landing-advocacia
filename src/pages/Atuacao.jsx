import React from 'react';
import { CheckCircle } from 'lucide-react';

const Atuacao = () => {
  const areas = [
    {
      title: "Direito Empresarial",
      desc: "Assessoria completa para empresas, desde a constituição até fusões e aquisições.",
      items: ["Contratos Sociais", "Recuperação Judicial", "Compliance", "Blindagem Patrimonial"]
    },
    {
      title: "Direito Civil",
      desc: "Resolução de conflitos e proteção de interesses nas relações civis.",
      items: ["Indenizações", "Contratos", "Direito Imobiliário", "Sucessões e Família"]
    },
    {
      title: "Direito Trabalhista",
      desc: "Atuação preventiva e contenciosa para empregadores e empregados.",
      items: ["Defesas Trabalhistas", "Acordos Coletivos", "Auditoria Trabalhista", "Acidentes de Trabalho"]
    },
    {
      title: "Direito Digital",
      desc: "Proteção jurídica no ambiente virtual e adequação à LGPD.",
      items: ["Crimes Cibernéticos", "Proteção de Dados", "Contratos Digitais", "E-commerce"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-primary text-white py-16 px-6 mb-12">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Áreas de Atuação</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
                Nossa equipe multidisciplinar oferece suporte jurídico completo, combinando conhecimento técnico profundo com visão estratégica de negócios.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-gold/30 transition hover:shadow-xl">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">{area.title}</h3>
                    <p className="text-slate-600 mb-6">{area.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle size={16} className="text-gold" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Atuacao;