import { Scissors, Sparkles } from "lucide-react";

const services = ["corte.", "mechas.", "tratamento.", "coloração.", "alisamento."];

export default function WhyAll() {
  return (
    <section className="why-section" id="por-que-ter-as-cinco">
      <div className="container why-grid">
        <div className="why-heading">
          <span className="section-kicker">Uma formação mais completa</span>
          <h2>POR QUE TER AS 5?</h2>
          <div className="why-mark" aria-hidden="true">
            <Scissors size={32} strokeWidth={1.5} />
          </div>
        </div>

        <div className="why-copy prose">
          <p>
            Porque uma profissional completa consegue atender muito mais
            necessidades dentro do salão.
          </p>

          <div className="service-sequence">
            {services.map((service, index) => (
              <div key={service}>
                <span aria-hidden="true">
                  <Sparkles size={14} />
                </span>
                <p>
                  {index === 0 && "Hoje sua cliente pode querer um "}
                  {index === 1 && "Amanhã, "}
                  {index === 2 && "Depois, "}
                  {index === 3 && "Depois, "}
                  {index === 4 && "Depois, "}
                  <strong>{service}</strong>
                </p>
              </div>
            ))}
          </div>

          <p>
            Quanto mais técnicas você domina,{" "}
            <strong>
              mais serviços pode oferecer e menos oportunidades precisa deixar
              passar.
            </strong>
          </p>

          <p>
            E ao concluir todos os materiais, você ainda poderá ter{" "}
            <strong>
              5 certificados diferentes expostos no seu espaço profissional.
            </strong>
          </p>

          <a className="button button-primary" href="/#planos">
            QUERO MEU CERTIFICADO
          </a>
        </div>
      </div>
    </section>
  );
}