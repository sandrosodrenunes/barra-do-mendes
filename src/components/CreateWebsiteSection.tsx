import { Monitor, Smartphone, Palette, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CreateWebsiteSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crie-seu-site");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-news-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden cursor-pointer hover:bg-white transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1" onClick={handleClick}>
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-news-primary mb-4">
                Crie Seu Site Profissional
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforme sua ideia em realidade digital. Desenvolvimento de sites modernos, responsivos e otimizados para seu negócio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-news-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="text-news-primary" size={28} />
                </div>
                <h3 className="font-semibold text-news-primary mb-2">Design Moderno</h3>
                <p className="text-sm text-muted-foreground">Layouts atuais e profissionais</p>
              </div>
              
              <div className="text-center">
                <div className="bg-news-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-news-primary" size={28} />
                </div>
                <h3 className="font-semibold text-news-primary mb-2">Responsivo</h3>
                <p className="text-sm text-muted-foreground">Funciona em todos os dispositivos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-news-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-news-primary" size={28} />
                </div>
                <h3 className="font-semibold text-news-primary mb-2">Personalizado</h3>
                <p className="text-sm text-muted-foreground">Desenvolvido para sua marca</p>
              </div>
              
              <div className="text-center">
                <div className="bg-news-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-news-primary" size={28} />
                </div>
                <h3 className="font-semibold text-news-primary mb-2">Tecnologia</h3>
                <p className="text-sm text-muted-foreground">Código limpo e otimizado</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-news-primary hover:bg-news-primary/90 text-white px-8 py-3 text-lg font-semibold">
                Saiba Mais →
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CreateWebsiteSection;