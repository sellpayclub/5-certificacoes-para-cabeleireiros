

export default function ValueSection() {
  return (
    <section className="value-section" id="profissionalismo">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="section-kicker">Profissionalismo que pode ser visto</span>
          <h2>
            MAIS CONHECIMENTO. MAIS PROFISSIONALISMO. MAIS VALOR PARA O SEU
            TRABALHO.
          </h2>
        </div>

        <div className="value-grid value-grid-image-only">
          <div className="salon-placeholder">
            <img
              className="salon-image"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9d21f7f8-a820-496a-83b0-1d70092e769f.jpg"
              alt="Profissional em um salão exibindo certificados na parede"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <h3 className="value-closing">
          Valorize sua profissão e mostre para suas clientes que elas estão nas
          mãos de uma profissional capacitada.
        </h3>
      </div>
    </section>
  );
}