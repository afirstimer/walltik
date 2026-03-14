import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function TiktokPage() {
    const heroSlides = [
        {
            title1: "TikTok Shop",
            title2: "Automation Software",
            title3: "for Multi-Channel Selling",
            description: "Seamless integration with TikTok Shop API for managing orders, products, revenues, and shop performance from one centralized dashboard.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748777422/Generated_Image_lq0n4alq0n4alq0n_qot3vr.png",
            url: "#"
        },
        {
            title1: "Multi-Shop",
            title2: "TikTok Management",
            title3: "Dashboard",
            description: "Manage multiple TikTok shops with automated order processing, product sync, and performance tracking. Perfect for scaling your TikTok business.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792541/Generated_Image_x367yax367yax367_k9r4dv.png",
            url: "#"
        }
    ];

    const features = [
        {
            badge: "FULFILLMENT",
            title: "Manage Orders, Products, Revenues, and Shop Performance",
            description: "View, filter, and process all incoming orders in one dashboard. Monitor order statuses: unpaid, ready to ship, shipped, completed, cancelled. Automate order tagging, sorting, and batch actions.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792541/Generated_Image_x367yax367yax367_k9r4dv.png"
        },
        {
            badge: "AI TOOL",
            title: " Product Management",
            description: "Add/edit/delete products directly from the client interface. Sync product data across multiple TikTok Shops at once. Modify pricing, inventory, and product descriptions in bulk",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792639/Generated_Image_1icp8l1icp8l1icp_iueiyf.png"
        },
        {
            badge: "MULTI-SHOP",
            title: "Revenue and Performance Analytics",
            description: "Daily, weekly, and monthly sales overviews with breakdown by shop/product. Conversion rate tracking: view traffic, clicks, and sales funnel. Revenue heatmaps and charts to identify best-selling items and peak hours.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792677/Generated_Image_6uhnay6uhnay6uhn_qcnff0.png"
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
