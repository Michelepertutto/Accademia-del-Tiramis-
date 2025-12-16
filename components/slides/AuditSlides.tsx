import React from 'react';
import { Search, ScrollText, MapPin, Tv, Stamp, PlayCircle, Globe, LayoutTemplate, ImageOff, ShoppingCart, Unlink, AlignJustify, Settings2, Quote } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

// 1. Audit Overview
export const AuditIntroSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center items-center p-8 bg-stone-100 text-coffee-900 text-center relative">
            <div className="bg-coffee-900 p-6 rounded-full mb-8 shadow-xl relative z-10">
                <Search size={64} className="text-savoiardo" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 relative z-10">Audit dello Stato Attuale</h2>
            
            <div className="relative max-w-5xl mx-auto mt-2">
                 {/* Decorative Quote Icon replacing text quotes */}
                 <Quote className="absolute -top-8 -left-6 md:-top-12 md:-left-16 text-coffee-300 opacity-40 rotate-180" size={80} />
                 
                 <p className="text-xl md:text-3xl text-coffee-600 font-light leading-relaxed relative z-10">
                    Dall'analisi emerge la presenza di un consistente patrimonio culturale
                    <span className="font-bold text-red-700 block mt-4">
                        penalizzata da una presenza digitale obsoleta.
                    </span>
                </p>
            </div>
        </div>
    );
};

// 2. The Assets (Good) - Updated texts
export const AuditAssetsSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center p-6 md:p-12 bg-green-50 text-coffee-900 pt-20 md:pt-12">
            <div className="text-center md:text-left mb-8 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-serif text-green-900">Il Valore Nascosto (Asset)</h2>
                <p className="text-green-800 mt-2 opacity-80">6 Punti di forza verificati dai documenti.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* 1. Storia */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <ScrollText size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Fondamenta Storiche</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Autorità basata su atti notarili e fonti certe (Artusi, Comisso, Famiglia Tiretta). Non "sentito dire", ma storia documentata.
                    </p>
                </div>

                {/* 2. Varianti Locali */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <MapPin size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Radici & Varianti</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Valorizzazione del dialetto, dello "Sbatudin" e del Tiramisù scomposto.
                    </p>
                </div>

                {/* 3. Prova Sociale */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <Tv size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Attività Reale</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        L'ente è vivo: presenze Rai (Geo&Geo), eventi e concorsi locali dimostrano operatività concreta.
                    </p>
                </div>

                {/* 4. Brand Identity */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <Stamp size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Identità "Made in Treviso"</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Posizionamento geografico coerente in ogni pagina del sito.
                    </p>
                </div>

                {/* 5. Multimedia */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <PlayCircle size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Didattica Video</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        La sezione "Video Ricetta" risponde perfettamente al bisogno dell'utente moderno di imparare visivamente passo dopo passo.
                    </p>
                </div>

                {/* 6. Multilingua */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-600">
                    <div className="flex items-center mb-3 text-green-700">
                        <Globe size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Accessibilità Key</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        I contenuti "core" (Storia e Ricetta) sono già accessibili in DE, FR, ES, RO, RU, abbattendo le barriere per gli stranieri.
                    </p>
                </div>
            </div>
        </div>
    );
};

// 3. The Issues (Bad) - Completely Updated based on new request
export const AuditIssuesSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center p-6 md:p-12 bg-red-50 text-coffee-900 pt-20 md:pt-12">
            <div className="text-center md:text-left mb-8 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-serif text-red-900">Le Criticità Rilevate</h2>
                <p className="text-red-800 mt-2 opacity-80">6 Freni alla crescita e alla percezione del Brand.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* 1. Layout & Font */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <LayoutTemplate size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Design Inefficiente</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Layout poco funzionale e scelta di font obsoleti. L'immagine generale appare datata e poco professionale.
                    </p>
                </div>

                {/* 2. Immagini */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <ImageOff size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Immagini "Spente"</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Qualità fotografica bassa che non fa "voglia" e non esalta né il prodotto (appetite appeal) né il prestigio dell'azienda.
                    </p>
                </div>

                {/* 3. Monetizzazione */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <ShoppingCart size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Assenza di Monetizzazione</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Manca totalmente un metodo per generare entrate dirette (corsi, shop, booking) trasformando il visitatore in cliente.
                    </p>
                </div>

                {/* 4. Linking Interno */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <Unlink size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Struttura a Silos</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        I contenuti non sono linkati tra loro. Per navigare bisogna tornare sempre al menu principale, interrompendo l'esperienza.
                    </p>
                </div>

                 {/* 5. Muro di Testo */}
                 <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <AlignJustify size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Muro di Testo</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Pagine dense di testo senza formattazione (grassetti, spazi). La lettura risulta faticosa e scoraggia l'utente.
                    </p>
                </div>

                 {/* 6. Interfaccia Ibrida */}
                 <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-600">
                    <div className="flex items-center mb-3 text-red-700">
                        <Settings2 size={24} className="mr-3" />
                        <h3 className="font-bold text-lg leading-tight">Bug Tecnici & Lingua</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                        Elementi di sistema in inglese ("Read more") su sito italiano e navigazione confusa che disorienta l'utente.
                    </p>
                </div>
            </div>
        </div>
    );
};