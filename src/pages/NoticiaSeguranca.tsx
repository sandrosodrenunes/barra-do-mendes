import { ArrowLeft, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import segurancaImage from "@/assets/cameraDeSeguranca.png";

const NoticiaSeguranca = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-primary hover:text-primary/80"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar ao início
        </Button>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4 bg-accent text-white font-bold px-3 py-1">
              SEGURANÇA
            </Badge>
            
            <h1 className="headline-main mb-4">
              População aguarda projeto de governo de Dr. Néu para instalação de câmeras de segurança em Barra do Mendes
            </h1>
            
            <div className="flex items-center gap-6 text-text-light mb-6">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="news-meta">HÁ 6 HORAS</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span className="news-meta">623 VISUALIZAÇÕES</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="news-meta">Sandro Junior</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={segurancaImage} 
              alt="Operação policial em Barra do Mendes"
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
            <p className="text-sm text-text-muted mt-2">
              Segurança
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              Barra do Mendes (BA) – A população está na expectativa pela implantação do projeto de 
              governo anunciado pelo prefeito Dr. Néu, que prevê a instalação de um sistema de câmeras 
              de monitoramento em pontos estratégicos da cidade.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              A proposta, destacada ainda durante a campanha eleitoral, tem como objetivo 
              reforçar a segurança pública e oferecer mais tranquilidade às famílias. As 
              câmeras devem ser instaladas em locais de grande circulação, como praças, 
              avenidas principais e entradas da cidade.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Promessa de campanha</h2>
            <p className="mb-4">
              O projeto foi apresentado como um dos compromissos de governo do prefeito Dr. Néu, que ressaltou a importância de modernizar Barra do Mendes com tecnologia a serviço da segurança.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Expectativa popular</h2>
            <p className="mb-4">
              Entre os moradores, cresce a ansiedade para que a promessa saia do papel e se torne realidade.
              Muitos acreditam que o monitoramento por câmeras pode ajudar a prevenir delitos e apoiar a atuação da polícia no município.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Modus operandi</h2>
            <p className="mb-4">
              Conforme as investigações, o grupo agia principalmente durante o dia, quando os 
              moradores estavam no trabalho. Eles escolhiam residências em ruas mais afastadas 
              e com menor movimento de pessoas.
              “É um projeto que traz esperança. Barra do Mendes precisa de mais segurança, e a gente espera que agora aconteça”, disse um morador.
            </p>

            <p className="mb-4">
              "Eles estudavam a rotina das vítimas por alguns dias antes de agir. Sempre 
              escolhiam casas onde tinham certeza de que não havia ninguém", detalhou o 
              delegado Fernando Almeida.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Próximos passos</h2>
            <p className="mb-4">
              Ainda não há prazo definido para a execução, mas a expectativa é que a Prefeitura inicie em breve os estudos técnicos 
              para viabilizar o sistema de monitoramento.
            </p>
            
          </div>
        </article>
      </main>

      <NewsFooter />
    </div>
  );
};

export default NoticiaSeguranca;