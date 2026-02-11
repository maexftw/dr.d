import React from "react";
import { tinaField } from "tinacms/dist/react";

export const PainPoints = ({ data }) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-tina-field={tinaField(data, "headline")}>
                    {data.headline}
                </h2>
                <p className="text-gray-500" data-tina-field={tinaField(data, "subheadline")}>
                    {data.subheadline}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.items?.map((item, i) => (
                    <div key={i} className="story-card" data-tina-field={tinaField(item)}>
                        <div className={`w-12 h-12 ${i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} rounded-full flex items-center justify-center mb-6`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3" data-tina-field={tinaField(item, "title")}>{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm" data-tina-field={tinaField(item, "description")}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
