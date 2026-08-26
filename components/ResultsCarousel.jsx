const resultsMedia = [
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/bc948b41-002d-43bc-bab2-10238641f109.png",
    alt: "Resultado de mechas em cabelo ondulado castanho com tons dourados",
  },
  {
    type: "video",
    src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(1).mp4",
    alt: "Vídeo de resultado de corte e cabelo",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/f26cbf80-0516-415b-a239-d7026b887521.jpg",
    alt: "Resultado de mechas em cabelo castanho com luzes douradas",
  },
  {
    type: "video",
    src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(2).mp4",
    alt: "Vídeo de resultado de corte e cabelo",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9edd94a4-2e04-40f2-815d-4d7017f36714.jpg",
    alt: "Resultado de mechas em cabelo longo castanho com iluminação dourada",
  },
  {
    type: "video",
    src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(3).mp4",
    alt: "Vídeo de resultado de corte e cabelo",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d7167ec1-a38b-4a44-be59-f5da650a2ac1.jpg",
    alt: "Resultado de mechas loiras em cabelo ondulado",
  },
  {
    type: "video",
    src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest.mp4",
    alt: "Vídeo de resultado de corte e cabelo",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9fc62ed2-8f15-4b7f-8932-29384906f700.jpg",
    alt: "Resultado de mechas em cabelo cacheado com tons dourados",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/08014d50-ac6e-4f0e-8f7e-956a147663e0.jpg",
    alt: "Resultado de loiro longo com ondas",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/533f8778-4b25-4d59-9d27-18354548cb31.jpg",
    alt: "Resultado de loiro longo com mechas iluminadas",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9952f680-f369-46a1-844d-39d1f4fc9bf4.jpg",
    alt: "Resultado de loiro com raiz esfumada e ondas",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a3b5b071-cecf-479e-b33d-b21ee0f6f7f7.jpg",
    alt: "Resultado de cabelo loiro dourado em ondas",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/320c3bcf-5ac8-4595-af5d-f40527e965da.jpg",
    alt: "Resultado de cabelo loiro claro com ondas",
  },
  {
    type: "image",
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1807396d-d8b3-47f4-ac07-3305b50afc33.jpg",
    alt: "Resultado de cabelo loiro platinado com ondas",
  },
];

export default function ResultsCarousel() {
  const continuousResults = [...resultsMedia, ...resultsMedia];

  return (
    <section className="results-section" id="resultados">
      <div className="container">
        <div className="section-heading centered-heading results-heading">
          <span className="section-kicker">Inspiração para sua evolução</span>
          <h2>VEJA RESULTADOS DAS NOSSAS ALUNAS:</h2>
        </div>

        <div
          className="results-carousel"
          aria-roledescription="carrossel"
          aria-label="Resultados de mechas e loiros das alunas"
        >
          <div className="results-track">
            {continuousResults.map((media, index) => (
              <div
                className="results-slide"
                key={`${media.src}-${index}`}
                aria-hidden={index >= resultsMedia.length}
              >
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    aria-label={
                      index < resultsMedia.length ? media.alt : undefined
                    }
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={index < resultsMedia.length ? media.alt : ""}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}