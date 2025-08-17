import { ArrowLeft, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import culturaImage from "@/assets/galeriaDosPrefeitos.png";

const NoticiaCultura = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-primary hover:text-primary/80"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar ao início
        </Button>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4 bg-orange-500 text-white font-bold px-3 py-1">
              CULTURA
            </Badge>
            
            <h1 className="headline-main mb-4">
              Barra do Mendes inaugura Setor da Cultura e Galeria dos Prefeitos
            </h1>
            
            <div className="flex items-center gap-6 text-text-light mb-6">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="news-meta">HÁ 8 HORAS</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span className="news-meta">1.1K VISUALIZAÇÕES</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="news-meta">CULTURA</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={culturaImage} 
              alt="Festival de São João de Barra do Mendes"
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
            <p className="text-sm text-text-muted mt-2">
              Galeria dos Prefeitos
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              Barra do Mendes (BA), 14 de agosto de 2025 – Em uma noite marcada pela valorização da
               história e da identidade local, a Prefeitura de Barra do Mendes inaugurou o Setor da 
               Cultura e a tão aguardada Galeria dos Prefeitos. O espaço reúne fotografias de todos os
              ex-prefeitos do município, além do atual gestor, em uma sala dedicada à preservação da memória política e cultural da cidade.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Resgate histórico</h2>
            <p className="mb-4">
              A Galeria dos Prefeitos surge como um marco simbólico de reconhecimento às lideranças que já 
              passaram pela administração municipal. Cada fotografia representa um capítulo da trajetória
              política de Barra do Mendes, reforçando a importância de manter viva a história do município.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Momento de celebração</h2>
            <p className="mb-4">
              Durante a cerimônia de inauguração, autoridades locais, servidores públicos e moradores celebraram o avanço.
               O ambiente decorado com as fotografias dos prefeitos emocionou muitos presentes, que destacaram a importância 
               de preservar a memória coletiva.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Significado para a comunidade</h2>
            <p className="mb-4">
              A criação do Setor da Cultura e da Galeria dos Prefeitos é vista como um passo 
              importante não apenas para relembrar o passado, mas também para projetar o futuro 
              da cidade. É um espaço que une história, política e cultura, oferecendo à população 
              um lugar de referência e pertencimento.
            </p>
            
          </div>
        </article>
      </main>

      <NewsFooter />
    </div>
  );
};

export default NoticiaCultura;