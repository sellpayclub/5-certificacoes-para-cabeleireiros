import { Award } from "lucide-react";

const certifications = [
  {
    number: "1",
    title: "Alisamento Profissional",
    description:
      "Aprenda os principais fundamentos para realizar um trabalho de alisamento com muito mais conhecimento e segurança.",
    certificate:
      "Apostila Completa + Certificado de Conclusão em Alisamento Profissional",
    oldPrice: "R$ 49,90",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7d727155-6047-4aa7-93e6-9ba399326c39.jpg",
  },
  {
    number: "2",
    title: "Colorimetria Profissional",
    description:
      "Entenda de verdade como as cores funcionam e tenha mais segurança na hora de colorir, neutralizar e corrigir tons.",
    certificate:
      "Apostila Completa + Certificado de Conclusão em Colorimetria Profissional",
    oldPrice: "R$ 49,90",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d1639d13-de1f-4821-83e6-643911a5be6e.jpg",
  },
  {
    number: "3",
    title: "Mechas & Loiros Profissionais",
    description:
      "Aperfeiçoe um dos serviços mais valorizados dentro dos salões.",
    certificate:
      "Apostila Completa + Certificado de Conclusão em Mechas & Loiros Profissionais",
    oldPrice: "R$ 49,90",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7d30ee9f-cb92-40bc-adbf-a89019ec78f6.jpg",
  },
  {
    number: "4",
    title: "Tratamentos e Terapia Capilar",
    description:
      "Aprenda a identificar as necessidades dos fios e oferecer tratamentos mais completos às suas clientes.",
    certificate:
      "Apostila Completa + Certificado de Conclusão em Tratamentos e Terapia Capilar",
    oldPrice: "R$ 49,90",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e842a03d-3528-46a9-9c5a-a7c1fe3105e6.jpg",
  },
  {
    number: "5",
    title: "Corte Feminino Profissional",
    description:
      "Aperfeiçoe sua técnica e aumente sua segurança na realização dos principais cortes femininos.",
    certificate:
      "Apostila Completa + Certificado de Conclusão em Corte Feminino Profissional",
    oldPrice: "R$ 49,90",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/98d2a280-695d-40c1-bcc3-1871fc773a36.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="certifications-section" id="certificacoes">
      <div className="container">
        <div className="section-heading certifications-heading">
          <span className="section-kicker">Cinco especializações</span>
          <h2>VEJA TUDO QUE VOCÊ VAI RECEBER:</h2>
        </div>

        <div className="certification-stack">
          {certifications.map((certification, index) => (
            <article
              className={`certification-item ${
                index % 2 === 1 ? "certification-item-alternate" : ""
              }`}
              key={certification.title}
            >
              <div className="certification-number" aria-hidden="true">
                {certification.number.padStart(2, "0")}
              </div>

              <div className="certification-intro">
                <div className="certification-title-line">
                  <span>{certification.number}.</span>
                  <h3>{certification.title}</h3>
                </div>
                <p>{certification.description}</p>

                <img
                  className="certification-product-image"
                  src={certification.image}
                  alt={`Material da certificação ${certification.title}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <strong className="certificate-included">
                  {certification.certificate}
                  <span className="certificate-old-price">
                    PREÇO ORIGINAL: <s>{certification.oldPrice}</s>
                  </span>
                </strong>
              </div>
            </article>
          ))}
        </div>

        <div className="centered-cta">
          <a className="button button-primary button-large" href="/#planos">
            QUERO MEU CERTIFICADO
          </a>
        </div>
      </div>
    </section>
  );
}