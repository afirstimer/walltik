import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function BuyingServicePage() {
    const heroTitle = {
        title1: "Buy for Me",
        title2: "Service",
        title3: "",
        description: "Amazon, Sephora, Walmart",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749286988/Generated_Image_tvb7xotvb7xotvb7_izegj6.jpg",
        url: ""
    }

    const features = [
        {
            badge: "AUTOMATION",
            title: "Submit your product request with a few clicks",
            description: "Designed for customers who cannot purchase or ship directly",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749287294/Generated_Image_qryng9qryng9qryn_c0bwf9.jpg"
        },
        {
            badge: "AI TOOL",
            title: "Walltik handles purchasing, payment, and tracking for you",
            description: "The AI tool automates the purchasing process. It checks the availability, submits the order, and makes payment. It also tracks the order and updates the customer automatically.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792541/Generated_Image_x367yax367yax367_k9r4dv.png"
        },
        {
            badge: "FAST DELIVERY",
            title: "Designed for customers who cannot purchase or ship directly",
            description: "You can purchase products from multiple online stores such as Amazon, Walmart, and Sephora in one order. Walltik will handle the order consolidation and shipping for you.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688181/Gemini_Generated_Image_7tf4lc7tf4lc7tf4_kasfty.png"
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