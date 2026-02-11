import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-accent/10 pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">psychology</span>
                            </div>
                            <span className="font-serif font-bold text-xl text-gray-800">Menschliche Pflege</span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
                            Verbindung von Neurowissenschaft und Herz für eine nachhaltige Pflegezukunft. Gemeinsam gestalten wir Arbeitswelten, in denen Pflege wieder Freude macht.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">mail</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-800">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Über Elena</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Das Konzept</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Angebote</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-800">Rechtliches</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© 2024 Menschliche Pflege. Dr. Elena Schmidt. Alle Rechte vorbehalten.</p>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent font-bold">
                        <span className="w-4 h-[1px] bg-accent"></span>
                        Made with Heart & Science
                    </div>
                </div>
            </div>
        </footer>
    );
};
