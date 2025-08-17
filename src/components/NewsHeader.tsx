import { Calendar, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cultura from "../pages/NoticiaCultura.tsx";


const NewsHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-gradient-header text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar com data */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-white/20">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="capitalize">{currentDate}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Temperatura: 28°C</span>
            <span>|</span>
            <span>Últimas notícias</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                Barra do Mendes
              </h1>
              <p className="text-sm opacity-90">Portal de Notícias</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors font-medium">
              Início
            </a>
            <a href="noticia-politica" className="hover:text-accent transition-colors font-medium">
              Política
            </a>
            <a href="noticia-seguraca" className="hover:text-accent transition-colors font-medium">
              Segurança
            </a>
            <a href="noticia-cultura" className="hover:text-accent transition-colors font-medium">
              Cultura
            </a>
            <a href="#" className="hover:text-accent transition-colors font-medium">
              Contato
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Search size={20} />
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Início
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Política
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Segurança
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Cultura
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewsHeader;