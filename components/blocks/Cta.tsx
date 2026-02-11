import { tinaField } from "tinacms/dist/react";

export const Cta = (props: any) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24">
            <div className="bg-accent/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle className="text-primary" cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"></circle>
                        <circle className="text-accent" cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5"></circle>
                    </svg>
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" data-tina-field={tinaField(props, 'headline')}>
                        {props.headline}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12" data-tina-field={tinaField(props, 'subheadline')}>
                        {props.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-12 rounded-full shadow-xl transition-all" data-tina-field={tinaField(props, 'ctaPrimary')}>
                            {props.ctaPrimary}
                        </button>
                        <button className="bg-white border border-accent/20 hover:border-accent text-accent font-bold h-16 px-10 rounded-full transition-all" data-tina-field={tinaField(props, 'ctaSecondary')}>
                            {props.ctaSecondary}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
