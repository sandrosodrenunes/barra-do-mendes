import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navegação",
      links: [
        { name: "Notícias", href: "#noticias" },
        { name: "Oportunidades", href: "#oportunidades" },
        { name: "Memória Local", href: "#memoria" },
        { name: "Turismo", href: "#turismo" },
        { name: "Humor", href: "#humor" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Classificados Gratuitos", href: "#classificados" },
        { name: "Painel de Vagas", href: "#vagas" },
        { name: "Guia Comercial", href: "#comercio" },
        { name: "Agenda de Eventos", href: "#eventos" },
        { name: "Contribuir", href: "#contribuir" }
      ]
    },
    {
      title: "Comunidade",
      links: [
        { name: "Histórias dos Moradores", href: "#historias" },
        { name: "Receitas Tradicionais", href: "#receitas" },
        { name: "Fotos Antigas", href: "#fotos" },
        { name: "Memes da Cidade", href: "#memes" },
        { name: "Enquetes", href: "#enquetes" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BarradoMendes.com</h3>
                  <p className="text-white/80">O Portal da Cidade</p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                "Informação, história e oportunidades… tudo no mesmo endereço."
                Site aindo em construção, mas já com muito conteúdo para você explorar!
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-white/70" />
                  <span className="text-white/90">Barra do Mendes, Bahia - Brasil</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-white/70" />
                  <span className="text-white/90">contato@barradomendes.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-white/70" />
                  <span className="text-white/90">(74) 9999-0000</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Receba as Novidades da Cidade</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber as principais notícias, eventos e oportunidades de Barra do Mendes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:border-white/50"
              />
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-white/80 mb-4 md:mb-0">
              <span>© {currentYear} BarradoMendes.com - Feito com</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 fill-current" />
              <span>para nossa comunidade</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;