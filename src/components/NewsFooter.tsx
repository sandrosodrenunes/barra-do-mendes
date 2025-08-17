import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const NewsFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Barra do Mendes</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Portal de notícias comprometido em levar informação de qualidade 
              para a população de Barra do Mendes e região. Cobertura local 
              com credibilidade e transparência.
            </p>
            <div className="flex gap-4">
              <Facebook size={24} className="hover:text-accent cursor-pointer transition-colors" />
              <Instagram size={24} className="hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={24} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Política</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cultura</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Esportes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Economia</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(74) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>redacao@barradomendes.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Barra do Mendes, BA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Portal Barra do Mendes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;