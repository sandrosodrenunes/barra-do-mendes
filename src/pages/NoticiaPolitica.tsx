import { ArrowLeft, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import politicaImage from "@/assets/vereadoresBastosMedradoMatheusAdriana.png";

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
              Rejeitados: vereadores Adriana, Bastos, Matheus Fideles e Medrado têm projeto de parcelamento negado na Câmara
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
              Vereadores: Adriana, Bastos, Matheus Fideles e Medrado. Foto: Instagram
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              A proposta buscava incluir todos os débitos vencidos até a data da 
              publicação da lei no programa de parcelamento, mas não obteve aprovação.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Projeto Rejeitado</h2>
            <p className="mb-4">
              Barra do Mendes (BA), 2025 – A Câmara Municipal recebeu uma proposta de alteração no Projeto de Lei 
              do Executivo nº 002/2025, que trata sobre o parcelamento de débitos municipais.
              A mudança busca dar nova redação ao parágrafo 2º do Artigo 1º, ampliando o alcance da lei
            </p>

            <p className="mb-4">
              Pela proposta, ficaria estabelecido que todos os débitos vencidos até a data da publicação da lei poderão 
              ser incluídos nos parcelamentos, desde que a competência de cobrança pertença aos órgãos citados no caput do mesmo artigo.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">O que muda com a alteração?</h2>
              Na prática, a alteração beneficia contribuintes que possuem pendências antigas com o município, 
              permitindo que mais dívidas sejam regularizadas dentro do programa de parcelamento. Isso representa
               uma oportunidade tanto para os cidadãos, que terão condições facilitadas para quitar suas obrigações,
                quanto para a Prefeitura, que poderá aumentar a arrecadação e reforçar os cofres públicos.
            <p className="mb-4">

            </p>

             <h2 className="headline-secondary mt-8 mb-4">Impactos esperados</h2>   
             <p className="mb-2">Com a medida, a expectativa é de:</p>        
            <ul className="list-disc pl-6 mb-6">
              <li>Maior adesão ao programa de parcelamento;</li>
              <li>Revitalização de praças</li>
              <li>Mais recursos disponíveis para investimentos em áreas essenciais, como saúde, educação e infraestrutura.</li>
            </ul>

            <h2 className="headline-secondary mt-8 mb-4">Câmara</h2>
            <p className="mb-4">
              Com a decisão, o Projeto de Lei nº 002/2025 foi oficialmente rejeitado pelo plenário da Câmara, 
              frustrando a expectativa dos autores e daqueles que viam na proposta uma oportunidade de ampliar
              o alcance do programa de parcelamento. A negativa reforça o posicionamento da maioria dos vereadores 
              em não ampliar os débitos incluídos na medida.
            </p>

          </div>
        </article>
      </main>

      <NewsFooter />
    </div>
  );
};

export default NoticiaPolitica;