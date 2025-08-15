import { ArrowDown, Heart, Users, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/barra-do-mendes-hero.png";
import heroImageLogo from '@/assets/logo500pxBranco.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/60 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        
          </h1> */}
          <img src={heroImageLogo} alt="BarradoMendes Logo" className="mx-auto mb-6 w-32 md:w-48 lg:w-64 animate-fade-in delay-100" />
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 animate-fade-in delay-200">
            O Portal que Respira a Cidade
          </p>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in delay-300">
            Site aindo em construção, mas já com muito conteúdo para você explorar!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in delay-500">
            <Button className="btn-hero">
              Explorar o Portal
            </Button>
            <Button variant="outline" className="btn-outline-primary text-white border-white hover:bg-white hover:text-primary">
              Contribuir com Conteúdo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">1.5k+</span>
              </div>
              <p className="text-sm opacity-80">Moradores Conectados</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">200+</span>
              </div>
              <p className="text-sm opacity-80">Histórias Compartilhadas</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-sm opacity-80">Eventos Mensais</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-highlight/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/30 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float delay-500"></div>
    </section>
  );
};

export default Hero;