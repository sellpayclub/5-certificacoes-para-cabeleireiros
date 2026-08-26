import { ArrowRight, Check, Award } from "lucide-react";

const benefits = [
  "Apostila completa de estudo",
  "Conteúdo passo a passo",
  "Material para consultar sempre que precisar",
  "Certificado de conclusão",
  "Acesso imediato",
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
      <div className="hero-decoration hero-decoration-two" aria-hidden="true" />

      <div className="hero-institute-brand" aria-label="IBC Instituto Beleza">
        <span className="academy-logo" aria-hidden="true">
          <span className="academy-logo-inner">
            <Award size={17} strokeWidth={1.55} />
            <b>IBC</b>
          </span>
        </span>
        <span className="academy-brand-copy">
          <strong>IBC Instituto Beleza</strong>
        </span>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title-portuguese">
            <span className="hero-title-subject">
              Domine as <strong className="hero-number">5</strong> Principais Áreas de Cabeleireiro por Apenas{" "}
              <strong className="hero-number">R$ 19,90</strong>
            </span>
            <span className="hero-title-emphasis">
              Guias Completo do ZERO ao Avançado!
            </span>
          </h1>

          <p className="hero-lead">
            Receba <strong className="hero-number">5</strong> apostilas completas +{" "}
            <strong className="hero-number">5</strong> certificados no seu nome por Apenas{" "}
            <strong className="hero-number">R$ 3,98 CADA.</strong>
          </p>

          <div className="hero-mobile-product-image">
            <img
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/cb3fde29-f925-4351-b9cd-9939ef56b8f5.jpg"
              alt="Combo com cinco apostilas profissionais para cabeleireiros"
              referrerPolicy="no-referrer"
            />
          </div>


          <a className="button button-primary button-large" href="/#planos">
            DE R$ 249,50 POR R$ 19,90 HOJE!
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-visual">
          <img
            className="hero-mockups-image"
            src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/cb3fde29-f925-4351-b9cd-9939ef56b8f5.jpg"
            alt="Combo com cinco apostilas profissionais para cabeleireiros"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}