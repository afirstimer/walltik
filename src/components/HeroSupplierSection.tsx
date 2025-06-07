import { Button } from '@/components/ui/button';


type HeroTitle = {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    image: string;
    url: string;
}
type HeroSectionProps = {
    title: HeroTitle
}

export default function HeroSupplierSection({ title }: HeroSectionProps) {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            <span className="text-gradient">{title.title1}</span>{' '}
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            {title.description}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-purple-pink text-white px-8 py-3 text-lg font-semibold hover:opacity-90">
                                GET STARTED FREE
                            </Button>
                        </div>
                        <div className="text-sm text-gray-500 self-center mt-2">
                            14 day trial for $1 • Cancel any time
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
