import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const heroSlides = [
    {
      title1: "TikTok Shop",
      title2: "Automation Software",
      title3: "for Multi-Platform Sellers",
      description: "WallTik provides powerful TikTok Shop automation tools combined with Amazon and eBay integration. Manage inventory, orders, and product sourcing with AI-powered e-commerce software.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748666448/Gemini_Generated_Image_jmmp98jmmp98jmmp_bx3hqn.png",
      url: "#"
    },
    {
      title1: "Multi-Platform",
      title2: "E-commerce Management",
      title3: "Automation Tools",
      description: "Seamlessly manage TikTok Shop, Amazon, and eBay from one dashboard. Our e-commerce automation software streamlines product sourcing, inventory management, and order processing.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png",
      url: "#"
    },
    {
      title1: "Earn",
      title2: "Affiliate Rewards",
      title3: "Program",
      description: "Join WallTik's affiliate program and earn rewards. Invite friends, earn vouchers, and use them for e-commerce tools or withdraw cash. Perfect for sellers and marketers.",
      image: "/voucher_aff.png",
      url: ""
    }
  ];

  const features = [
    {
      badge: "FULFILLMENT",
      title: "TikTok Shop Management",
      description: "We provide seamless integration with the TikTok Shop API, allowing you to manage orders, products, revenues, and performance across multiple shops—all from one centralized desktop client.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png"
    },
    {
      badge: "AI TOOL",
      title: "Amazon Shop Management",
      description: "Easily manage your Amazon store’s products, orders, and inventory with powerful features like bulk price and stock checking, all within an intuitive control panel.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688026/Gemini_Generated_Image_p73roep73roep73r_ukd9rs.png"
    },
    {
      badge: "MULTI-SHOP",
      title: "eBay Shop Management",
      description: "Automatically sync your eBay product listings and orders, and streamline your multichannel operations through our unified software system.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688181/Gemini_Generated_Image_7tf4lc7tf4lc7tf4_kasfty.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection slides={heroSlides} />
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
