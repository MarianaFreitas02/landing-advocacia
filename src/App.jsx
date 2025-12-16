import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORTAR AS PÁGINAS REAIS
import Home from './pages/Home';
import Atuacao from './pages/Atuacao';
import Sobre from './pages/Sobre'; // <--- Importante!

// Placeholder só para contato
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
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/sobre" element={<Sobre />} /> {/* <--- Rota real */}
          <Route path="/contato" element={<EmBreve title="Entre em Contato" />} />
        </Routes>

        <Footer />
        
        <a href="https://wa.me/5511999999999" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      </div>
    </Router>
  );
}

export default App;