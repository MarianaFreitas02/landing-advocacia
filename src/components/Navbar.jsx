import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-accent font-bold" : "text-slate-600 hover:text-primary";

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Scale className="text-primary group-hover:text-gold transition-colors" size={32} />
          <span className="text-xl font-serif font-bold text-primary tracking-tight">Freitas & Associados</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className={isActive('/')}>Início</Link>
          <Link to="/atuacao" className={isActive('/atuacao')}>Áreas de Atuação</Link>
          <Link to="/sobre" className={isActive('/sobre')}>O Escritório</Link>
          <Link to="/contato" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-slate-800 transition shadow-lg flex items-center gap-2 text-sm">
             <Phone size={16} /> Contato
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-6 text-center animate-fade-in-down">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg">Início</Link>
          <Link to="/atuacao" onClick={() => setIsOpen(false)} className="text-lg">Áreas de Atuação</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="text-lg">O Escritório</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="text-lg font-bold text-accent">Contato</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;