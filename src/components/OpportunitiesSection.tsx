import { Briefcase, ShoppingBag, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const OpportunitiesSection = () => {
  const jobListings = [
    {
      id: 1,
      title: "Vendedor(a) - Loja de Roupas",
      company: "Moda Bahiana",
      location: "Centro",
      type: "Integral",
      posted: "2 dias atrás",
      salary: "R$ 1.320 + comissões"
    },
    {
      id: 2,
      title: "Ajudante de Pedreiro",
      company: "Construções Silva",
      location: "Bairro Novo",
      type: "Bico",
      posted: "1 dia atrás",
      salary: "R$ 120/dia"
    },
    {
      id: 3,
      title: "Cozinheira Experiente",
      company: "Restaurante Tempero Mineiro",
      location: "Centro",
      type: "Integral",
      posted: "4 horas atrás",
      salary: "R$ 1.500"
    }
  ];

  const classifieds = [
    {
      id: 1,
      title: "Vendo Moto Honda CG 160 2020",
      price: "R$ 12.500",
      category: "Veículos",
      posted: "3 horas atrás",
      seller: "João Silva"
    },
    {
      id: 2,
      title: "Geladeira Consul Frost Free 300L",
      price: "R$ 850",
      category: "Eletrodomésticos",
      posted: "1 dia atrás",
      seller: "Maria Santos"
    },
    {
      id: 3,
      title: "Casa 3 Quartos - Aluguel",
      price: "R$ 600/mês",
      category: "Imóveis",
      posted: "2 dias atrás",
      seller: "Imobiliária Central"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Festival de Quadrilhas Juninas",
      date: "20 de Janeiro",
      time: "19:00",
      location: "Praça Central",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Torneio de Futsal - Categoria Livre",
      date: "25 de Janeiro",
      time: "15:00",
      location: "Ginásio Municipal",
      category: "Esporte"
    },
    {
      id: 3,
      title: "Feira de Produtos Orgânicos",
      date: "Todo Sábado",
      time: "06:00 - 12:00",
      location: "Mercado Municipal",
      category: "Comercial"
    }
  ];

  return (
    <section className="section-padding bg-muted/30" id="oportunidades">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero">
            Oportunidades e Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sua central de oportunidades, classificados e eventos em Barra do Mendes
          </p>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Vagas
            </TabsTrigger>
            <TabsTrigger value="classifieds" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Classificados
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Eventos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobListings.map((job) => (
                <Card key={job.id} className="card-feature group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        job.type === 'Integral' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {job.type}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div className="font-medium">{job.company}</div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-secondary">{job.salary}</span>
                      <Button size="sm" className="btn-outline-primary text-xs">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="btn-hero">
                Ver Todas as Vagas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="classifieds" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classifieds.map((item) => (
                <Card key={item.id} className="card-feature group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-highlight/10 text-highlight rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.posted}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription>
                      Vendido por: {item.seller}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-accent">{item.price}</span>
                      <Button size="sm" className="btn-outline-primary text-xs">
                        Contatar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="btn-hero">
                Ver Todos os Classificados
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="card-feature group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                        {event.category}
                      </span>
                      <div className="text-xs font-medium text-primary">{event.date}</div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full btn-outline-primary text-xs">
                      Mais Informações
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="btn-hero">
                Ver Agenda Completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OpportunitiesSection;