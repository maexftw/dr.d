import React from "react";
import { tinaField } from "tinacms/dist/react";

export const ServiceCards = ({ data }) => {
    return (
        <section className="bg-background-warm py-24">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-tina-field={tinaField(data, "headline")}>
                        {data.headline}
                    </h2>
                    <p className="text-gray-500" data-tina-field={tinaField(data, "subheadline")}>
                        {data.subheadline}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {data.cards?.map((card, i) => (
                        <div key={i} className={`flex flex-col p-10 rounded-3xl transition-all duration-500 ${card.featured ? "bg-primary text-white shadow-2xl scale-105 z-10" : "bg-white text-[#1a202c] border border-accent/10 shadow-lg hover:shadow-xl"}`} data-tina-field={tinaField(card)}>
                            <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit ${card.featured ? "bg-white/20 text-white" : "bg-accent/10 text-accent"}`} data-tina-field={tinaField(card, "tag")}>
                                {card.tag}
                            </span>
                            <h3 className="text-2xl font-bold mb-4" data-tina-field={tinaField(card, "title")}>{card.title}</h3>
                            <p className={`text-sm mb-8 leading-relaxed ${card.featured ? "text-white/80" : "text-gray-500"}`} data-tina-field={tinaField(card, "description")}>
                                {card.description}
                            </p>
                            <div className="space-y-4 mb-10 flex-grow">
                                {card.features?.map((f, j) => (
                                    <div key={j} className="flex i items-center gap-3 text-sm">
                                        <span className={`material-symbols-outlined text-[18px] ${card.featured ? "text-white" : "text-primary"}`}>check_circle</span>
                                        <span className={card.featured ? "text-white/90" : "text-gray-600"}>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <button className={`w-full h-14 rounded-full font-bold transition-all shadow-md active:scale-95 ${card.featured ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary/90"}`} data-tina-field={tinaField(card, "ctaText")}>
                                {card.ctaText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
