import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { features } from 'process';

type Feature = {
    title: string;
    description: string;
    image: string;
    badge: string;
}
type FeatureSectionProps = {
    features: Feature[],
};

export default function FeaturesSection({ features }: FeatureSectionProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 mb-4">
                                    <img
                                        src="https://ext.same-assets.com/1385443775/375037467.gif"
                                        alt="Animation"
                                        className="w-3 h-3 mr-2"
                                    />
                                    {feature.badge}
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                <Button className="bg-gradient-purple-pink text-white px-6 py-2 hover:opacity-90">
                                    Get Started
                                </Button>
                            </div>

                            {/* Image */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <div className="relative">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
