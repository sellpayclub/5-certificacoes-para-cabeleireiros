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

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <Award size={17} aria-hidden="true" />
            Formação para profissionais da beleza
          </span>

          <h1>
            Combo Cabeleireiro Profissional
            <br />
            <span className="hero-title-emphasis">5 em 1.</span>
          </h1>

          <p className="hero-lead">
            Aprenda novas técnicas, aperfeiçoe seus serviços e receba um{" "}
            <strong>certificado reconhecido</strong>
          </p>

          <div className="hero-benefits">
            <strong>Você recebe:</strong>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="check-icon" aria-hidden="true">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <a className="button button-primary button-large" href="/#planos">
            DE R$ 249,50 POR R$ 47,00 HOJE!
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