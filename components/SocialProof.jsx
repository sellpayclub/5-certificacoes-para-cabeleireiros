const slides = [
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/8966852b-b7f7-444a-ae51-42d63e5fe0b8.jpg",
    alt: "Cliente sorrindo enquanto segura seu certificado de Colorimetria Profissional no salão",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ab45b6cd-69c8-4d21-9b6e-32c66ba3c803.jpg",
    alt: "Cliente exibindo seus certificados profissionais em seu salão",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/47d8f3e2-ab0e-47e9-900a-d11a8ddb3d1c.jpg",
    alt: "Cliente segurando a apostila e o certificado de Mechas & Loiros Profissionais",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e5729728-b9cf-4635-afe4-e093a299b2fc.jpg",
    alt: "Cliente apontando para seus certificados expostos na parede do salão",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a5393a38-56ef-43d5-9648-a982b3d49e04.jpg",
    alt: "Duas profissionais sorrindo com apostila e certificado de Tratamentos e Terapia Capilar",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/f923c3b1-8948-4cf6-93ee-f0f0e764be9b.jpg",
    alt: "Cliente exibindo certificado e apostilas profissionais em seu salão",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/0ccce1bf-246a-4c81-845d-f1041d076872.jpg",
    alt: "Cliente sorrindo com sua apostila profissional e certificados expostos no salão",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/50deda40-0262-40ad-bdaf-cf1f704df424.jpg",
    alt: "Cliente segurando sua apostila e certificado profissional no salão",
  },
];

export default function SocialProof() {
  const continuousSlides = [...slides, ...slides];

  return (
    <section className="social-section" id="certificadas">
      <div className="container">
        <div className="section-heading centered-heading social-heading">
          <span className="section-kicker">Certificações concluídas</span>
          <h2>VEJA QUEM JÁ RECEBEU SUA CERTIFICAÇÃO</h2>
        </div>

        <div
          className="carousel-shell"
          aria-roledescription="carrossel"
          aria-label="Fotos de clientes com certificados"
        >
          <div className="carousel-viewport">
            <div className="carousel-track">
              {continuousSlides.map((slide, index) => (
                <div
                  className="carousel-slide"
                  key={`${slide.src}-${index}`}
                  aria-hidden={index >= slides.length}
                >
                  <img
                    className="client-photo"
                    src={slide.src}
                    alt={index < slides.length ? slide.alt : ""}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}