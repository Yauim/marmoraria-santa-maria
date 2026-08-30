import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { ParallaxEngine } from "@/components/parallax-engine";
import { BackToTopButton } from "@/components/back-to-top-button";

const WHATSAPP_URL =
  "https://wa.me/5527900000000?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Marmoraria%20Santa%20Maria%20e%20gostaria%20de%20um%20or%C3%A7amento.";

const materials = [
  {
    number: "01",
    name: "Granito",
    description:
      "Resistência para suportar calor, riscos e uso intenso sem abrir mão do brilho natural.",
    use: "Cozinhas, áreas externas e pisos de alto tráfego",
  },
  {
    number: "02",
    name: "Mármore",
    description:
      "Veios marcantes e acabamento elegante para ambientes que pedem presença e sofisticação.",
    use: "Banheiros, halls e revestimentos decorativos",
  },
  {
    number: "03",
    name: "Quartzo",
    description:
      "Superfície uniforme, não porosa e prática para uma rotina com pouca manutenção.",
    use: "Cozinhas intensas e ambientes contemporâneos",
  },
  {
    number: "04",
    name: "Quartzito",
    description:
      "A estética expressiva do mármore com alta dureza e ótima resistência ao desgaste.",
    use: "Bancadas, áreas externas e projetos de alto padrão",
  },
];

export default function Home() {
  return (
    <>
      <div id="topo" className="top-anchor" aria-hidden="true" />
      <ParallaxEngine />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <SiteHeader whatsappUrl={WHATSAPP_URL} />

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title" data-parallax-container>
          <div
            className="hero-media parallax-layer"
            data-parallax
            data-parallax-speed="0.28"
            data-parallax-limit="150"
            aria-hidden="true"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div
            className="marble-line marble-line-one parallax-layer"
            data-parallax
            data-parallax-speed="0.12"
            data-parallax-limit="80"
            aria-hidden="true"
          />
          <div
            className="marble-line marble-line-two parallax-layer"
            data-parallax
            data-parallax-speed="0.2"
            data-parallax-limit="110"
            aria-hidden="true"
          />

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                Marmoraria Santa Maria <span /> Desde 2011
              </p>
              <h1 id="hero-title">
                Pedra natural.<br /><em>Precisão humana.</em>
              </h1>
              <p className="hero-description">
                Mármore, granito, quartzo e quartzito transformados em peças
                únicas, do primeiro corte à instalação final.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contato">
                  Solicitar orçamento <ArrowRight aria-hidden="true" />
                </a>
                <a className="text-link text-link-light" href="#pedras">
                  Conhecer materiais <ArrowDownRight aria-hidden="true" />
                </a>
              </div>
              <div className="scroll-cue" aria-hidden="true">
                <span /> Role para sentir a profundidade
              </div>
            </div>

            <div className="hero-proof" aria-label="Diferenciais da empresa">
              <div><strong>15</strong><span>anos de experiência</span></div>
              <div><strong>04</strong><span>materiais premium</span></div>
              <div><strong>ES</strong><span>atendimento regional</span></div>
            </div>
          </div>
        </section>

        <section className="intro-strip" aria-label="Serviços oferecidos">
          <div className="container intro-strip-inner">
            <span><Ruler aria-hidden="true" /> Medição precisa</span>
            <span><Gem aria-hidden="true" /> Seleção cuidadosa</span>
            <span><Sparkles aria-hidden="true" /> Acabamento premium</span>
            <span><Check aria-hidden="true" /> Instalação completa</span>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid">
            <div className="about-visual reveal-block" data-parallax-container>
              <div className="parallax-frame about-image-frame">
                <div
                  className="about-image parallax-layer"
                  data-parallax
                  data-parallax-speed="0.2"
                  data-parallax-limit="130"
                  role="img"
                  aria-label="Oficina especializada no corte e acabamento de pedras"
                />
              </div>
              <div className="about-seal" aria-hidden="true">
                <span>SM</span><small>Excelência em pedra</small>
              </div>
            </div>

            <div className="about-copy reveal-block">
              <p className="eyebrow">Quem somos</p>
              <h2>Uma história construída bloco a bloco.</h2>
              <p className="lead">
                Há 15 anos, transformamos pedras naturais e superfícies nobres
                em ambientes feitos para durar.
              </p>
              <p>
                Atendemos clientes em todo o Espírito Santo com fabricação e
                instalação de peças em mármore, granito, quartzo e quartzito.
                Cada projeto recebe corte preciso, acabamento cuidadoso e
                compromisso com o prazo combinado.
              </p>
              <p>
                Como nenhum bloco é igual ao outro, estudamos seus veios e tons
                antes de cada corte para valorizar o desenho natural da pedra.
              </p>
              <div className="quality-list" aria-label="Compromissos de qualidade">
                <span><Check aria-hidden="true" /> Precisão de corte</span>
                <span><Check aria-hidden="true" /> Cuidado no acabamento</span>
                <span><Check aria-hidden="true" /> Prazo respeitado</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pedras" className="section materials-section">
          <div className="container">
            <div className="section-heading reveal-block">
              <div>
                <p className="eyebrow">Nosso material</p>
                <h2>Quatro pedras.<br />Quatro personalidades.</h2>
              </div>
              <p>
                A escolha certa combina estética, resistência e rotina. Nós
                ajudamos você a encontrar a superfície ideal para cada ambiente.
              </p>
            </div>

            <div className="materials-showcase reveal-block" data-parallax-container>
              <div
                className="materials-image parallax-layer"
                data-parallax
                data-parallax-speed="0.22"
                data-parallax-limit="135"
                role="img"
                aria-label="Amostras de granito, mármore, quartzo e quartzito"
              />
              <div className="materials-caption">
                <span>Curadoria de materiais</span>
                <p>Texturas, tons e veios selecionados para o seu projeto.</p>
              </div>
            </div>

            <div className="materials-grid">
              {materials.map((material) => (
                <article className="material-card reveal-block" key={material.name}>
                  <span className="material-number">{material.number}</span>
                  <h3>{material.name}</h3>
                  <p>{material.description}</p>
                  <div className="material-use">
                    <span>Indicado para</span>
                    <strong>{material.use}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div
            className="contact-texture parallax-layer"
            data-parallax
            data-parallax-speed="0.16"
            data-parallax-limit="90"
            aria-hidden="true"
          />
          <div className="container contact-grid">
            <div className="contact-copy reveal-block">
              <p className="eyebrow eyebrow-light">Vamos conversar</p>
              <h2>Seu projeto começa com uma boa escolha.</h2>
              <p>
                Envie fotos do ambiente e as medidas aproximadas. Assim,
                conseguimos preparar um orçamento mais ágil e adequado ao que
                você precisa.
              </p>
              <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Chamar no WhatsApp <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <address className="contact-card reveal-block">
              <p>Atendimento</p>
              <a href="tel:+5527900000000">
                <Phone aria-hidden="true" />
                <span><small>Telefone</small>(27) 90000-0000</span>
              </a>
              <a href="mailto:contato@marmorariasantamaria.com.br">
                <Mail aria-hidden="true" />
                <span><small>E-mail</small>contato@marmorariasantamaria.com.br</span>
              </a>
              <div>
                <MapPin aria-hidden="true" />
                <span><small>Região atendida</small>Colatina e Espírito Santo</span>
              </div>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#topo" aria-label="Voltar ao início">
            <span className="brand-mark">SM</span>
            <span className="brand-copy"><strong>Santa Maria</strong><small>Marmoraria</small></span>
          </a>
          <p>© 2026 Marmoraria Santa Maria. Todos os direitos reservados.</p>
          <BackToTopButton />
        </div>
      </footer>
    </>
  );
}
