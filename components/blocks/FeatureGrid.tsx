import { tinaField } from "tinacms/dist/react";

export const FeatureGrid = (props: any) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-tina-field={tinaField(props, 'headline')}>
                    {props.headline}
                </h2>
                <p className="text-gray-500" data-tina-field={tinaField(props, 'subheadline')}>
                    {props.subheadline}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {props.items?.map((item: any, i: number) => (
                    <div className="story-card" key={i}>
                        <div className={`w-12 h-12 bg-${item.iconColor || 'primary'}/10 rounded-full flex items-center justify-center text-${item.iconColor || 'primary'} mb-6`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3" data-tina-field={tinaField(item, 'title')}>
                            {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm" data-tina-field={tinaField(item, 'text')}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
