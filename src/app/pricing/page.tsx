"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, ChevronDown, Menu, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
    const pricing = [
        {
            title: "Import 200",
            monthly: 19.9,
            annual: 14.9, // 25% off
            annualSavings: "$60",
            description: "Our most basic automation features.",
        },
        {
            title: "Starter 500",
            monthly: 39.9,
            annual: 29.9,
            annualSavings: "$120",
            description:
                "A full-scale automation solution that is perfect for beginners creating a store.",
            popular: true,
        },
        {
            title: "Advanced 1K",
            monthly: 59.9,
            annual: 44.9,
            annualSavings: "$180",
            description:
                "For experienced dropshippers who need more products and faster support.",
        },
    ];


    return (
        <div className="min-h-screen bg-[#f9fafa]">
            <Header />

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-white to-[#f9fafa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-[#171734] mb-4">
                        Pick a plan
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Automate your success with Walltik
                    </p>

                    {/* Platform Logos */}
                    <div className="flex items-center justify-center space-x-8 mb-16 grayscale opacity-60">
                        <img src="https://ext.same-assets.com/811604260/1810314245.svg" alt="Shopify" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/3059418399.svg" alt="eBay" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/1944600275.svg" alt="Facebook" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/2521572639.svg" alt="Amazon" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/928475316.svg" alt="Wix" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/1404807485.svg" alt="WooCommerce" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/3383352906.svg" alt="Etsy" className="h-8" />
                        <img src="https://ext.same-assets.com/811604260/1382701592.svg" alt="TikTok" className="h-8" />
                    </div>

                    {/* Billing Toggle */}
                    <Tabs value={billingPeriod} onValueChange={(value) => {
                        if (value === "annual" || value === "monthly") {
                            setBillingPeriod(value);
                        }
                    }} className="mb-12">
                        <TabsList className="grid w-fit grid-cols-2 mx-auto bg-gray-100">
                            <TabsTrigger value="annual" className="data-[state=active]:bg-white relative">
                                Annual
                                <Badge className="ml-2 bg-[#30ad94] text-white text-xs">25% off</Badge>
                            </TabsTrigger>
                            <TabsTrigger value="monthly" className="data-[state=active]:bg-white">
                                Monthly
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {pricing.map((plan) => {
                            const isAnnual = billingPeriod === "annual";
                            const price = isAnnual ? plan.annual : plan.monthly;

                            return (
                                <Card
                                    key={plan.title}
                                    className={`relative border-2 ${plan.popular ? "border-[#c9215d]" : "border-gray-200"
                                        } hover:border-[#c9215d] transition-all`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <Badge className="bg-[#c9215d] text-white px-4 py-1">Most Popular</Badge>
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-4 pt-8">
                                        <CardTitle className="text-lg font-semibold text-[#171734]">{plan.title}</CardTitle>
                                        <div className="text-4xl font-bold text-[#171734] mb-2">${price.toFixed(2)}</div>
                                        <p className="text-sm text-gray-500">per month</p>
                                        {isAnnual && (
                                            <p className="text-sm text-[#30ad94]">
                                                Billed Annually - Save {plan.annualSavings}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <Button className="w-full bg-[#c9215d] hover:bg-[#a91b50] text-white mb-4">
                                            START NOW FOR $1
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}

                        {/* Need More Plan */}
                        <Card className="relative border-2 border-gray-200 hover:border-[#c9215d] transition-all">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-lg font-semibold text-[#171734]">Need more?</CardTitle>
                                <div className="text-4xl font-bold text-[#171734] mb-2">$__</div>
                                <p className="text-sm text-gray-500">Pick the right package for you</p>
                            </CardHeader>
                            <CardContent>
                                <Select>
                                    <SelectTrigger className="w-full mb-4">
                                        <SelectValue placeholder="Choose package" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="advanced-2k">Advanced 2K</SelectItem>
                                        <SelectItem value="advanced-3k">Advanced 3K</SelectItem>
                                        <SelectItem value="advanced-4k">Advanced 4K</SelectItem>
                                        <SelectItem value="master-10k">Master 10K</SelectItem>
                                        <SelectItem value="master-20k">Master 20K</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button className="w-full bg-[#c9215d] hover:bg-[#a91b50] text-white">
                                    START NOW FOR $1
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 pr-8 font-semibold text-[#171734]">Features</th>
                                    <th className="text-center py-4 px-4 font-semibold text-[#171734]">Import 200</th>
                                    <th className="text-center py-4 px-4 font-semibold text-[#171734]">Starter 500</th>
                                    <th className="text-center py-4 px-4 font-semibold text-[#171734]">Advanced 1K</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Product Importer", import200: "200 Products", starter500: "500 Products", advanced1k: "1K Products" },
                                    { feature: "Price and Stock Monitor", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Product Research Tool", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Draft Manager", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Order Manager", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Products Manager", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Product Image Editor", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Product Variation Support", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Smart Filter System", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Extension: 'One-Click Drafts' Creator", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Full Business Dashboard", import200: true, starter500: true, advanced1k: true },
                                    { feature: "24/7 Support", import200: true, starter500: true, advanced1k: true },
                                    { feature: "All Supported Suppliers", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Walltik Academy", import200: true, starter500: true, advanced1k: true },
                                    { feature: "Bulk Product Importer", import200: false, starter500: true, advanced1k: true },
                                    { feature: "AI SmartEdit", import200: false, starter500: true, advanced1k: true },
                                    { feature: "Full Product Editor", import200: false, starter500: true, advanced1k: true },
                                    { feature: "Sourcing Product Agent Service", import200: false, starter500: false, advanced1k: true },
                                    { feature: "Fulfilled by Walltik Service Supported", import200: false, starter500: false, advanced1k: true },
                                    { feature: "Automatic Tracking Updates Supported", import200: false, starter500: false, advanced1k: true },
                                    { feature: "Custom Branding", import200: false, starter500: false, advanced1k: true },
                                    { feature: "VIP Support", import200: false, starter500: false, advanced1k: true },
                                    { feature: "Multiple Store Management", import200: "3", starter500: "3", advanced1k: "3" }
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                        <td className="py-3 pr-8 text-[#171734] font-medium">{row.feature}</td>
                                        <td className="text-center py-3 px-4">
                                            {typeof row.import200 === 'boolean' ? (
                                                row.import200 ? <Check className="h-5 w-5 text-[#30ad94] mx-auto" /> : <span className="text-gray-300">—</span>
                                            ) : (
                                                <span className="text-[#171734] font-medium">{row.import200}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-3 px-4">
                                            {typeof row.starter500 === 'boolean' ? (
                                                row.starter500 ? <Check className="h-5 w-5 text-[#30ad94] mx-auto" /> : <span className="text-gray-300">—</span>
                                            ) : (
                                                <span className="text-[#171734] font-medium">{row.starter500}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-3 px-4">
                                            {typeof row.advanced1k === 'boolean' ? (
                                                row.advanced1k ? <Check className="h-5 w-5 text-[#30ad94] mx-auto" /> : <span className="text-gray-300">—</span>
                                            ) : (
                                                <span className="text-[#171734] font-medium">{row.advanced1k}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#f9fafa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#171734] mb-12">
                        What do other entrepreneurs say about Walltik?
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-white border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center justify-center mb-6">
                                    <img
                                        src="https://res.cloudinary.com/dqg6ernew/image/upload/v1748675920/ulkSAD01_suxiid.svg"
                                        alt="AC Hampton"
                                        className="w-16 h-16 rounded-full"
                                    />
                                </div>
                                <blockquote className="text-lg text-gray-700 mb-6">
                                    "This is truly a one-stop-shop  app. Walltik is a step ahead of the game, offering automatic  with huge suppliers like Amazon, Wayfair & more."
                                </blockquote>
                                <cite className="text-[#171734] font-semibold">Walltik</cite>
                                <div className="flex items-center justify-center mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex items-center justify-center space-x-8 mt-12">
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Trustpilot</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Capterra</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">GetApp</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#171734] mb-4">
                        Get more out of Walltik with Add-ons
                    </h2>
                    <p className="text-gray-600 mb-12">
                        Try unlimited add-ons for rapid success and time savings!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="border-2 border-gray-200 hover:border-[#30ad94] transition-all">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-[#30ad94] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <img src="https://ext.same-assets.com/811604260/3819807474.svg" alt="Marketing" className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-[#171734]">Sales marketing system</CardTitle>
                                <div className="text-2xl font-bold text-[#171734]">$9.90 <span className="text-sm font-normal">per month</span></div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm mb-6">
                                    Start marketing your business automatically using Walltik powerful Sales marketing system.
                                </p>
                                <ul className="text-left text-sm text-gray-600 space-y-2">
                                    <li>• Automatic buying guide order</li>
                                    <li>• Pre-set marketing sequences</li>
                                    <li>• Automatic Order Fulfillment</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-gray-200 hover:border-[#ca9c5f] transition-all">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-[#ca9c5f] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <img src="https://ext.same-assets.com/811604260/2270342546.svg" alt="Address" className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-[#171734]">US Address</CardTitle>
                                <div className="text-2xl font-bold text-[#171734]">$14.97 <span className="text-sm font-normal">per month</span></div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm mb-6">
                                    Streamline your business with our US address service.
                                </p>
                                <ul className="text-left text-sm text-gray-600 space-y-2">
                                    <li>• Auto forward all your mail</li>
                                    <li>• Access a prestigious US address</li>
                                    <li>• Let your US address serve your business</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-gray-200 hover:border-[#c9215d] transition-all">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-[#c9215d] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <img src="https://ext.same-assets.com/811604260/2657913414.svg" alt="Trading Hub" className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-[#171734]">AI Trading hub</CardTitle>
                                <div className="text-2xl font-bold text-[#171734]">$14.97 <span className="text-sm font-normal">per month</span></div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm mb-6">
                                    Explore verified winning products and get access to.
                                </p>
                                <ul className="text-left text-sm text-gray-600 space-y-2">
                                    <li>• Access verified products</li>
                                    <li>• Get trending alerts</li>
                                    <li>• Make sure buy first</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <Button className="mt-12 bg-[#c9215d] hover:bg-[#a91b50] text-white px-8 py-3">
                        GET STARTED
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                        All free for the first 14 days trial!
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-[#f0f4f4]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#171734] text-center mb-12">
                        Frequently asked questions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "How do I get started with Walltik?",
                            "Do you offer a money-plan?",
                            "Does Walltik have a trial period?",
                            "Do you have live support?",
                            "Can I use Walltik as a beginner?",
                            "Do you have a full-scale order management service?",
                            "Which payment methods do you accept?",
                            "What if I need more Finder or add-order usage?",
                            "Can I cancel at any time?",
                            "Does Walltik have a membership program to help me to get started?"
                        ].map((question, index) => (
                            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow bg-white border-0">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#171734] font-medium">{question}</span>
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#171734] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Start your Walltik trial today
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        The only tool you need to start & grow your  business.
                    </p>
                    <Button className="bg-[#c9215d] hover:bg-[#a91b50] text-white px-8 py-4 text-lg mb-4">
                        GET STARTED
                    </Button>
                    <p className="text-sm text-gray-400">
                        14 days trial • No credit card required
                    </p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
