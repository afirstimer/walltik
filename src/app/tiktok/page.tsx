import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function TiktokPage() {
    const heroTitle = {
        title1: "All-in-One",
        title2: "Software",
        title3: "for TikTok Sellers",
        description: "Seamless Integration with TikTok Shop API",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748777422/Generated_Image_lq0n4alq0n4alq0n_qot3vr.png",
        url: ""
    }

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
                <HeroSection title={heroTitle} />
                <FeaturesSection features={features} />
                <PricingSection />
                <TestimonialsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
