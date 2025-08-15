import { Clock, Users, MapPin, Smile, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import newsIcon from "@/assets/news-icon.jpg";
import opportunitiesIcon from "@/assets/opportunities-icon.jpg";
import cultureIcon from "@/assets/culture-icon.jpg";
import tourismIcon from "@/assets/tourism-icon.jpg";
import humorIcon from "@/assets/humor-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      id: "noticias",
      title: "Notícias e Atualidades",
      description: "Cobertura completa dos eventos locais, mudanças na cidade e a voz do povo barradense.",
      icon: newsIcon,
      highlights: [
        "Eventos locais em tempo real",
        "Opinião dos moradores",
        "Atualizações sobre obras e serviços"
      ],
      color: "primary"
    },
    {
      id: "oportunidades",
      title: "Guia de Oportunidades",
      description: "Seu centro de classificados, vagas de emprego, serviços e agenda de eventos da cidade.",
      icon: opportunitiesIcon,
      highlights: [
        "Classificados gratuitos",
        "Painel de vagas",
        "Guia comercial completo"
      ],
      color: "secondary"
    },
    {
      id: "memoria",
      title: "Memória e Cultura Local",
      description: "Preserve e reviva a história de Barra do Mendes através de fotos, histórias e tradições.",
      icon: cultureIcon,
      highlights: [
        "Linha do tempo da cidade",
        "Histórias dos moradores",
        "Receitas e tradições"
      ],
      color: "accent"
    },
    {
      id: "turismo",
      title: "Turismo e Lazer",
      description: "Descubra os melhores lugares, sabores e experiências que nossa cidade oferece.",
      icon: tourismIcon,
      highlights: [
        "Roteiros de passeios",
        "Mapa interativo",
        "Avaliações da comunidade"
      ],
      color: "highlight"
    },
    {
      id: "humor",
      title: "Toque de Humor",
      description: "O lado divertido de Barra do Mendes com memes, enquetes e situações engraçadas do dia a dia.",
      icon: humorIcon,
      highlights: [
        "Coluna 'Só em Barra do Mendes'",
        "Memes da comunidade",
        "Enquetes divertidas"
      ],
      color: "primary"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-hero">
            Tudo que Você Precisa em Um Só Lugar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            BarradoMendes.com é mais que um portal de notícias - é o coração digital da nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id}
              className={`card-feature hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2' : ''
              } ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gradient-hero">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-outline-primary">
                  Explorar Seção
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-section max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-sunset">
              Por que BarradoMendes.com?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Comunidade Conectada
                </h4>
                <p className="text-muted-foreground">
                  Todos podem participar e contribuir com conteúdo, criando uma verdadeira rede social local.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-secondary" />
                  Referência Local
                </h4>
                <p className="text-muted-foreground">
                  O "Google de Barra do Mendes" - tudo que você precisa saber sobre nossa cidade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-accent" />
                  Fomento Local
                </h4>
                <p className="text-muted-foreground">
                  Valoriza o comércio, história e cultura local, gerando oportunidades para todos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-highlight" />
                  Sempre Atualizado
                </h4>
                <p className="text-muted-foreground">
                  Conteúdo permanente e novidades diárias para manter você sempre informado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;