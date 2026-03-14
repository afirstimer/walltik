import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function AmazonPage() {
    const heroSlides = [
        {
            title1: "Amazon Seller",
            title2: "Automation Software",
            title3: "for Multi-Platform Management",
            description: "Optimize and automate your Amazon workflow with WallTik. Manage inventory, orders, and product sourcing across multiple Amazon accounts and regions with AI-powered tools.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748777336/Generated_Image_lp259wlp259wlp25_ofzjzo.png",
            url: "#"
        },
        {
            title1: "Multi-Account",
            title2: "Amazon Management",
            title3: "Dashboard",
            description: "Manage multiple Amazon seller accounts across US, UK, and EU regions from one centralized dashboard. Automate order processing, inventory sync, and performance tracking.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png",
            url: "#"
        }
    ];

    const features = [
        {
            badge: "FULFILLMENT",
            title: "Real-Time Product and Order Sync",
            description: "Seamless syncing of Amazon listings, inventory, and order data from multiple accounts and regions. Track order status, shipping progress, and customer messages in one dashboard. Automate order tagging, sorting, and batch actions.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png"
        },
        {
            badge: "AI TOOL",
            title: "Central Dashboard for Amazon Performance",
            description: "View, filter, and process all incoming orders in one dashboard. Monitor order statuses: unpaid, ready to ship, shipped, completed, cancelled. Automate order tagging, sorting, and batch actions.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688026/Gemini_Generated_Image_p73roep73roep73r_ukd9rs.png"
        },
        {
            badge: "MULTI-SHOP",
            title: "Multi-Account & Regional Support",
            description: "Manage multiple Amazon seller accounts across regions (US, UK, EU) in one view. Track order status, shipping progress, and customer messages in one dashboard. Automate order tagging, sorting, and batch actions.",
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
