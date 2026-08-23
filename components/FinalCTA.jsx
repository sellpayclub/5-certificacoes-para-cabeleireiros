import { ArrowRight, Award, Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="final-section">
      <div className="container final-grid">
        <div className="final-emblem" aria-hidden="true">
          <div className="emblem-ring">
            <Award size={64} strokeWidth={1.15} />
          </div>
          <span>
            <Check size={18} strokeWidth={2.5} />
          </span>
        </div>

        <div className="final-copy">
          <h2>
            INVISTA NA PROFISSIONAL QUE SUAS CLIENTES VEEM TODOS OS DIAS.
          </h2>

          <p>Você já escolheu trabalhar com beleza.</p>

          <p>Agora escolha continuar evoluindo.</p>

          <p>
            Tenha acesso às técnicas, às apostilas completas e às certificações
            que vão ajudar você a apresentar seu trabalho com ainda mais
            profissionalismo.
          </p>

          <a className="button button-light button-large" href="/#planos">
            QUERO MEU CERTIFICADO
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}