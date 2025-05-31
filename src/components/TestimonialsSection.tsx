import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "TikTok Shop Owner",
            image: "https://ext.same-assets.com/1385443775/2847557298.png",
            rating: 5,
            text: "Walltik has completely transformed my TikTok shop. The automation saves me hours every day, and my sales have increased by 300%!"
        },
        {
            name: "Mike Rodriguez",
            role: "E-commerce Entrepreneur",
            image: "https://ext.same-assets.com/1385443775/2312254230.png",
            rating: 5,
            text: "The 1-click product import feature is a game-changer. I can now focus on marketing while Walltik handles all the tedious work."
        },
        {
            name: "Emma Thompson",
            role: "Digital Marketer",
            image: "https://ext.same-assets.com/1385443775/3255383214.png",
            rating: 5,
            text: "Customer support is exceptional and the AI tools help me create converting product descriptions effortlessly."
        },
        {
            name: "David Kim",
            role: "Online Retailer",
            image: "https://ext.same-assets.com/1385443775/3153332079.png",
            rating: 5,
            text: "Walltik simplified my entire  workflow. The automated fulfillment is incredibly reliable."
        },
        {
            name: "Lisa Wang",
            role: "TikTok Influencer",
            image: "https://ext.same-assets.com/1385443775/2317283544.png",
            rating: 5,
            text: "Perfect for scaling my TikTok shop business. The analytics and monitoring features give me complete control."
        },
        {
            name: "James Wilson",
            role: " Expert",
            image: "https://ext.same-assets.com/1385443775/2282160975.png",
            rating: 5,
            text: "I've tried many automation tools, but Walltik is by far the most comprehensive and user-friendly platform."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What our customers say about Walltik
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover millions of winners loving their TikTok shops
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={testimonial.name} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={`${testimonial.name}-star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-navy rounded-2xl p-12 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        Get your AI-powered  store ready!
                    </h3>
                    <p className="text-lg opacity-90 mb-8">
                        Join thousands of successful entrepreneurs using Walltik
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <img
                                src="https://ext.same-assets.com/1385443775/274951934.webp"
                                alt="Walltik Dashboard"
                                className="w-64 h-auto"
                            />
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl font-semibold mb-2">Our impact for millions of entrepreneurs</h4>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold">95%</div>
                                    <div className="text-sm opacity-80">Time Saved</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">300%</div>
                                    <div className="text-sm opacity-80">Sales Increase</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-sm opacity-80">Automation</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">100K+</div>
                                    <div className="text-sm opacity-80">Users</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
