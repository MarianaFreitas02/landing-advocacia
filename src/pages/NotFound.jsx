import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="bg-slate-100 p-6 rounded-full mb-6">
        <FileQuestion size={64} className="text-primary" />
      </div>
      <h1 className="text-6xl font-serif font-bold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Página não encontrada</h2>
      <p className="text-slate-500 max-w-md mb-8">
        Parece que o documento ou a página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-slate-800 transition flex items-center gap-2 font-bold">
        <ArrowLeft size={20} /> Voltar ao Início
      </Link>
    </div>
  );
};

export default NotFound;