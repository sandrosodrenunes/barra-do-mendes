import { Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QuickNews = () => {
  const quickNews = [
    {
      id: 1,
      title: "Secretaria de Saúde anuncia novos horários para atendimento",
      category: "Saúde",
      time: "há 1 hora",
      isBreaking: false
    },
    {
      id: 2,
      title: "Escola municipal receberá equipamentos de informática",
      category: "Educação", 
      time: "há 3 horas",
      isBreaking: false
    },
    {
      id: 3,
      title: "URGENTE: Falta de energia afeta bairro São José",
      category: "Urgente",
      time: "há 30 min",
      isBreaking: true
    },
    {
      id: 4,
      title: "Posto de saúde realiza campanha de vacinação nesta semana",
      category: "Saúde",
      time: "há 5 horas",
      isBreaking: false
    },
    {
      id: 5,
      title: "Mercado do produtor funciona em novo horário aos sábados",
      category: "Economia",
      time: "há 7 horas",
      isBreaking: false
    },
    {
      id: 6,
      title: "Time local se classifica para semifinal do campeonato regional",
      category: "Esportes",
      time: "há 9 horas",
      isBreaking: false
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Notícias Rápidas</h2>
          <div className="h-0.5 bg-gradient-news flex-1 max-w-20"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickNews.map((news) => (
            <Card 
              key={news.id}
              className="p-4 cursor-pointer hover:bg-card-hover transition-colors border-l-4 border-l-primary/20 hover:border-l-primary"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  {news.isBreaking && (
                    <Badge variant="destructive" className="mb-2 text-xs font-bold px-2 py-1">
                      URGENTE
                    </Badge>
                  )}
                  
                  <h3 className="font-bold text-sm md:text-base mb-2 leading-snug hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-text-light">
                      <Clock size={12} />
                      <span className="text-xs">{news.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary font-bold hover:text-primary/80 transition-colors">
            Ver todas as notícias →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickNews;