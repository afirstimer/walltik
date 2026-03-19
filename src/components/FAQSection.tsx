'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
    const faqs = [
        {
            question: "What is Walltik price comparison platform?",
            answer: "Walltik is a comprehensive price comparison and deals discovery platform that helps you find the best prices across multiple stores. We aggregate deals from Shopee, Amazon, TikTok Shop and more to help you save money on every purchase."
        },
        {
            question: "How does the price comparison work?",
            answer: "Our platform searches across multiple stores in real-time to show you the current prices for any product. We display all available options including discounts, shipping costs, and seller ratings so you can make informed decisions."
        },
        {
            question: "Is Walltik really free to use?",
            answer: "Yes! Walltik offers a free plan with basic price comparison and deal discovery features. For unlimited searches, price alerts, and advanced features, you can upgrade to our Premium or Pro plans."
        },
        {
            question: "Which stores and platforms does Walltik support?",
            answer: "Walltik supports major e-commerce platforms including Shopee, Amazon, TikTok Shop, eBay, Lazada, and many more. We continuously add new stores to ensure you get the best price comparison across all your favorite shopping destinations."
        },
        {
            question: "How do price drop alerts work?",
            answer: "You can set up alerts for any product you're interested in. When the price drops or a new deal becomes available, we'll notify you immediately via email or push notification so you never miss a great deal."
        },
        {
            question: "Can I use Walltik on my mobile phone?",
            answer: "Yes! Walltik is fully responsive and works perfectly on mobile devices. You can compare prices, find deals, and set alerts on the go with our mobile-optimized platform."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about Walltik price comparison and deals
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={faq.question} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* <div className="mt-12 text-center">
                    <div className="bg-gradient-navy text-white rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-4">
                            Start your Walltik trial today
                        </h3>
                        <p className="mb-6 opacity-90">
                            Join thousands of successful TikTok shop owners using Walltik automation
                        </p>
                        <button className="bg-gradient-purple-pink text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                            Start 14-day trial for $1
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
