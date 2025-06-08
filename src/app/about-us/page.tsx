import Header from '@/components/Header';
import HeroAboutSection from '@/components/HeroAboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FeaturesAboutSection from '@/components/FeaturesAboutSection';
import FounderSection from '@/components/FounderSection';
import CoreValueSection from '@/components/CoreValueSection';

export default function AboutUsPage() {
    const heroTitle = {
        title1: "When Passions",
        title2: "Meet",
        title3: "Profits",
        description: "Walltik takes out the “daily grind” of ecommerce and allows entrepreneurs to turn their passions into profits effortlessly.",
        image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749361621/image_aboutus_uo6knq.png",
        url: ""
    }

    const features = [
        {
            badge: "",
            title: "About Walltik",
            description1: "Launched in 2024, Walltik gives you instant access to 25+ global suppliers. Find trending products, import with one click, and automate orders - effortlessly.",
            description2: "Plus, unlock expert-led strategies to scale faster and smarter.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749361212/Generated_Image_bjrzocbjrzocbjrz_tapewg.png"
        },
        {
            badge: "",
            title: "Multi-Partner + Walltik",
            description1: "This powerful partnership combines Multipartner’s global freelance network with Walltik’s one-click product sourcing and automated order fulfillment.",
            description2: "Together, they empower entrepreneurs to scale their online stores faster and smarter.",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688026/Gemini_Generated_Image_p73roep73roep73r_ukd9rs.png"
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroAboutSection title={heroTitle} />
                <FeaturesAboutSection features={features} />
                <CoreValueSection />
                <FounderSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
