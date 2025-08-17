import { Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import politicaImage from "@/assets/cameraDeVereadores.png";
import segurancaImage from "@/assets/seguranca-cotidiano.png";
import culturaImage from "@/assets/galeriaDosPrefeitos.png";

const MainNews = () => {
  const mainNews = [
    {
      id: 1,
      category: "Política",
      categoryColor: "bg-news-primary",
      title: "Rejeitados: A Câmara de Barra do Mendes rejeitou o Projeto de Lei do Executivo nº 002/2025",
      summary: "vereadores Adriana, Bastos, Matheus Fideles e Medrado têm projeto de parcelamento negado na Câmara",
      image: politicaImage,
      time: "há 4 horas",
      views: "856"
    },
    {
      id: 2,
      category: "Segurança",
      categoryColor: "bg-accent",
      title: "População aguarda projeto de governo de Dr. Néu para instalação de câmeras de segurança em Barra do Mendes",
      summary: "A proposta, destacada ainda durante a campanha eleitoral, tem como objetivo reforçar a segurança pública e oferecer mais tranquilidade às famílias.",
      image: segurancaImage,
      time: "há 6 horas", 
      views: "623"
    },
    {
      id: 3,
      category: "Cultura",
      categoryColor: "bg-orange-500",
      title: "Barra do Mendes inaugura Galeria dos Prefeitos",
      summary: "O espaço reúne fotografias de todos os ex-prefeitos do município.",
      image: culturaImage,
      time: "há 8 horas",
      views: "1.1k"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Principais Notícias</h2>
          <div className="h-0.5 bg-gradient-news flex-1 max-w-20"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mainNews.map((news) => (
            <Card 
              key={news.id} 
              className="overflow-hidden cursor-pointer card-hover border-0 shadow-card bg-card"
              onClick={() => {
                const routes = {
                  1: '/noticia-politica',
                  2: '/noticia-seguranca', 
                  3: '/noticia-cultura'
                };
                window.location.href = routes[news.id as keyof typeof routes];
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${news.categoryColor} text-white font-bold px-3 py-1`}
                >
                  {news.category.toUpperCase()}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="headline-secondary mb-3 hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="news-summary mb-4 line-clamp-3">
                  {news.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-text-light">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="news-meta">{news.time}</span>
                    </div>
                    <span className="news-meta">{news.views} views</span>
                  </div>
                  
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNews;