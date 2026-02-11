import { tinaField } from "tinacms/dist/react";

export const Mission = (props: any) => {
    return (
        <section className="bg-white py-24 border-y border-accent/5" id="mission">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block" data-tina-field={tinaField(props, 'badge')}>
                            {props.badge}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight" data-tina-field={tinaField(props, 'title')}>
                            {props.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {props.features?.map((feature: any, i: number) => (
                                <div className="flex gap-4" key={i}>
                                    <span className="material-symbols-outlined text-primary shrink-0">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-bold mb-1" data-tina-field={tinaField(feature, 'title')}>
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-500" data-tina-field={tinaField(feature, 'text')}>
                                            {feature.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img
                                alt="Team interacting positively"
                                className="rounded-3xl shadow-lg brightness-90 saturate-[0.8]"
                                src={props.image}
                                data-tina-field={tinaField(props, 'image')}
                            />
                            <div className="absolute inset-0 border-[20px] border-white/20 rounded-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
