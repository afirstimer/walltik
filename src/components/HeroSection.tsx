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

export default function HeroSection({ title }: HeroSectionProps) {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            {title.title1} <br></br>{' '}
                            <span className="text-gradient">{title.title2}</span>{' '}
                            <br></br>
                            {title.title3}
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            {title.description}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-gradient-purple-pink text-white px-8 py-3 text-lg font-semibold hover:opacity-90">
                                GET STARTED FREE
                            </Button>
                            <div className="text-sm text-gray-500 self-center">
                                14 day trial for $1 • Cancel any time
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src={title.image}
                                alt="TikTok Shop Automation"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-4 right-4 z-20">
                            <img
                                src="https://ext.same-assets.com/1385443775/3995105860.svg"
                                alt="TikTok"
                                className="w-12 h-12"
                            />
                        </div>

                        <div className="absolute bottom-4 left-4 z-20">
                            <img
                                src="https://ext.same-assets.com/1385443775/1275887703.svg"
                                alt="Analytics"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
