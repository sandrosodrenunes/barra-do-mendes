import { ArrowLeft, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import politicaImage from "@/assets/vereadores.png";

const NoticiaPolitica = () => {
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
            <Badge className="mb-4 bg-news-primary text-white font-bold px-3 py-1">
              POLÍTICA
            </Badge>
            
            <h1 className="headline-main mb-4">
              Câmara Municipal solicita criação de pista de caminhada entre Barra do Mendes e Queimada do Mendes
            </h1>
            
            <div className="flex items-center gap-6 text-text-light mb-6">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="news-meta">HÁ 4 HORAS</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span className="news-meta">856 VISUALIZAÇÕES</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="news-meta">SANDRO JUNIOR</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={politicaImage} 
              alt="Sessão da Câmara Municipal de Barra do Mendes"
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
            <p className="text-sm text-text-muted mt-2">
              Câmara de Barra do Mendes
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              A Câmara Municipal de Barra do Mendes, através da Indicação nº 002/2025, protocolada no dia 26 de março de 2025,
              encaminhou ao prefeito Dr. Manoel Gabriel dos Santos a proposta de implantação de uma pista de caminhadas no 
              trecho da Rodovia BA-148, que liga o município ao povoado de Queimada do Mendes
            </p>

            <h2 className="headline-secondary mt-8 mb-4">A importância do projeto</h2>
            <p className="mb-4">
              De acordo com a justificativa apresentada, a obra tem como objetivo garantir maior 
              segurança aos pedestres que utilizam a rodovia para práticas de atividades físicas, 
              como caminhadas e corridas, ou mesmo para deslocamento diário entre os pontos.
            </p>

            <p className="mb-4">
              Atualmente, os moradores precisam compartilhar a via principal com os veículos, 
              o que aumenta consideravelmente o risco de acidentes. O problema se agrava durante o período noturno, 
              quando a visibilidade é reduzida, tornando a travessia ainda mais perigosa
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Segurança e qualidade de vida</h2>
            <p className="mb-4">
              A criação da pista de caminhada é vista como uma medida simples, mas de grande impacto social, 
              pois além de minimizar os riscos de acidentes, incentiva a prática de atividades físicas 
              e promove qualidade de vida à população.
            </p>
            <p className="mb-4">
              Segundo a proposição, o investimento trará benefícios diretos tanto para 
              os moradores da sede quanto para os que vivem em comunidades próximas, 
              que poderão contar com uma estrutura adequada para suas caminhadas
            </p>

             {/* <h2 className="headline-secondary mt-8 mb-4">Impactos esperados</h2>   
             <p className="mb-2">Com a medida, a expectativa é de:</p>        
            <ul className="list-disc pl-6 mb-6">
              <li>Maior adesão ao programa de parcelamento;</li>
              <li>Revitalização de praças</li>
              <li>Mais recursos disponíveis para investimentos em áreas essenciais, como saúde, educação e infraestrutura.</li>
            </ul> */}

            <h2 className="headline-secondary mt-8 mb-4">Encaminhamento</h2>
            <p className="mb-4">
              O pedido já foi formalmente encaminhado ao Poder Executivo Municipal para análise e providências 
              cabíveis. Agora, a expectativa é de que o prefeito e sua equipe avaliem a viabilidade do projeto e 
              iniciem os estudos técnicos necessários para a sua execução
            </p>

          </div>
        </article>
      </main>

      <NewsFooter />
    </div>
  );
};

export default NoticiaPolitica;