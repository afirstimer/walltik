"use client";

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';


type HeroTitle = {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    image: string;
    url: string;
}

type HeroSectionProps = {
    slides: HeroTitle[]
}

export default function HeroSection({ slides }: HeroSectionProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        // Only set up interval if slides exist and have length
        if (!slides || slides.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => 
                (prevIndex + 1) % slides.length
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides?.length]);

    const currentSlide = slides && slides[currentSlideIndex];

    if (!slides || slides.length === 0 || !currentSlide) {
        return <div>No slides available</div>;
    }

    return (
        <div className="relative overflow-hidden">
            <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <section key={index} className="w-full flex-shrink-0 bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="text-center lg:text-left">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        {slide.title1} <br></br>{' '}
                                        <span className="text-gradient">{slide.title2}</span>{' '}
                                        <br></br>
                                        {slide.title3}
                                    </h1>

                                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                        {slide.description}
                                    </p>

                                    {slide.url && (
                                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                            <Button size="lg" className="bg-gradient-purple-pink text-white px-8 py-3 text-lg font-semibold hover:opacity-90">
                                                GET STARTED FREE
                                            </Button>
                                            <div className="text-sm text-gray-500 self-center">
                                                14 day trial for $1 • Cancel any time
                                            </div>
                                        </div>
                                    )}
                                    {/* if slide is affiliate */}
                                    {slide.title3 === "Affiliate" && (
                                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                            <Button size="lg" className="bg-gradient-purple-pink text-white px-8 py-3 text-lg font-semibold hover:opacity-90">
                                                START EARNING
                                            </Button>
                                            <div className="text-sm text-gray-500 self-center">
                                                Become an affiliate today
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Content - Hero Image */}
                                <div className="relative">
                                    <div className="relative z-10">
                                        <img
                                            src={slide.image}
                                            alt={`WallTik ${slide.title2} dashboard - ${slide.title1} ${slide.title3} interface showing e-commerce automation tools`}
                                            className="w-full h-auto"
                                            loading="eager"
                                        />
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <img
                                            src="/tiktok.svg"
                                            alt="TikTok Shop integration icon"
                                            className="w-12 h-12"
                                        />
                                    </div>

                                    <div className="absolute bottom-4 left-4 z-20">
                                        <img
                                            src="/analytics.svg"
                                            alt="E-commerce analytics dashboard icon"
                                            className="w-16 h-16"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentSlideIndex 
                                ? 'bg-white w-8' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
