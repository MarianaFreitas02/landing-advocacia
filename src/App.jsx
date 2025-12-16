import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <--- Importando o botão

// Páginas
import Home from './pages/Home';
import Atuacao from './pages/Atuacao';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';

// Placeholder para contato (enquanto não criamos a página específica)
const EmBreve = ({ title }) => (
  <div className="pt-32 pb-20 text-center min-h-[60vh]">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-slate-500">Página em construção.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col">
        
        {/* BARRA DE AVISO SUPERIOR (TopBar) */}
        <div className="bg-primary text-slate-300 text-xs py-2 px-6 text-center md:text-right border-b border-white/10 hidden md:block">
            <span className="mr-4">Horário de atendimento: Seg a Sex, das 09h às 18h</span>
            <span className="font-bold text-gold">Plantão Urgente: (11) 99999-9999</span>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<EmBreve title="Entre em Contato" />} />
          
          {/* Rota para página de erro 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        
        {/* --- ELEMENTOS FLUTUANTES --- */}
        
        {/* 1. Botão Voltar ao Topo (Aparece ao rolar) */}
        <ScrollToTop />
        
        {/* 2. Botão WhatsApp (Fixo na direita) */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 hover:scale-110 flex items-center gap-2 group"
        >
            <MessageCircle size={28} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
                Falar no WhatsApp
            </span>
        </a>

      </div>
    </Router>
  );
}

export default App;