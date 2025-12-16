import React from 'react';
import { ChefHat, Quote } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

export const CoverSlide: React.FC<SlideProps> = ({ isActive }) => {
  // Removed early return to allow printing
  
  return (
    <div className="min-h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="z-10 animate-fade-in-up max-w-4xl">
            <div className="flex justify-center mb-8">
                 <ChefHat size={80} className="text-savoiardo" />
            </div>
            <h2 className="text-savoiardo tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-6">Proposta Strategica Integrata</h2>
            <h1 className="text-5xl md:text-8xl font-serif text-cream-50 mb-8 leading-tight">
                Accademia del <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream-100 to-savoiardo">Tiramisù</span>
            </h1>
            <p className="text-coffee-200 text-2xl md:text-3xl font-light italic mb-12">
                "Diventare il Punto di Riferimento del Tiramisù"
            </p>
            
            <div className="border-t border-coffee-600 pt-8 mt-8 w-64 mx-auto"></div>

            <div className="mt-8 text-coffee-300">
                <p className="uppercase text-xs tracking-widest mb-1">Per</p>
                <p className="text-xl font-serif mb-6">Tiziano Taffarello</p>
                
                <div className="text-xs md:text-sm opacity-60 font-sans tracking-wide">
                    <p className="uppercase font-bold text-savoiardo mb-1">Progetto a cura di</p>
                    <p>Michele Caddeo | Marketing & Design</p>
                    <p>+39 338 190 3063</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export const VisionSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return to allow printing
  
    return (
      <div className="min-h-full flex flex-col justify-center px-8 md:px-24 bg-cream-50 text-coffee-900 relative">
          <div className="absolute top-24 -left-4 opacity-10">
            <Quote size={200} />
          </div>
          
          <div className="max-w-5xl mx-auto z-10 text-center md:text-left py-12 md:py-0">
            <h3 className="text-savoiardo font-bold tracking-widest uppercase mb-4">La Visione</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-900 mb-8 leading-tight">
                Non solo un sito,<br/>
                ma un <span className="text-amber-700">Punto Nevralgico Internazionale</span>.
            </h2>
            <p className="text-xl md:text-2xl text-coffee-600 leading-relaxed mb-8">
                Oggi, chi cerca "Vero Tiramisù a Treviso" trova frammentazione. 
                Domani, l'Accademia sarà l'unica risposta autorevole.
            </p>
            <div className="flex flex-col md:flex-row gap-8 mt-8 text-left">
                <div className="border-l-4 border-amber-600 pl-6">
                    <h4 className="font-bold text-xl mb-2">Mappare l'Eccellenza</h4>
                    <p className="text-coffee-600">Certificare i luoghi sacri del Tiramisù.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6">
                    <h4 className="font-bold text-xl mb-2">Insegnare la Tradizione</h4>
                    <p className="text-coffee-600">Dal turista al bambino, passando per i professionisti.</p>
                </div>
            </div>
          </div>
      </div>
    );
  };