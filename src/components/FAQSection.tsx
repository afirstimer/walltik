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
            question: "What is Walltik TikTok Shop automation?",
            answer: "Walltik TikTok Shop automation is a comprehensive platform that automates your entire TikTok shop  business. From product research and import to order fulfillment and customer service, we handle everything so you can focus on growing your business."
        },
        {
            question: "How does the 1-click product import work?",
            answer: "Our 1-click product import feature allows you to instantly add products from over 25 supported suppliers to your TikTok shop. Simply click on any product you like, and we'll automatically import all details including descriptions, images, videos, and pricing information."
        },
        {
            question: "What is included in the automated fulfillment?",
            answer: "Our automated fulfillment includes order processing, inventory management, supplier communication, shipping coordination, tracking number updates, and return handling. You can sit back and collect profits while we manage the entire fulfillment process."
        },
        {
            question: "Can I try Walltik before committing to a plan?",
            answer: "Yes! We offer a 14-day trial for just $1. You can test all features and see how Walltik transforms your TikTok shop business before choosing a monthly or annual plan. Cancel anytime during the trial period."
        },
        {
            question: "Which suppliers does Walltik support?",
            answer: "Walltik supports over 25 trusted global suppliers including AliExpress, Amazon, Walmart, CJ , Oberlo, and many more. We continuously add new suppliers to ensure you have access to the best products and fastest shipping times."
        },
        {
            question: "How does the AI marketing tool work?",
            answer: "Our AI marketing tool analyzes successful TikTok shop layouts and creates optimized store designs and product titles for maximum conversion. It uses machine learning to understand what works best for TikTok audiences and automatically generates compelling content."
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
                        Everything you need to know about Walltik TikTok Shop automation
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

                <div className="mt-12 text-center">
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
                </div>
            </div>
        </section>
    );
}
