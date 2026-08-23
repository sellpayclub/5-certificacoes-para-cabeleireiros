export default function AboutUs() {
  return (
    <section className="about-section" id="quem-somos">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            className="about-image"
            src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e22cfbfd-b2dc-4da4-b64c-20024758e591.jpg"
            alt="Perfil do Instagram do Instituto Beleza Certificada"
            loading="lazy"
          />
        </div>

        <div className="about-copy">
          <span className="section-kicker">Instituto Beleza Certificada</span>
          <h2>Quem somos nós</h2>
          <p>
            O Instituto Beleza Certificada nasceu para ajudar cabeleireiras e
            profissionais da beleza a se aperfeiçoarem, valorizarem seu trabalho
            e conquistarem mais reconhecimento no salão.
          </p>
          <p>
            Oferecemos apostilas práticas, conteúdos objetivos e certificações
            de conclusão para quem deseja aprender novas técnicas, se atualizar
            e mostrar às clientes que investe na própria profissão.
          </p>
          <p>
            Nosso objetivo é simples: ajudar você a ter mais conhecimento, mais
            segurança e mais autoridade no mercado da beleza.
          </p>
        </div>
      </div>
    </section>
  );
}