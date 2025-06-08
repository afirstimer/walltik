// components/TimelineSection.tsx
import React from "react";

const timeline = [
    {
        year: "2023",
        title: "FOUNDED",
        description:
            "Founded in November 2023, WallTik is an innovative e-commerce ecosystem designed to empower digital entrepreneurs and content creators across the globe, with a strong focus on the E-Commerce US and UK markets. At its core, WallTik bridges the gap between technology and social commerce by offering a fully integrated suite of tools, services, and training programs tailored for modern online sellers. With a mission to simplify and accelerate success in the fast-moving world of social-driven e-commerce, WallTik provides everything from product sourcing to order fulfillment, marketing automation, and monetization infrastructure—all under one unified platform.",
    },
    {
        year: "2024",
        title: "SHOPIFY APP LAUNCHED",
        description:
            "WallTik's flagship service is its all-in-one business management platform connected to the Shop API. This software, available as a desktop application, enables seamless control over shop operations such as order processing, affiliate management, and advertising campaigns. Designed for scalability and ease of use, it empowers both shop owners and influencers to collaborate, cross-promote, and grow their presence with maximum efficiency.",
    },
    {
        year: "2025",
        title: "1M+ DROPSHIPPERS",
        description:
            "WallTik's flagship service is its all-in-one business management platform connected to the Shop API. This software, available as a desktop application, enables seamless control over shop operations such as order processing, affiliate management, and advertising campaigns. Designed for scalability and ease of use, it empowers both shop owners and influencers to collaborate, cross-promote, and grow their presence with maximum efficiency.",
    },
    {
        year: "2025",
        title: "PARTNERSHIPS EXPANDED",
        description:
            "One of WallTik’s standout offerings is its affiliate integration system, which allows creators to earn commissions by promoting products without owning a shop. This service not only simplifies influencer-brand collaboration but also provides shop owners with a powerful, performance-based marketing channel. Meanwhile, the backend supports campaign tracking, performance analytics, and automated payouts, streamlining the entire process.",
    },
];

export default function TimelineSection() {
    return (
        <section className="bg-white dark:bg-gray-950 py-16 overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
                    Walltik Milestones
                </h2>
                <div className="flex space-x-12 min-w-[900px] sm:min-w-full">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-72 relative">
                            <div className="text-6xl font-bold text-indigo-900 dark:text-indigo-400">
                                {item.year}
                            </div>
                            <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 my-4 relative">
                                <div className="w-3 h-3 bg-indigo-600 rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
                            </div>
                            <h3 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
