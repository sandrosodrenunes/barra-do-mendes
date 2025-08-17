import NewsHeader from "@/components/NewsHeader";
import FeaturedNews from "@/components/FeaturedNews";
import MainNews from "@/components/MainNews";
import QuickNews from "@/components/QuickNews";
import CreateWebsiteSection from "@/components/CreateWebsiteSection";
import NewsFooter from "@/components/NewsFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <main>
        <FeaturedNews />
        <MainNews />
        <QuickNews />
        <CreateWebsiteSection />
      </main>
      <NewsFooter />
    </div>
  );
};

export default Index;
