'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            products: "Import 200",
            monthlyPrice: 19.90,
            annualPrice: 14.90,
            savings: 84,
            popular: false,
            features: [
                "Product Importer",
                "Price and Stock Monitor",
                "Product Research Tool",
                "Draft Manager",
                "Products Manager",
                "Product Image Editor",
                "Smart Filter System",
                "Extension: 'One-Click Drafts' Creator",
                "24/7 Support",
                "All Supported Suppliers",
                "Walltik Academy"
            ]
        },
        {
            name: "Advanced",
            products: "Start 500",
            monthlyPrice: 39.90,
            annualPrice: 29.90,
            savings: 120,
            popular: true,
            features: [
                "Everything in Starter",
                "AI SmartEdit",
                "Sourcing Product Agent Service",
                "Priority Support",
                "Advanced Analytics",
                "Bulk Operations",
                "Custom Branding"
            ]
        },
        {
            name: "Master",
            products: "Advanced k",
            monthlyPrice: 59.90,
            annualPrice: 49.90,
            savings: 180,
            popular: false,
            features: [
                "Everything in Advanced",
                "Dedicated Account Manager",
                "Custom Integrations",
                "White Label Solution",
                "API Access",
                "Advanced Automation",
                "Priority Processing"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Your freedom is our success, let's start the journey together
                    </h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="bg-gray-100 p-1 rounded-lg flex">
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${isAnnual
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Annual (25% off)
                            </button>
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${!isAnnual
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={plan.name}
                            className={`relative ${plan.popular
                                ? 'border-purple-500 shadow-lg scale-105'
                                : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-purple-pink text-white">
                                    Most Popular
                                </Badge>
                            )}

                            <CardHeader className="text-center pb-4">
                                <div className="text-sm text-gray-500 mb-2">{plan.products}</div>
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

                                <div className="mt-4">
                                    <span className="text-3xl font-bold text-gray-900">
                                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-500"> per month</span>
                                </div>

                                {isAnnual && (
                                    <div className="text-sm text-gray-500 mt-1">
                                        Billed Annually - Save ${plan.savings}
                                    </div>
                                )}
                            </CardHeader>

                            <CardContent>
                                <Button
                                    className={`w-full mb-6 ${plan.popular
                                        ? 'bg-gradient-purple-pink text-white hover:opacity-90'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                        }`}
                                >
                                    START NOW FOR $1
                                </Button>

                                <div className="space-y-3">
                                    {plan.features.slice(0, 5).map((feature, featureIndex) => (
                                        <div key={`${plan.name}-${feature}`} className="flex items-start">
                                            <Check className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.features.length > 5 && (
                                        <div className="text-sm text-gray-500 italic">
                                            +{plan.features.length - 5} more features...
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Custom Package */}
                <Card className="border-2 border-dashed border-gray-300">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Need more?</h3>
                            <p className="text-gray-600">Custom solutions for enterprise needs</p>
                        </div>
                        <Button variant="outline">
                            Choose package
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
