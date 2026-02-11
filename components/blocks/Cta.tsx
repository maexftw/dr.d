import React from "react";
import { tinaField } from "tinacms/dist/react";

export const Cta = ({ data }) => {
    return (
        <section className="py-12 md:py-20 px-6">
            <div className="max-w-[1200px] mx-auto rounded-[3rem] warm-gradient p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-accent/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight" data-tina-field={tinaField(data, "headline")}>
                        {data.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl mx-auto" data-tina-field={tinaField(data, "description")}>
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {data.ctaPrimary && (
                            <button className="bg-primary hover:bg-primary/90 text-white text-base font-bold h-14 px-10 rounded-full transition-all shadow-lg flex items-center justify-center gap-2" data-tina-field={tinaField(data, "ctaPrimary")}>
                                {data.ctaPrimary} <span className="material-symbols-outlined">calendar_today</span>
                            </button>
                        )}
                        {data.ctaSecondary && (
                            <button className="bg-white border border-accent/30 hover:border-accent text-accent font-bold h-14 px-8 rounded-full transition-all flex items-center justify-center shadow-md" data-tina-field={tinaField(data, "ctaSecondary")}>
                                {data.ctaSecondary}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
