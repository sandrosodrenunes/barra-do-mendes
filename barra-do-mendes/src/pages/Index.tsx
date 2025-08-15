import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import NewsPreview from "@/components/NewsPreview";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesSection />
      <NewsPreview />
      <OpportunitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
