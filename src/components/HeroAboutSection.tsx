import { Button } from '@/components/ui/button';
import { Star, StarIcon } from 'lucide-react';


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

export default function HeroAboutSection({ title }: HeroSectionProps) {
    return (
        <section className="bg-gradient-to-br from-blue-950 to-blue-950 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white sm:text-900 leading-tight">
                            {title.title1} <br></br>{' '}
                            <span className="text-ellipsis">{title.title2}</span>{' '}
                            <br></br>
                            {title.title3}
                        </h1>

                        <p className="mt-6 text-xl text-white leading-relaxed">
                            {title.description}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <Star className="h-5 w-5 fill-yellow-500" />
                                <Star className="h-5 w-5 fill-yellow-500" />
                                <Star className="h-5 w-5 fill-yellow-500" />
                                <Star className="h-5 w-5 fill-yellow-500" />
                                <Star className="h-5 w-5 fill-yellow-500" />
                            </div>

                            <div className="text-sm text-white self-center">
                                4.9 | 11,000+ reviews
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
