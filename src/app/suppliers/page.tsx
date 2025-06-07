import Header from '@/components/Header';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSupplierSection from '@/components/HeroSupplierSection';

export default function SupplierPage() {
    const heroTitle = {
        title1: "Our Global Suppliers",
        title2: "",
        title3: "",
        description: "Browse over 500M trending products from our collection of trusted, global suppliers. Instantly add new products to your store in one click and enjoy fast shipping to your customers.",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749285642/Generated_Image_1xu2sx1xu2sx1xu2_a81xkc.jpg",
        url: ""
    }

    const features = [
        {
            badge: "AUTOMATION",
            title: "Major retail suppliers at your fingertips",
            description: "This feature allows you to atomate the process of updating tracking numbers for your orders. It takes care of the tedious work of manually updating the tracking numbers, so you can focus on more important tasks.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749291068/Generated_Image_x11obax11obax11o_rh2afl.png"
        },
        {
            badge: "INTEGRATED",
            title: "Top-tier private suppliers",
            description: "Our AI tool is integrated directly into the desktop client, ensuring seamless communication and real-time synchronization between the AI and the desktop client. This integration allows for fast and efficient automation of tasks, such as tracking and updating orders, without the need for manual intervention.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749291615/Generated_Image_wfrsxxwfrsxxwfrs_dqpvzx.png"
        },
        {
            badge: "LOGISTICS",
            title: "Sell globally, ship locally",
            description: "This feature supports multiple logistics sources, providing streamlined visibility into the fulfillment process. It helps manage orders from various sources, ensuring efficient tracking and updates.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749291332/Generated_Image_hjrjn9hjrjn9hjrj_mpx1hh.png"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSupplierSection title={heroTitle} />
                <FeaturesSection features={features} />
                <PricingSection />
                <TestimonialsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}