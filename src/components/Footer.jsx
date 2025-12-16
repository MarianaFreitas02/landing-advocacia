import React from 'react';
import { Scale, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-primary text-slate-300 py-12 border-t border-white/10 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4 text-white">
          <Scale size={24} />
          <span className="font-serif font-bold text-lg">Freitas & Associados</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">
          Excelência jurídica combinada com estratégias modernas para proteger seu patrimônio e garantir seus direitos.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4">Contato</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2 items-center"><Phone size={14} className="text-gold"/> (11) 99999-9999</li>
          <li className="flex gap-2 items-center"><Mail size={14} className="text-gold"/> contato@freitas.adv.br</li>
          <li className="flex gap-2 items-center"><MapPin size={14} className="text-gold"/> Av. Paulista, 1000 - SP</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/atuacao" className="hover:text-gold transition">Áreas de Atuação</a></li>
          <li><a href="/sobre" className="hover:text-gold transition">Nossa Equipe</a></li>
          <li><a href="#" className="hover:text-gold transition">Blog Jurídico</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
          <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
          <li><span className="text-xs text-slate-500">OAB/SP 00.000</span></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-slate-600 mt-12 border-t border-white/5 pt-8">
      &copy; 2025 Freitas & Associados. Todos os direitos reservados.
    </div>
  </footer>
);
export default Footer;