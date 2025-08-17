import { Monitor, Smartphone, Code, Zap, Award, Users, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import ImgFoto from "./../assets/meuRosto.png"

const CrieSeuSite = () => {
  const services = [
    {
      icon: <Monitor className="text-white" size={32} />,
      title: "Sites Institucionais",
      description: "Apresente sua empresa de forma profissional e impactante na web.",
      price: "A partir de R$ 1.500"
    },
    {
      icon: <Smartphone className="text-white" size={32} />,
      title: "E-commerce",
      description: "Venda online com segurança e facilidade. Loja virtual completa.",
      price: "A partir de R$ 2.500"
    },
    {
      icon: <Code className="text-white" size={32} />,
      title: "Sistemas Web",
      description: "Soluções personalizadas para automatizar seu negócio.",
      price: "Orçamento personalizado"
    },
    {
      icon: <Zap className="text-white" size={32} />,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão e campanhas de marketing.",
      price: "A partir de R$ 800"
    }
  ];

  const features = [
    "Design responsivo para todos os dispositivos",
    "Otimização para mecanismos de busca (SEO)",
    "Integração com redes sociais",
    "Painel administrativo intuitivo",
    "Certificado SSL incluído",
    "Suporte técnico por 3 meses"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-news-primary via-news-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Desenvolvedor Web Profissional
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Transforme Sua Presença Digital
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Mais de 5 anos criando sites que realmente convertem. Especialista em desenvolvimento web moderno, responsivo e otimizado para resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-news-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold">
                  <Code className="mr-2" size={20} />
                  Veja um Exemplo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                  <Phone className="mr-2" size={20} />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
                  <div className="bg-gradient-to-br from-white/20 to-white/5 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={ImgFoto} 
                      alt="Minha Foto" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Sandro Junior</h3>
                  <p className="text-white/80 mb-4">Desenvolvedor Full Stack</p>
                  <div className="flex justify-center gap-6 text-sm">
                    <div>
                      <div className="font-bold text-lg">10+</div>
                      <div className="text-white/80">Projetos</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">5+</div>
                      <div className="text-white/80">Anos</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">100%</div>
                      <div className="text-white/80">Satisfação</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-news-primary mb-4">
              Serviços Oferecidos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua presença digital, desde sites simples até sistemas complexos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="bg-gradient-to-br from-news-primary to-accent w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-news-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-news-primary font-bold text-lg">{service.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-news-primary mb-8">
                O que está incluído?
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-news-primary/5 to-accent/5 p-8 border-news-primary/20">
              <div className="text-center">
                <Award className="text-news-primary mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold text-news-primary mb-4">
                  Garantia de Qualidade
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Todos os projetos são entregues com garantia de funcionamento e suporte técnico incluído. Sua satisfação é nossa prioridade.
                </p>
                <Button className="bg-news-primary hover:bg-news-primary/90 text-white px-8">
                  Começar Projeto
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-news-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Entre em contato hoje mesmo e receba uma proposta personalizada para seu site.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <Mail className="mx-auto mb-4" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-white/80">contato@exemplo.com</p>
            </div>
            <div className="text-white">
              <Phone className="mx-auto mb-4" size={32} />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-white/80">(77) 99999-9999</p>
            </div>
            <div className="text-white">
              <MapPin className="mx-auto mb-4" size={32} />
              <h3 className="font-bold mb-2">Localização</h3>
              <p className="text-white/80">Barra do Mendes - BA</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-news-primary hover:bg-white/90 px-12 py-4 text-xl font-bold">
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </section>

      <NewsFooter />
    </div>
  );
};

export default CrieSeuSite;