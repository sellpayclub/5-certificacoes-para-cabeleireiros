import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Play,
} from "lucide-react";

const modules = [
  {
    id: "mechas",
    number: "Módulo 01",
    title: "MECHAS",
    lessons: [
      {
        title: "Introdução MECHAS",
        url: "https://youtu.be/OKG1slJ84xo",
        embed: "https://www.youtube.com/embed/OKG1slJ84xo",
      },
      {
        title: "Morena iluminada",
        url: "https://youtu.be/7kU4KqlM248",
        embed: "https://www.youtube.com/embed/7kU4KqlM248",
      },
      {
        title: "Power Blond",
        url: "https://youtu.be/0i-PWR-Miq8",
        embed: "https://www.youtube.com/embed/0i-PWR-Miq8",
      },
      {
        title: "linha, divisão e desfiados para mechas",
        url: "https://youtu.be/8H9bSDl0zKI",
        embed: "https://www.youtube.com/embed/8H9bSDl0zKI",
      },
      {
        title: "prática mechas",
        url: "https://youtu.be/dWhMzC7hCjw",
        embed: "https://www.youtube.com/embed/dWhMzC7hCjw",
      },
    ],
  },
  {
    id: "colorimetria",
    number: "Módulo 02",
    title: "COLORIMETRIA",
    lessons: [
      {
        title: "introdução",
        url: "https://youtu.be/WAtB5FIz7qA",
        embed: "https://www.youtube.com/embed/WAtB5FIz7qA",
      },
      {
        title: "Aula 2",
        url: "https://www.youtube.com/watch?v=xX6uC2ECdsI",
        embed: "https://www.youtube.com/embed/xX6uC2ECdsI",
      },
      {
        title: "PH do cabelo",
        url: "https://www.youtube.com/watch?v=an8x0kDg7I4&feature=youtu.be",
        embed: "https://www.youtube.com/embed/an8x0kDg7I4",
      },
      {
        title: "tonalização",
        url: "https://www.youtube.com/watch?v=7iFopCeCx3I",
        embed: "https://www.youtube.com/embed/7iFopCeCx3I",
      },
      {
        title: "descoloração",
        url: "https://www.youtube.com/watch?v=jua3q9lz2Nk&feature=youtu.be",
        embed: "https://www.youtube.com/embed/jua3q9lz2Nk",
      },
      {
        title: "cabelos brancos",
        url: "https://www.youtube.com/watch?v=h7X_bVA0vIU",
        embed: "https://www.youtube.com/embed/h7X_bVA0vIU",
      },
      {
        title: "cabelos brancos na pratica",
        url: "https://www.youtube.com/watch?v=AwpZ-JT3K3k",
        embed: "https://www.youtube.com/embed/AwpZ-JT3K3k",
      },
    ],
  },
];

export default function MembersArea() {
  return (
    <div className="members-page" id="top">
      <header className="members-header">
        <div className="members-container members-header-inner">
          <a className="members-brand" href="/" aria-label="Voltar para o início">
            <span className="members-brand-mark" aria-hidden="true">
              <GraduationCap size={20} strokeWidth={1.8} />
            </span>
            <span>
              <strong>5 Certificações</strong>
              <small>Área de membros</small>
            </span>
          </a>

          <a className="members-back-link" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            VOLTAR AO SITE
          </a>
        </div>
      </header>

      <main>
        <section className="members-hero">
          <div className="members-container">
            <span className="members-eyebrow">
              <GraduationCap size={17} aria-hidden="true" />
              Seu espaço de estudos
            </span>
            <h1>ÁREA DE MEMBROS</h1>
            <p>
              Acesse suas aulas e materiais para continuar aperfeiçoando suas
              técnicas profissionais.
            </p>
          </div>
        </section>

        <section className="members-notice-section" aria-label="Aviso importante">
          <div className="members-container">
            <div className="members-notice">
              <BookOpen size={24} aria-hidden="true" />
              <div>
                <strong>Aviso importante</strong>
                <p>
                  estamos atualizando o curso. Em breve iremos te enviar todas
                  as apostilas, favor aguardar!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="members-content">
          <div className="members-container">
            <div className="members-section-heading">
              <span>Conteúdo disponível</span>
              <h2>SUAS AULAS</h2>
              <p>
                Selecione uma aula para assistir diretamente aqui ou abrir o
                vídeo no YouTube.
              </p>
            </div>

            {modules.map((module) => (
              <section className="course-module" id={module.id} key={module.id}>
                <div className="module-heading">
                  <div>
                    <span>{module.number}</span>
                    <h2>{module.title}</h2>
                  </div>
                  <p>{module.lessons.length} aulas disponíveis</p>
                </div>

                <div className="lesson-grid">
                  {module.lessons.map((lesson, index) => (
                    <article className="lesson-item" key={lesson.url}>
                      <div className="lesson-video">
                        <iframe
                          src={lesson.embed}
                          title={`${module.title} — Aula ${index + 1}: ${lesson.title}`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      <div className="lesson-details">
                        <span>Aula {index + 1}</span>
                        <h3>{lesson.title}</h3>
                        <a href={lesson.url} target="_blank" rel="noreferrer">
                          ASSISTIR NO YOUTUBE
                          <ExternalLink size={15} aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section className="ebooks-area" id="ebooks">
              <div className="ebooks-icon" aria-hidden="true">
                <BookOpen size={29} strokeWidth={1.5} />
              </div>
              <div>
                <span>Materiais complementares</span>
                <h2>E-BOOKS E APOSTILAS</h2>
                <p>
                  estamos atualizando o curso. Em breve iremos te enviar todas
                  as apostilas, favor aguardar!
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="members-footer">
          <div className="members-container">
            <div>
              <span>5 Certificações para Cabeleireiros</span>
              <p>Continue seus estudos no seu ritmo.</p>
            </div>
            <a className="members-top-link" href="#top">
              <Play size={15} fill="currentColor" aria-hidden="true" />
              VOLTAR AO TOPO
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}