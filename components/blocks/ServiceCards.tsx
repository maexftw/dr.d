import { tinaField } from "tinacms/dist/react";

export const ServiceCards = (props: any) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24" id="formats">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4" data-tina-field={tinaField(props, 'headline')}>
                    {props.headline}
                </h2>
                <p className="text-gray-500 text-lg" data-tina-field={tinaField(props, 'subheadline')}>
                    {props.subheadline}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {props.cards?.map((card: any, i: number) => (
                    <div
                        key={i}
                        className={`
              ${card.highlight ? 'bg-primary text-white shadow-2xl scale-105 relative z-10' : 'bg-background-warm text-left text-text-main border border-accent/20 hover:bg-white shadow-sm hover:shadow-md'} 
              p-10 rounded-[2rem] flex flex-col items-start transition-all
            `}
                    >
                        {card.highlight && (
                            <div className="absolute -top-4 right-8 bg-accent text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Beliebt</div>
                        )}
                        <span className={`text-xs font-bold uppercase tracking-widest mb-6 ${card.highlight ? 'text-white/70' : 'text-accent'}`} data-tina-field={tinaField(card, 'badge')}>
                            {card.badge}
                        </span>
                        <h3 className="text-2xl font-bold mb-4" data-tina-field={tinaField(card, 'title')}>
                            {card.title}
                        </h3>
                        <p className={`mb-8 text-sm leading-relaxed ${card.highlight ? 'text-white/80' : 'text-gray-600'}`} data-tina-field={tinaField(card, 'text')}>
                            {card.text}
                        </p>
                        <ul className="space-y-4 mb-10">
                            {card.listItems?.map((item: any, j: number) => (
                                <li key={j} className={`flex items-center gap-3 text-sm ${card.highlight ? 'text-white/90' : 'text-gray-700 font-medium'}`}>
                                    <span className={`material-symbols-outlined ${card.highlight ? '' : 'text-primary'}`}>{item.icon || 'done'}</span>
                                    <span data-tina-field={tinaField(item, 'text')}>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`mt-auto w-full py-4 rounded-full font-bold transition-all ${card.highlight ? 'bg-white text-primary hover:bg-background-warm' : 'border border-primary text-primary hover:bg-primary hover:text-white'}`} data-tina-field={tinaField(card, 'buttonText')}>
                            {card.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};
