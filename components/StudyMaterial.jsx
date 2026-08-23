import { BookOpen, Check, FileText } from "lucide-react";

const contents = [
  "Conteúdo organizado do básico ao profissional",
  "Explicações simples e objetivas",
  "Técnicas passo a passo",
  "Cuidados importantes",
  "Erros mais comuns",
  "Dicas profissionais",
  "Orientações para diferentes tipos de cabelo",
];

export default function StudyMaterial() {
  return (
    <section className="material-section" id="apostilas">
      <div className="container">
        <div className="section-heading material-heading">
          <span className="section-kicker">Material para acompanhar sua evolução</span>
          <h2>NÃO É APENAS UM CERTIFICADO.</h2>
          <h3>
            Você também recebe uma apostila completa para estudar e aperfeiçoar
            sua técnica.
          </h3>
        </div>

        <div className="material-grid">
          <div className="books-placeholder">
            <img
              className="books-image"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/74a66f8b-8fe6-486f-8422-170473112333.jpg"
              alt="Coleção de cinco apostilas profissionais para cabeleireiros"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="material-copy">
            <p>
              Cada especialização acompanha uma{" "}
              <strong>apostila profissional completa</strong>, desenvolvida
              para que você possa aprender no seu ritmo e consultar sempre que
              precisar.
            </p>

            <h3>Dentro do seu material você encontra:</h3>

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