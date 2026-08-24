import { BookOpen, Check, FileText } from "lucide-react";

const contents = [
  "Certificado profissional em seu nome",
  "Certificado de conclusão para cada especialização",
  "Reconhecimento da sua capacitação profissional",
  "Comprovação das formações concluídas",
  "Certificados prontos para imprimir",
  "Mais profissionalismo para apresentar às suas clientes",
];

export default function StudyMaterial() {
  return (
    <section className="material-section" id="apostilas">
      <div className="container">
        <div className="section-heading material-heading">
          <span className="section-kicker">Material para acompanhar sua evolução</span>
          <h2>ALÉM DAS APOSTILAS, VOCÊ RECERÁ CERTIFICADOS RECONHECIDOS EM SEU NOME</h2>
        </div>

        <div className="material-grid">
          <div className="books-placeholder">
            <img
              className="books-image"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d2f3ed2c-9e54-4c67-a868-c5231030d4b5.jpg"
              alt="Cinco certificados profissionais de cabeleireiro"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="material-copy">
            <p>
              Cada especialização acompanha um{" "}
              <strong>Certificado profissional em seu Nome!</strong>
            </p>

            <h3>Com o seu certificado você recebe:</h3>

            <ul>
              {contents.map((content) => (
                <li key={content}>
                  <span aria-hidden="true">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  {content}
                </li>
              ))}
            </ul>

            <p className="material-conclusion">
              <strong>
                Um verdadeiro material de consulta para ter sempre ao seu lado.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}