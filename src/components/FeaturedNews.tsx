import { Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/prefeitura.png";

const FeaturedNews = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black/60 to-black/40 cursor-pointer" onClick={() => window.location.href = '/noticia-destaque'}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-accent text-white font-bold px-3 py-1">
            DESTAQUE PRINCIPAL
          </Badge>
          
          <h1 className="headline-main text-white mb-4 leading-tight">
            Revolução tecnológica: por que Barra do Mendes precisa agir agora
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
            A tecnologia não é mais luxo, é necessidade. — entenda por quê
          </p>
          
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="news-meta">HÁ 2 HORAS</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={16} />
              <span className="news-meta">1.2K VISUALIZAÇÕES</span>
            </div>
            <span className="news-meta">POR REDAÇÃO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;