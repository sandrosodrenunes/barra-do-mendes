import { ArrowLeft, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import heroImage from "@/assets/barradomendesTI.png";

const NoticiaDestaque = () => {
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
            <Badge variant="secondary" className="mb-4 bg-accent text-white font-bold px-3 py-1">
              DESTAQUE PRINCIPAL
            </Badge>
            
            <h1 className="headline-main mb-4">
              Barra do Mendes está atrasada e precisa urgentemente correr atrás dessa revolução tecnológica — entenda por quê
            </h1>
            
            <div className="flex items-center gap-6 text-text-light mb-6">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="news-meta">HÁ 2 HORAS</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span className="news-meta">1.2K VISUALIZAÇÕES</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="news-meta">REDAÇÃO</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={heroImage} 
              alt="Obras de pavimentação em Barra do Mendes"
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
            <p className="text-sm text-text-muted mt-2">
              Ruas dos bairros Centro - Foto: Internet
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-text-muted">
              O mundo mudou — e mudou rápido. Enquanto cidades em todo o Brasil avançam para se tornarem mais 
              inteligentes e conectadas, Barra do Mendes corre o sério risco de ficar para trás.
              A tecnologia não é mais luxo, é necessidade. E, se quisermos garantir um futuro próspero 
              para a nossa população, especialmente para os jovens, precisamos agir agora.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Investimento </h2>
            <p className="mb-4">
              A criação de uma Secretaria Municipal de Ciência e Tecnologia é o passo decisivo para recolocar o 
              município no caminho certo e abrir as portas para o programa A Carta de Governo Federal, 
              que incentiva o desenvolvimento de cidades inteligentes em todo o país.
            </p>

            <p className="mb-4">
              “Eu vejo muitos jovens daqui indo embora porque não encontram oportunidades.
               Se tivéssemos mais cursos e projetos de tecnologia, eles poderiam ficar e ajudar a transformar a nossa cidade.”
            </p>
            <p className="mb-2">
              Relatam professores e moradores de Barra do Mendes
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Futuro</h2>
            <p className="mb-4">
              Vivemos uma era em que oportunidades aparecem e desaparecem em questão de segundos. 
              O mercado de trabalho exige cada vez mais profissionais ligados à tecnologia, inovação e 
              criatividade.Sem capacitação, nossos jovens perdem espaço — e com isso, a cidade perde também.
            </p>
            
            <h2 className="headline-secondary mt-8 mb-4">Com essa secretaria, Barra do Mendes poderá:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Formar jovens capacitados em programação, robótica, inteligência artificial e empreendedorismo digital.</li>
              <li>Atrair investimentos e empresas que geram emprego e renda.</li>
              <li>Modernizar os serviços públicos em saúde, educação e segurança.</li>
              <li>Conectar o município a redes e projetos nacionais de inovação.</li>
            </ul>

            <h2 className="headline-secondary mt-8 mb-4">Transformação</h2>
            <p className="mb-4">
              Transformar Barra do Mendes em uma cidade inteligente não é apenas uma questão de status: é sobre qualidade de vida. 
              É sobre ruas mais seguras, escolas equipadas, gestão pública eficiente e novas oportunidades para que os jovens possam 
              crescer sem precisar deixar a sua terra.
            </p>

            <p className="mb-4">
              A primeira etapa contemplará o bairro Centro, com previsão de conclusão em 2 meses. 
              Em seguida, as equipes se deslocarão para o bairro São José, onde permanecerão pelos 
              4 meses restantes do cronograma.
            </p>

            <h2 className="headline-secondary mt-8 mb-4">Impacto na comunidade</h2>
            <p className="mb-4">
              Se não corrermos atrás agora, o futuro vai embora junto com nossas oportunidades.
              Mas, com visão, planejamento e ação imediata, Barra do Mendes pode surpreender e se tornar uma referência regional em inovação e desenvolvimento.
            </p>
          </div>
        </article>
      </main>

      <NewsFooter />
    </div>
  );
};

export default NoticiaDestaque;