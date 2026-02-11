import React from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Narrative = ({ data }) => {
    return (
        <section className="warm-gradient py-24" id="narrative">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-5/12 order-2 md:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3 transition-transform group-hover:rotate-1"></div>
                            <img
                                alt="Portrait"
                                className="relative rounded-2xl shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 w-full aspect-[3/4] object-cover"
                                src={data.image}
                                data-tina-field={tinaField(data, "image")}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 order-1 md:order-2">
                        <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block" data-tina-field={tinaField(data, "sectionLabel")}>
                            {data.sectionLabel}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" data-tina-field={tinaField(data, "headline")}>
                            {data.headline?.split(" ").map((word, i) => {
                                if (word.toLowerCase() === "menschlichen" || word.toLowerCase() === "revolution.") {
                                    return <span key={i} className="italic font-normal">{word} </span>
                                }
                                return word + " ";
                            })}
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed" data-tina-field={tinaField(data, "body")}>
                            <TinaMarkdown content={data.body} />
                            {data.quote && (
                                <div className="pt-4">
                                    <p className="font-serif italic text-2xl text-primary" data-tina-field={tinaField(data, "quote")}>
                                        "{data.quote}"
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
