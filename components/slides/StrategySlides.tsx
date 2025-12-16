import React from 'react';
import { Target, Map, Gift, BookOpen, Globe, MapPin } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

// 1. Strategy Intro
export const StrategyIntroSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center items-center p-8 bg-coffee-900 text-cream-50 text-center relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
             
             <Target size={80} className="text-savoiardo mb-8" />
             <h2 className="text-5xl md:text-7xl font-serif mb-6">La Nuova Strategia</h2>
             <p className="text-2xl md:text-3xl text-cream-200 max-w-5xl font-light leading-relaxed">
                Trasformare l'Accademia da semplice "vetrina" a <br/>
                <span className="text-savoiardo font-bold">Business e autorità riconosciuta a livello internazionale per informazioni e corsi sul tiramisù originale.</span>
             </p>
        </div>
    );
};

// 2. Guide/Map
export const StrategyGuideSlide: React.FC<SlideProps> = ({ isActive }) => {
    const restaurants = [
        "Le Beccherie", "Ristorante Toulà", "Antico Morer", 
        "Tavernetta Butterfly", "Ristorante Al Migò", "Antica Torre", 
        "Pasticceria Nascimben", "Trattoria Toni del Spin"
    ];

    return (
        <div className="min-h-full flex flex-col md:flex-row p-8 md:p-20 bg-cream-50 pt-24 items-center overflow-hidden">
             <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
            
            <div className="w-full md:w-1/2 pr-0 md:pr-12 z-10">
                <div className="inline-flex items-center space-x-2 text-amber-700 font-bold tracking-widest uppercase mb-4">
                    <Map size={20} />
                    <span>Network & Territorio</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-coffee-900 mb-6">La Guida Accademia</h2>
                <h3 className="text-2xl text-coffee-700 mb-6 font-bold">Il Catalogo Partner</h3>
                <p className="text-xl text-coffee-600 leading-relaxed mb-6">
                    Creazione della sezione <strong>"Dove Mangiare il Vero Tiramisù"</strong>.
                    Una mappa digitale interattiva che elenca Ristoranti, Pasticcerie e Hotel certificati.
                </p>
                <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-600">
                    <p className="text-amber-900 font-medium">
                        <strong>Vantaggio:</strong> Diventate partner indispensabili per i ristoratori (visibilità) e una garanzia per il turista.
                    </p>
                </div>
            </div>
            
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col gap-4 pb-8 md:pb-0 relative">
                 {/* Visual Map Container */}
                 <div className="w-full h-80 bg-blue-100 rounded-xl shadow-2xl relative overflow-hidden group border-4 border-white">
                    {/* Real Map Background */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')" }} 
                    ></div>
                    
                    {/* Animated Pins */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <MapPin className="text-red-600 drop-shadow-lg animate-bounce" size={48} fill="currentColor" />
                    </div>
                    <div className="absolute top-1/3 left-1/3">
                         <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
                         <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg relative"></div>
                    </div>
                     <div className="absolute bottom-1/3 right-1/4">
                         <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute delay-75"></div>
                         <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg relative"></div>
                    </div>
                     <div className="absolute top-1/4 right-1/3">
                         <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute delay-150"></div>
                         <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg relative"></div>
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        Mappa Interattiva Certificata
                    </div>
                 </div>

                 {/* Infinite Scroll Slider */}
                 <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-3 rounded-xl border border-coffee-200">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {[...restaurants, ...restaurants, ...restaurants].map((name, i) => (
                            <div key={i} className="flex items-center mx-4 text-coffee-700 font-serif font-bold text-lg">
                                <span className="mr-2 text-amber-500">•</span> {name}
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
    );
};

// 3. Gift Cards
export const StrategyGiftSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center p-8 md:p-20 bg-amber-600 text-cream-50 pt-24 relative overflow-hidden">
             <div className="absolute -right-20 -bottom-20 text-amber-800 opacity-20">
                <Gift size={400} />
             </div>

            <div className="max-w-4xl z-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">Il Motore delle Vendite:<br/>Gift Cards</h2>
                <p className="text-2xl md:text-3xl text-amber-100 mb-10 font-light">
                    Il Tiramisù è il regalo perfetto. Incassate <strong>subito</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                        <h4 className="font-bold text-xl mb-2">Come Funziona</h4>
                        <p className="text-lg opacity-90">L'utente acquista una Gift Card (taglio €50, €100 o libero). Il destinatario riceve una mail grafica personalizzata.</p>
                    </div>
                     <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                        <h4 className="font-bold text-xl mb-2">Strategia Cash-Flow</h4>
                        <p className="text-lg opacity-90">Perfetto per Natale, Compleanni e Regali Aziendali. Genera cassa prima ancora di erogare il servizio.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. Storytelling & SEO
export const StrategyStorySlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center p-8 md:p-20 bg-coffee-800 text-cream-50 pt-24">
            <div className="flex items-center mb-6 text-savoiardo">
                <BookOpen className="mr-3" />
                <span className="uppercase tracking-widest font-bold">Storytelling & SEO</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Il Custode della Storia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Contenuti Magnetici</h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Non semplici testi, ma viaggi multimediali.
                        Video e articoli mirati (es. "Savoiardi vs Pavesini") per intercettare le curiosità reali degli utenti.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center"><Globe className="mr-2"/> Internazionalizzazione</h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Sito predisposto nativamente con le traduzioni chiave richieste:
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Tedesco', 'Russo', 'Francese', 'Rumeno', 'Portoghese', 'Spagnolo'].map(lang => (
                            <span key={lang} className="px-4 py-2 bg-coffee-700 rounded-full text-sm border border-coffee-600">{lang}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};