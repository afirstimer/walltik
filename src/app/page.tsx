import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const heroSlides = [
    {
      title1: "Find the Best Deals",
      title2: "Across Multiple Stores",
      title3: "",
      description: "Compare prices, discover hot deals, and save more on every purchase. Shop smarter with the best price comparison tool.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748666448/Gemini_Generated_Image_jmmp98jmmp98jmmp_bx3hqn.png",
      url: "https://deals.walltik.com"
    }
  ];

  const features = [
    {
      badge: "PRICE COMPARISON",
      title: "Compare Prices from Multiple Stores",
      description: "Instantly compare prices from different stores and find the cheapest option. Never overpay again with our smart price comparison tool.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748687994/Gemini_Generated_Image_cjtogqcjtogqcjto_vfpqeo.png"
    },
    {
      badge: "DEAL DISCOVERY",
      title: "Find Trending Deals and Biggest Discounts",
      description: "Discover the hottest deals and biggest discounts all in one place. We aggregate the best offers so you don't have to search everywhere.",
      image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1748688026/Gemini_Generated_Image_p73roep73roep73r_ukd9rs.png"
    },
    {
      badge: "SMART SHOPPING",
      title: "Always Choose the Best Price Before Buying",
      description: "Make informed decisions with price history, reviews, and ratings. Shop smarter and save money on every purchase.",
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
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
