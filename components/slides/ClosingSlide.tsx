import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

export const ClosingSlide: React.FC<SlideProps> = ({ isActive }) => {
  // Removed early return
  return (
    <div className="min-h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-t from-coffee-900 to-coffee-800 text-cream-50 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="z-10 max-w-4xl animate-fade-in-up">
            <h2 className="text-savoiardo tracking-widest text-lg font-bold uppercase mb-8">Il Futuro Inizia Adesso</h2>
            <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">
                Portiamo il Tiramisù<br/>nel Mondo.
            </h1>
            
            <a 
                href="mailto:tuo.email@agenzia.it?subject=RE:%20Feedback%20offerta%20Accademia%20del%20Tiramisù"
                className="group bg-savoiardo text-coffee-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center mx-auto inline-flex"
            >
                Iniziamo il Progetto
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="mt-20 opacity-60 text-base">
                 <p className="font-serif text-lg mb-2">Accademia del Tiramisù © 2025</p>
                 <div className="w-16 h-px bg-white/20 mx-auto my-4"></div>
                 <div className="text-sm font-sans tracking-wide">
                    <p className="text-savoiardo font-bold mb-1">Progetto a cura di</p>
                    <p>Michele Caddeo | Marketing & Design | +39 338 190 3063</p>
                 </div>
            </div>
        </div>
    </div>
  );
};