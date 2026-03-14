import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function ExtensionServicesPage() {
    const heroSlides = [
        {
            title1: "Product Checker",
            title2: "Extension Service",
            title3: "for E-commerce Sellers",
            description: "Instantly check pricing and stock status for any product on Amazon and Walmart. AI-powered bulk checking with fast and accurate results.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749285642/Generated_Image_1xu2sx1xu2sx1xu2_a81xkc.jpg",
            url: "#"
        },
        {
            title1: "AI-Powered",
            title2: "Product Research",
            title3: "Tools",
            description: "Scan thousands of products with AI algorithms to find profitable items. Identify trends and opportunities before they become saturated in the dropshipping market.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792639/Generated_Image_1icp8l1icp8l1icp_iueiyf.png",
            url: "#"
        }
    ];

    const features = [
        {
            badge: "PRODUCT CHECKER",
            title: "Instantly check pricing and stock status for any product",
            description: "View the current price and availability of any product directly from the supplier, no matter where you are in the world.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792639/Generated_Image_1icp8l1icp8l1icp_iueiyf.png"
        },
        {
            badge: "AI TOOL",
            title: "Supports bulk checking with fast and accurate results.",
            description: "Using AI-powered algorithms, quickly scan through thousands of products to find the best selling and most profitable items. The AI tool can help you identify trends and opportunities before they become saturated, giving you a competitive edge in the dropshipping market.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792541/Generated_Image_x367yax367yax367_k9r4dv.png"
        },
        {
            badge: "MULTI-SHOP",
            title: "Ideal for dropshippers sourcing trending or high-demand items.",
            description: "Using the extension, you can easily source products from multiple suppliers and shops. With the ability to check prices and availability across multiple suppliers, you can find the best deals and maximize your profits.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688181/Gemini_Generated_Image_7tf4lc7tf4lc7tf4_kasfty.png"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection slides={heroSlides} />
                <FeaturesSection features={features} />
                <PricingSection />
                <TestimonialsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}