import React from 'react';
import { Zap, Check, X, CreditCard, ArrowRight, ExternalLink, Smartphone, Layout, Globe, ShoppingCart, Mail, MousePointerClick, Image, Palette, Briefcase, Server, ShieldCheck, Rocket, Wrench, Calendar, Share2, Search, FileText, MonitorPlay, Gem, MapPin } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

// 1. Offer Intro
export const OfferIntroSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center items-center p-8 bg-coffee-900 text-cream-50 text-center pt-24">
            <CreditCard size={80} className="text-savoiardo mb-6" />
            <h2 className="text-5xl md:text-7xl font-serif mb-6">Proposte di Intervento</h2>
            <p className="text-2xl md:text-3xl text-coffee-200 max-w-3xl font-light">
                Abbiamo elaborato due percorsi.<br />
                Scegliete la velocità di crescita per l'Accademia.
            </p>
        </div>
    );
};

// 2. Option A (Restyling Istituzionale - ELEVATED)
export const OfferOptionASlide: React.FC<SlideProps> = ({ isActive }) => {
    // Expanded features list to justify value
    const features = [
        "Restyling Completo UX/UI Istituzionale",
        "Design Mobile First & Responsive",
        "Ottimizzazione Velocità (Core Web Vitals)",
        "Modulo Multilingua Standard (4 Lingue)",
        "Integrazione Form Contatti Avanzati",
        "Revisione Architettura dei Contenuti",
        "Editing Professionale Foto/Video Esistenti",
        "Setup GDPR & Privacy Policy Compliant",
        "Ottimizzazione SEO Tecnica Iniziale",
        "Collaudo Cross-Browser e Device",
        "Formazione Autonomia Aggiornamento (1h)"
    ];

    // Breakdown items to show transparency and value
    const breakdown = [
        { item: "Sviluppo Frontend & Design System", price: "€ 1.000" },
        { item: "Ottimizzazione Mobile & Speed", price: "€ 500" },
        { item: "Setup Tecnico (Lingue, GDPR, SEO)", price: "€ 400" },
        { item: "Trasformazione contenuti e immagini", price: "€ 300" }
    ];

    return (
        <div className="min-h-full flex flex-col justify-center p-6 bg-slate-50 text-coffee-900 pt-20 md:pt-24 border-b-8 border-slate-400">
            <div className="w-full max-w-[95%] md:max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 border-b border-slate-200 pb-4 gap-4 md:gap-0">
                    <div className="w-full md:w-auto">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">Restyling Istituzionale</h3>
                            <span className="bg-slate-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest mt-1 md:mt-0">Professionale</span>
                        </div>
                        <p className="text-xl text-slate-600 mt-2 font-medium">L'immagine autorevole che l'Accademia merita.</p>
                    </div>
                    <div className="text-left md:text-right w-full md:w-auto">
                        <span className="text-5xl font-serif font-bold text-slate-700 block md:inline">€ 2.200</span>
                        <span className="block text-sm text-gray-500">+ iva</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Features List */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full">
                        <h4 className="font-serif text-2xl mb-4 text-slate-700 border-b border-gray-100 pb-2 flex items-center">
                            <Briefcase className="mr-2 text-slate-500" size={24} /> Incluso nel Progetto
                        </h4>
                        <ul className="space-y-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start text-base md:text-lg">
                                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-slate-700 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Breakdown & Value */}
                    <div className="flex flex-col h-full gap-6">
                        {/* Breakdown Table */}
                        <div className="bg-slate-100 p-6 rounded-xl shadow-inner border border-slate-200">
                            <h4 className="font-serif text-2xl mb-4 text-slate-700 border-b border-slate-300 pb-2">Dettaglio Investimento</h4>
                            <ul className="space-y-3">
                                {breakdown.map((row, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-slate-700 border-b border-slate-200 pb-2 last:border-0">
                                        <span className="text-sm md:text-base">{row.item}</span>
                                        <span className="font-mono text-base md:text-lg whitespace-nowrap">{row.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Value Props - Different from Option B to show corporate value */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-slate-500 flex-grow flex flex-col justify-center shadow-md">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center text-center p-2">
                                    <Server className="text-slate-400 mb-2" size={32} />
                                    <span className="font-bold text-slate-800">Performance</span>
                                    <span className="text-xs text-slate-500">Codice Ottimizzato</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-2">
                                    <ShieldCheck className="text-slate-400 mb-2" size={32} />
                                    <span className="font-bold text-slate-800">Sicurezza</span>
                                    <span className="text-xs text-slate-500">Standard GDPR</span>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm italic mt-4 text-center">
                                "Un biglietto da visita digitale solido, sicuro e perfettamente fruibile da ogni dispositivo."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. Option B (Accademia 2.0) - Merged Features & Breakdown
export const OfferOptionBSlide: React.FC<SlideProps> = ({ isActive }) => {
    // List of features - Updated based on new requirements
    const features = [
        "Audit Marketing Strategico & Competitor",
        "Design UX/UI Premium & Mobile First",
        "Sviluppo Mappa 'Dove Mangiare' Geo-localizzata",
        "Modulo E-commerce & Booking Engine",
        "Sistema Gift Card Digitali Automatizzate",
        "Modulo Multilingua Avanzato (6 Lingue)",
        "Creazione Materiale Didattico (Poster/PDF)",
        "Fotoritocco, Foto AI HQ & Video Creation",
        "Integrazione Social Wall (IG/FB)",
        "Setup Profilo Trustpilot & TripAdvisor",
        "Integrazione WhatsApp Business API",
        "Assistenza Tecnica Prioritaria (Setup)"
    ];

    // Breakdown items
    const breakdown = [
        { item: "Audit, Strategia & UX Design", price: "€ 1.500" },
        { item: "Sviluppo Piattaforma (E-comm + Booking)", price: "€ 2.500" },
        { item: "Produzione Contenuti (Foto AI/Video)", price: "€ 1.000" },
        { item: "Setup SEO, Lingue & Trustpilot", price: "€ 1.500" },
        { item: "Bonus: 9 Mesi Manutenzione", price: "Omaggio", highlight: true }
    ];

    return (
        <div className="min-h-full flex flex-col justify-center p-6 bg-cream-50 text-coffee-900 pt-20 md:pt-24 border-b-8 border-amber-500">
            <div className="w-full max-w-[95%] md:max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 border-b border-amber-200 pb-4 gap-4 md:gap-0">
                    <div className="w-full md:w-auto">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-3xl md:text-5xl font-bold text-coffee-900 leading-tight">Accademia 2.0</h3>
                            <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest mt-1 md:mt-0">Consigliata</span>
                        </div>
                        <p className="text-xl text-amber-700 mt-2 font-medium">L'Ecosistema Completo "Chiavi in Mano".</p>
                    </div>
                    <div className="text-left md:text-right w-full md:w-auto">
                        <span className="text-5xl font-serif font-bold text-amber-600 block md:inline">€ 6.500</span>
                        <span className="block text-sm text-gray-500">+ iva</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Features List */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 flex flex-col h-full">
                        <h4 className="font-serif text-2xl mb-4 text-coffee-800 border-b border-gray-100 pb-2 flex items-center">
                            <Zap className="mr-2 text-amber-500" size={24} /> Cosa Include
                        </h4>
                        <ul className="space-y-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start text-base md:text-lg">
                                    <Check className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-coffee-700 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Breakdown & Value */}
                    <div className="flex flex-col h-full gap-4 md:gap-6">
                        {/* Breakdown Table */}
                        <div className="bg-stone-100 p-6 rounded-xl shadow-inner border border-stone-200">
                            <h4 className="font-serif text-2xl mb-4 text-coffee-800 border-b border-gray-300 pb-2">Dettaglio Economico</h4>
                            <ul className="space-y-3">
                                {breakdown.map((row, idx) => (
                                    <li key={idx} className={`flex justify-between items-center ${row.highlight ? 'text-amber-600 font-bold bg-amber-50 p-2 rounded-lg -mx-2' : 'text-gray-700 border-b border-gray-200 pb-2 last:border-0'}`}>
                                        <span className="text-sm md:text-base">{row.item}</span>
                                        <span className="font-mono text-base md:text-lg whitespace-nowrap">{row.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SEO HIGHLIGHT - Dedicated Section */}
                        <div className="bg-gradient-to-r from-coffee-800 to-coffee-900 p-5 rounded-xl shadow-lg text-white border-l-4 border-amber-500 relative overflow-hidden group">
                            <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <Rocket size={80} />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-amber-500 flex items-center mb-1 gap-2 uppercase tracking-wider text-sm">
                                    <Rocket size={18} /> Strategia di Crescita
                                </h4>
                                <p className="text-xl font-bold leading-tight font-serif mb-1">Piano Editoriale SEO (12 Mesi)</p>
                                <p className="text-sm text-gray-300">
                                    Indicizzazione organica continuativa. Fondamentale per intercettare traffico qualificato nel lungo periodo.
                                </p>
                            </div>
                        </div>

                        {/* MAINTENANCE & SUPPORT BOX */}
                        <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 flex-grow flex flex-col justify-center">
                            <div className="flex items-start gap-3">
                                <Wrench className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                                <div className="w-full">
                                    <h5 className="font-bold text-coffee-900 text-lg">Manutenzione & Supporto</h5>
                                    <div className="mt-2 text-coffee-800 text-sm space-y-2">
                                        <p className="flex items-start">
                                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-0.5">INCLUSO</span>
                                            <span><strong>9 Mesi Gratuiti:</strong> Aggiornamento plugin, sicurezza e piccole modifiche su richiesta.</span>
                                        </p>
                                        <p className="flex items-center pt-2 border-t border-amber-200">
                                            <span className="font-mono font-bold text-amber-700 mr-2">€ 400/anno</span>
                                            <span className="text-xs opacity-80">canone dal 10° mese (opzionale)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. NEW: Email Marketing Slide (Slide 16)
export const OfferEmailSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="min-h-full flex flex-col justify-center p-6 md:p-12 bg-white text-coffee-900 pt-24">
            <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
                <div className="mb-8 border-b border-gray-100 pb-6">
                    <div className="inline-flex items-center space-x-2 text-amber-600 font-bold tracking-widest uppercase mb-2">
                        <Mail size={20} />
                        <span>Incluso nel pacchetto Accademia 2.0</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-coffee-900 mb-2">Automazione Newsletter</h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-light">
                        Il denaro è nella lista. Strumenti pronti per convertire i contatti in clienti che tornano e consigliano il nostro corso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-grow">
                    {/* Visual Mockup */}
                    <div className="relative bg-stone-100 rounded-3xl p-8 border border-stone-200 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-stone-300 rounded-full"></div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            {/* Fake Email Header */}
                            <div className="bg-coffee-900 text-white p-4 text-center">
                                <span className="font-serif text-xl tracking-wider">Accademia del Tiramisù</span>
                            </div>
                            {/* Fake Email Body */}
                            <div className="p-6">
                                <div className="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
                                        alt="Tiramisu HD"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                                        <p className="text-white text-xs font-bold text-center">Nuova Ricetta Esclusiva</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                                </div>
                                <div className="mt-6 text-center">
                                    <span className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">PRENOTA ORA</span>
                                </div>
                            </div>
                        </div>
                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold shadow-lg transform rotate-12 z-20 text-sm text-center p-2 leading-tight">
                            Pronto all'uso
                        </div>
                    </div>

                    {/* Content List */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-coffee-800 mb-4 flex items-center">
                                <Palette className="mr-3 text-amber-600" />
                                5 Template Premium Riutilizzabili
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Disegniamo per voi 5 modelli grafici pronti all'uso. Non dovrete fare altro che cambiare il testo.
                                Pensati per ogni occasione:
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['Benvenuto', 'Promo Corso', 'Auguri Natale', 'Promo Gift Card', 'News Blog'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-amber-50 text-amber-800 rounded-md text-sm font-medium border border-amber-100">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-stone-50 p-5 rounded-xl border-l-4 border-amber-500">
                                <h4 className="font-bold text-coffee-900 mb-2 flex items-center"><Image size={18} className="mr-2" /> Immagini HD</h4>
                                <p className="text-sm text-gray-600">Layout ottimizzato per foto ad alta risoluzione che stimolano l'appetito.</p>
                            </div>
                            <div className="bg-stone-50 p-5 rounded-xl border-l-4 border-green-500">
                                <h4 className="font-bold text-coffee-900 mb-2 flex items-center"><MousePointerClick size={18} className="mr-2" /> Alta Conversione</h4>
                                <p className="text-sm text-gray-600">Struttura a imbuto (Funnel) progettata per portare al click e all'acquisto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 5. Comparison Table (Slide 17)
export const OfferComparisonSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Significantly expanded comparison table rows
    const rows = [
        { label: "Design & User Experience", a: "Standard Istituzionale", b: "Premium, Animato & Custom", icon: Layout },
        { label: "Vendita Online (Corsi/Gift)", a: false, b: "E-commerce Completo", icon: ShoppingCart },
        { label: "Prenotazioni (Booking)", a: "Modulo Contatto", b: "Calendario Automatizzato", icon: Calendar },
        { label: "Automazione Email (Funnel)", a: false, b: "Recupero Carrelli & Follow-up", icon: Mail },
        { label: "Produzione Contenuti (Foto/Video)", a: "Editing Materiale Esistente", b: "Shooting Ad Hoc & AI", icon: Image },
        { label: "Mappa 'Dove Mangiare'", a: "Elenco Testuale", b: "Interattiva & Geo-localizzata", icon: MapPin },
        { label: "Strategia SEO & Posizionamento", a: "Tecnica (Una tantum)", b: "Editoriale (12 Mesi)", icon: Search },
        { label: "Lingue Supportate", a: "4 (Standard)", b: "6 (Avanzato)", icon: Globe },
        { label: "Integrazioni (Social, WhatsApp)", a: "Base", b: "Avanzate & Social Wall", icon: Share2 },
        { label: "Materiale Didattico", a: false, b: "Kit Digitale Incluso", icon: FileText },
        { label: "Manutenzione & Supporto", a: "Formazione (1h)", b: "9 Mesi Inclusi", icon: Wrench },
        { label: "Investimento Totale", a: "€ 2.200", b: "€ 6.500", highlight: true }
    ];

    return (
        <div className="min-h-full flex flex-col justify-center p-4 md:p-12 bg-white text-coffee-900 pt-24 overflow-y-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-6 md:mb-8">Confronto Proposte</h2>

            <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-200 mb-8">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-coffee-900 text-cream-50">
                                <th className="p-4 md:p-5 font-serif text-lg md:text-2xl w-1/3">Funzionalità</th>
                                <th className="p-4 md:p-5 text-center w-1/3 bg-slate-600">
                                    <span className="block text-xs md:text-sm opacity-80 uppercase tracking-widest">Opzione A</span>
                                    <span className="font-bold text-base md:text-xl">Restyling</span>
                                </th>
                                <th className="p-4 md:p-5 text-center w-1/3 bg-amber-600 relative overflow-hidden">
                                    <span className="block text-xs md:text-sm opacity-80 uppercase tracking-widest text-amber-100">Opzione B</span>
                                    <span className="relative z-10 font-bold text-base md:text-xl text-white">Accademia 2.0</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {rows.map((row, idx) => (
                                <tr key={idx} className={`hover:bg-gray-50 transition-colors ${row.highlight ? 'bg-stone-50 font-bold' : ''}`}>
                                    <td className="p-3 md:p-4 flex items-center text-coffee-800">
                                        {row.highlight ? (
                                            <div className="flex items-center text-amber-700">
                                                <Gem size={24} className="mr-3" />
                                                <span className="text-xl font-serif">Investimento</span>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Hidden on very small screens, visible on medium+ */}
                                                <div className="hidden md:block mr-3 text-amber-600/70 bg-amber-50 p-1.5 rounded-full">
                                                    {row.icon && <row.icon size={18} />}
                                                </div>
                                                <span className="font-medium text-sm md:text-base leading-tight">{row.label}</span>
                                            </>
                                        )}
                                    </td>

                                    {/* Option A Column */}
                                    <td className="p-3 md:p-4 text-center text-gray-600 border-l border-r border-gray-100 text-sm md:text-base">
                                        {typeof row.a === 'boolean' ? (
                                            row.a ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-gray-300" />
                                        ) : (
                                            <span className={row.highlight ? 'text-2xl font-serif' : ''}>{row.a}</span>
                                        )}
                                    </td>

                                    {/* Option B Column */}
                                    <td className={`p-3 md:p-4 text-center border-l border-gray-100 text-sm md:text-base ${row.highlight ? 'text-amber-600 font-serif' : 'text-coffee-900 font-semibold'}`}>
                                        {typeof row.b === 'boolean' ? (
                                            row.b ? <Check className="mx-auto text-amber-600" strokeWidth={3} /> : <X className="mx-auto" />
                                        ) : (
                                            <span className={row.highlight ? 'text-3xl md:text-4xl font-bold' : ''}>{row.b}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="text-center text-gray-400 text-xs md:text-sm italic pb-8">
                * L'Opzione B rappresenta una trasformazione completa del modello di business digitale, non solo un aggiornamento grafico.
            </p>
        </div>
    );
};

// 6. Mockup Links Slide (Slide 18)
export const MockupLinksSlide: React.FC<SlideProps> = ({ isActive }) => {
    const links = [
        { title: "Struttura Offerta", url: "https://gemini.google.com/share/77187e64ba36", desc: "Dettagli testuali e prompt" },
        { title: "Mockup Design V1", url: "https://gemini.google.com/share/cfdc287ceead", desc: "Concept visivo iniziale" },
        { title: "Mockup Design V2", url: "https://gemini.google.com/share/238547982113", desc: "Variante layout alternativa" },
        { title: "Prototipo Interattivo", url: "https://accademia-del-tiramisu.aura.build", desc: "Demo navigabile live", highlight: true }
    ];

    return (
        <div className="min-h-full flex flex-col justify-center items-center p-8 bg-stone-900 text-cream-50 pt-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            <div className="z-10 max-w-5xl w-full">
                <h2 className="text-4xl md:text-6xl font-serif mb-4 text-center">Direzioni Creative</h2>
                <p className="text-xl text-stone-400 text-center mb-12">Esplora le bozze grafiche e i prototipi funzionali che abbiamo preparato.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`group p-6 rounded-xl border transition-all duration-300 flex items-center justify-between
                                ${link.highlight
                                    ? 'bg-amber-600 border-amber-500 hover:bg-amber-500 hover:scale-105 shadow-2xl'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                                }
                            `}
                        >
                            <div>
                                <h3 className={`font-bold text-xl mb-1 ${link.highlight ? 'text-white' : 'text-savoiardo'}`}>
                                    {link.title}
                                </h3>
                                <p className={`text-sm ${link.highlight ? 'text-amber-100' : 'text-gray-400'}`}>
                                    {link.desc}
                                </p>
                            </div>
                            <ExternalLink size={24} className={`opacity-50 group-hover:opacity-100 transition-opacity ${link.highlight ? 'text-white' : 'text-white'}`} />
                        </a>
                    ))}
                </div>

                <div className="mt-12 p-4 border border-stone-700 rounded-lg bg-black/20 text-center text-stone-500 text-sm">
                    <p>Nota: I link aprono risorse esterne in una nuova scheda.</p>
                </div>
            </div>
        </div>
    );
};