export default function PlatformPreview() {
  return (
    <section className="platform-preview-section" id="plataforma">
      <div className="container">
        <div className="section-heading centered-heading platform-preview-heading">
          <span className="section-kicker">Conheça sua experiência de estudos</span>
          <h2>Veja a Plataforma por Dentro:</h2>
        </div>

        <div className="platform-video-wrap">
          <iframe
            className="platform-video"
            src="https://play.tynk.ai/p/c638ca9b-4a95-476a-8cab-daec2368f9ec"
            title="Veja a Plataforma por Dentro"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="platform-access">
          acesso pelo celular, computador&nbsp; ou tablet.
        </p>
      </div>
    </section>
  );
}