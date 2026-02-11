import React from "react";
import { tinaField } from "tinacms/dist/react";

export const Mission = ({ data }) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block" data-tina-field={tinaField(data, "sectionLabel")}>
                            {data.sectionLabel}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight" data-tina-field={tinaField(data, "headline")}>
                            {data.headline}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {data.features?.map((feature, i) => (
                                <div key={i} className="flex flex-col gap-3" data-tina-field={tinaField(feature)}>
                                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{feature.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800" data-tina-field={tinaField(feature, "title")}>{feature.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed" data-tina-field={tinaField(feature, "description")}>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl"></div>
                        <img
                            alt="Mission"
                            className="relative rounded-3xl shadow-2xl w-full z-10"
                            src={data.image}
                            data-tina-field={tinaField(data, "image")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
