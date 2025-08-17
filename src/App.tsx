import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NoticiaDestaque from "./pages/NoticiaDestaque";
import NoticiaPolitica from "./pages/NoticiaPolitica";
import NoticiaSeguranca from "./pages/NoticiaSeguranca";
import NoticiaCultura from "./pages/NoticiaCultura";
import CrieSeuSite from "./pages/CrieSeuSite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/noticia-destaque" element={<NoticiaDestaque />} />
          <Route path="/noticia-politica" element={<NoticiaPolitica />} />
          <Route path="/noticia-seguranca" element={<NoticiaSeguranca />} />
          <Route path="/noticia-cultura" element={<NoticiaCultura />} />
          <Route path="/crie-seu-site" element={<CrieSeuSite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
