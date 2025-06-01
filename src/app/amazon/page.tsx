import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function AmazonPage() {
    const heroTitle = {
        title1: "All-in-One",
        title2: "Software",
        title3: "for E-commerce Sellers",
        description: "Unify and Simplify Your eBay Operations",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748777336/Generated_Image_lp259wlp259wlp25_ofzjzo.png",
        url: ""
    }

    const features = [
        {
            badge: "FULFILLMENT",
            title: "Sync Product Listings and Orders from eBay Automatically",
            description: "Easily manage your eBay store with real-time syncing of listings, orders, and inventory. Automatically pull in product details, buyer info, shipping data, and transaction updates—no manual input required. Track all listing statuses and fulfillment progress from one centralized dashboard.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png"
        },
        {
            badge: "AI TOOL",
            title: " Consolidate Multichannel Operations in One Software System",
            description: "Streamline operations by managing eBay, TikTok Shop, Amazon, and more from a single platform. Compare product performance across channels, manage customer messages, returns, and logistics in one place. Role-based access lets your team work efficiently by function.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688026/Gemini_Generated_Image_p73roep73roep73r_ukd9rs.png"
        },
        {
            badge: "MULTI-SHOP",
            title: "Instant Insights for Smarter Sourcing Decisions",
            description: "Make smarter sourcing decisions with instant price and stock insights. Enter or bulk upload eBay product URLs to check real-time availability. Set price alerts and compare listings with Amazon or Walmart to uncover profitable arbitrage opportunities.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688181/Gemini_Generated_Image_7tf4lc7tf4lc7tf4_kasfty.png"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection title={heroTitle} />
                <TrustSection />
                <FeaturesSection features={features} />
                <PricingSection />
                <TestimonialsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
