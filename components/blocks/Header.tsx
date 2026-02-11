import React from "react";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-accent/10">
            <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-gray-800 leading-none">Menschliche Pflege</span>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Dr. Elena Schmidt</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#narrative" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Über Mich</a>
                    <a href="#concept" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Konzept</a>
                    <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Angebote</a>
                    <button className="bg-primary text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md">
                        Kontakt
                    </button>
                </nav>

                <button className="md:hidden text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
};
