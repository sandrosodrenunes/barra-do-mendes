import { Calendar, Eye, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const NewsPreview = () => {
  const news = [
    {
      id: 1,
      title: "Nova Feira de Artesanato Movimenta o Centro da Cidade",
      excerpt: "Evento acontece todos os sábados na Praça Central e promete impulsionar a economia local com produtos regionais únicos.",
      date: "2024-12-15",
      category: "Eventos",
      views: 245,
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: "Obras de Calçamento da Rua Principal Começam na Próxima Semana",
      excerpt: "Prefeitura anuncia início das obras que vão melhorar a mobilidade urbana no centro comercial.",
      date: "2024-12-14",
      category: "Infraestrutura",
      views: 189,
      comments: 8,
      featured: false
    },
    {
      id: 3,
      title: "Festival de São João 2025: Programação e Novidades",
      excerpt: "Comissão organizadora divulga primeira parte da programação do maior evento cultural da cidade.",
      date: "2024-12-13",
      category: "Cultura",
      views: 320,
      comments: 24,
      featured: false
    },
    {
      id: 4,
      title: "Escola Municipal Conquista Prêmio Estadual de Educação",
      excerpt: "Projeto inovador desenvolvido pelos alunos recebe reconhecimento do governo estadual.",
      date: "2024-12-12",
      category: "Educação",
      views: 156,
      comments: 15,
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="section-padding" id="noticias">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero">
            Últimas Notícias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro de tudo que acontece em Barra do Mendes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {news.filter(item => item.featured).map((item) => (
              <Card key={item.id} className="card-feature mb-8 overflow-hidden group">
                <div className="h-48 bg-gradient-hero"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {item.comments}
                      </div>
                    </div>
                    <Button variant="ghost" className="group/btn">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other News */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Outras Notícias</h3>
            {news.filter(item => !item.featured).map((item) => (
              <Card key={item.id} className="card-feature group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {item.comments}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                      Ler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button className="w-full btn-outline-primary">
              Ver Todas as Notícias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
