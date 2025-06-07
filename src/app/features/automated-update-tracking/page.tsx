import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function AutomatedUpdateTrackingPage() {
    const heroTitle = {
        title1: "Automated Update Tracking",
        title2: "Service",
        title3: "",
        description: "Track product prices and availability across multiple suppliers and online stores. Get notified of any price drops or availability changes.",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749285642/Generated_Image_1xu2sx1xu2sx1xu2_a81xkc.jpg",
        url: ""
    }

    const features = [
        {
            badge: "AUTOMATION",
            title: "Automatically updates tracking numbers for your orders",
            description: "This feature allows you to atomate the process of updating tracking numbers for your orders. It takes care of the tedious work of manually updating the tracking numbers, so you can focus on more important tasks.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749288099/Generated_Image_3p9y003p9y003p9y_ki8xtm.jpg"
        },
        {
            badge: "INTEGRATED",
            title: "Integrated directly into the desktop client for real-time sync",
            description: "Our AI tool is integrated directly into the desktop client, ensuring seamless communication and real-time synchronization between the AI and the desktop client. This integration allows for fast and efficient automation of tasks, such as tracking and updating orders, without the need for manual intervention.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748792541/Generated_Image_x367yax367yax367_k9r4dv.png"
        },
        {
            badge: "LOGISTICS",
            title: "Supports multiple logistics sources and streamlines fulfillment visibility",
            description: "This feature supports multiple logistics sources, providing streamlined visibility into the fulfillment process. It helps manage orders from various sources, ensuring efficient tracking and updates.",
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