import { tinaField } from "tinacms/dist/react";

export const Hero = (props: any) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wide uppercase text-xs" data-tina-field={tinaField(props, 'badge')}>
                        <span className="w-8 h-[1px] bg-accent"></span> {props.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a202c]" data-tina-field={tinaField(props, 'headline')}>
                        {props.headline}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl" data-tina-field={tinaField(props, 'subheadline')}>
                        {props.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white text-base font-bold h-14 px-10 rounded-full transition-all shadow-lg flex items-center justify-center gap-2" data-tina-field={tinaField(props, 'ctaPrimary')}>
                            {props.ctaPrimary} <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-transparent border border-accent/30 hover:border-accent text-accent font-bold h-14 px-8 rounded-full transition-all flex items-center justify-center" data-tina-field={tinaField(props, 'ctaSecondary')}>
                            {props.ctaSecondary}
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div
                        className="aspect-[4/5] rounded-[2rem] bg-cover bg-center shadow-2xl overflow-hidden"
                        data-tina-field={tinaField(props, 'image')}
                        style={{ backgroundImage: `url("${props.image}")` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block border border-accent/10">
                        <p className="text-sm italic text-gray-500 mb-2">&quot;Gute Pflege beginnt bei der Pflege der Pflegenden.&quot;</p>
                        <span className="text-xs font-bold text-primary">— Dr. Elena Schmidt</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
