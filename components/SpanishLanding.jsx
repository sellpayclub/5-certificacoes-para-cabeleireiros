import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Check,
  CreditCard,
  Landmark,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";

const CREDIT_CARD_CHECKOUT_URL = "https://pay.kiwify.com/32cCRNt";
const SPEI_CHECKOUT_URL = "https://checkout.sellpay.com.br/c/42bk";

const certifications = [
  {
    number: "1",
    title: "Alisado Profesional",
    description:
      "Aprende los principales fundamentos para realizar un trabajo de alisado con mucho más conocimiento y seguridad.",
    certificate:
      "Manual Completo + Certificado de Finalización en Alisado Profesional",
    image:
      "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/36f0efa7-0415-425a-918b-c9934d8c5d8f.jpg",
  },
  {
    number: "2",
    title: "Colorimetría Profesional",
    description:
      "Entiende de verdad cómo funcionan los colores y ten más seguridad al momento de colorear, neutralizar y corregir tonos.",
    certificate:
      "Manual Completo + Certificado de Finalización en Colorimetría Profesional",
    image:
      "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b01a7a8f-2003-40b0-a380-f5dd39ab37f3.jpg",
  },
  {
    number: "3",
    title: "Reflejos Rubios Profesionales",
    description:
      "Perfecciona uno de los servicios más valorados dentro de los salones.",
    certificate:
      "Manual Completo + Certificado de Finalización en Reflejos Rubios Profesionales",
    image:
      "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/6ed32baa-a9bb-45d6-8466-5c3ad26342bb.jpg",
  },
  {
    number: "4",
    title: "Tratamientos y Terapia Capilar",
    description:
      "Aprende a identificar las necesidades del cabello y a ofrecer tratamientos más completos a tus clientas.",
    certificate:
      "Manual Completo + Certificado de Finalización en Tratamientos y Terapia Capilar",
    image:
      "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a15ea7a0-cd20-4f47-ad71-45bce0da3f7c.jpg",
  },
  {
    number: "5",
    title: "Corte Femenino Profesional",
    description:
      "Perfecciona tu técnica y aumenta tu seguridad al realizar los principales cortes femeninos.",
    certificate:
      "Manual Completo + Certificado de Finalización en Corte Femenino Profesional",
    image:
      "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7c6284f8-38bd-4991-9fbd-4ae3bdebb0ec.jpg",
  },
];

const certificateBenefits = [
  "Certificado profesional a tu nombre",
  "Certificado de finalización para cada especialidad",
  "Reconocimiento de tu capacitación profesional",
  "Comprobación de las formaciones finalizadas",
  "Certificados listos para imprimir",
  "Más profesionalismo para presentar a tus clientas",
];

const completeBenefits = [
  "Alisado Profesional",
  "Colorimetría Profesional",
  "Reflejos Rubios Profesionales",
  "Tratamientos y Terapia Capilar",
  "Corte Femenino Profesional",
  "5 manuales completos",
  "5 certificados de finalización",
];

const certificateRecipients = [
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/8966852b-b7f7-444a-ae51-42d63e5fe0b8.jpg",
    alt: "Cliente sonriendo mientras sostiene su certificado profesional en el salón",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ab45b6cd-69c8-4d21-9b6e-32c66ba3c803.jpg",
    alt: "Cliente mostrando sus certificados profesionales en su salón",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/47d8f3e2-ab0e-47e9-900a-d11a8ddb3d1c.jpg",
    alt: "Cliente sosteniendo el manual y el certificado de Reflejos Rubios Profesionales",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e5729728-b9cf-4635-afe4-e093a299b2fc.jpg",
    alt: "Cliente señalando sus certificados expuestos en la pared del salón",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a5393a38-56ef-43d5-9648-a982b3d49e04.jpg",
    alt: "Dos profesionales sonriendo con manual y certificado profesional",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/f923c3b1-8948-4cf6-93ee-f0f0e764be9b.jpg",
    alt: "Cliente mostrando certificados y manuales profesionales en su salón",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/0ccce1bf-246a-4c81-845d-f1041d076872.jpg",
    alt: "Cliente sonriendo con su manual profesional y certificados expuestos en el salón",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/50deda40-0262-40ad-bdaf-cf1f704df424.jpg",
    alt: "Cliente sosteniendo su manual y certificado profesional en el salón",
  },
];

function getCheckoutWithUtm(checkoutUrl) {
  if (typeof window === "undefined") {
    return checkoutUrl;
  }

  const checkout = new URL(checkoutUrl);
  const pageParams = new URLSearchParams(window.location.search);

  pageParams.forEach((value, key) => {
    if (key.toLowerCase().startsWith("utm_")) {
      checkout.searchParams.set(key, value);
    }
  });

  return checkout.toString();
}

export default function SpanishLanding() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    function updateTimer() {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);

      const difference = Math.max(0, midnight.getTime() - now.getTime());
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(
          2,
          "0"
        )}m ${String(seconds).padStart(2, "0")}s`
      );
    }

    updateTimer();
    const timer = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const continuousRecipients = [...certificateRecipients, ...certificateRecipients];

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#certificaciones">Certificaciones</a>
            <a href="#manuales">Manuales</a>
            <a href="#planes">Opciones</a>
          </nav>

          <a className="header-cta" href="#planes">
            QUIERO MI CERTIFICADO
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
          <div className="hero-decoration hero-decoration-two" aria-hidden="true" />

          <div className="hero-institute-brand" aria-label="IBC Instituto Belleza">
            <span className="academy-logo" aria-hidden="true">
              <span className="academy-logo-inner">
                <Award size={17} strokeWidth={1.55} />
                <b>IBC</b>
              </span>
            </span>
            <span className="academy-brand-copy">
              <strong>IBC Instituto Belleza</strong>
            </span>
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="spanish-hero-title">
                <span>Certificación <strong>profesional</strong></span>
                <span>para peluqueros</span>
                <span className="spanish-hero-highlight">5 en 1.</span>
              </h1>

              <p className="hero-lead">
                Recibe 5 manuales completos + 5 certificados a tu nombre por
                solo $51 MXN CADA UNO.
              </p>

              <div className="hero-benefits">
                <strong>Recibes:</strong>
                <ul>
                  {[
                    "Manual completo de estudio",
                    "Contenido paso a paso",
                    "Material para consultar siempre que lo necesites",
                    "Certificado de finalización",
                    "Acceso inmediato",
                  ].map((benefit) => (
                    <li key={benefit}>
                      <span className="check-icon" aria-hidden="true">
                        <Check size={15} strokeWidth={2.5} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a className="button button-primary button-large" href="#planes">
                ¡DE $987,60 POR $255 MXN HOY!
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-visual">
              <img
                className="hero-mockups-image"
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/cb3fde29-f925-4351-b9cd-9939ef56b8f5.jpg"
                alt="Combo con cinco manuales profesionales para estilistas"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="certifications-section" id="certificaciones">
          <div className="container">
            <div className="section-heading certifications-heading">
              <span className="section-kicker">Cinco especialidades</span>
              <h2>VE TODO LO QUE RECIBIRÁS:</h2>
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
                      alt={`Material de la certificación ${certification.title}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />

                    <strong className="certificate-included">
                      {certification.certificate}
                      <span className="certificate-old-price">
                        PRECIO ORIGINAL: <s>$197,52 MXN</s>
                      </span>
                    </strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="centered-cta">
              <a className="button button-primary button-large" href="#planes">
                QUIERO MI CERTIFICADO
              </a>
            </div>
          </div>
        </section>

        <section className="material-section" id="manuales">
          <div className="container">
            <div className="section-heading material-heading">
              <span className="section-kicker">
                Material para acompañar tu evolución
              </span>
              <h2>
                ADEMÁS DE LOS MANUALES, RECIBES CERTIFICADOS RECONOCIDOS A TU
                NOMBRE
              </h2>
            </div>

            <div className="material-grid">
              <div className="books-placeholder">
                <img
                  className="books-image"
                  src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d2f3ed2c-9e54-4c67-a868-c5231030d4b5.jpg"
                  alt="Cinco certificados profesionales para estilistas"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="material-copy">
                <p>
                  Cada especialidad incluye un{" "}
                  <strong>Certificado profesional a tu nombre.</strong>
                </p>

                <h3>Con tu certificado recibes:</h3>

                <ul>
                  {certificateBenefits.map((benefit) => (
                    <li key={benefit}>
                      <span aria-hidden="true">
                        <Check size={15} strokeWidth={2.5} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <p className="material-conclusion">
                  <strong>
                    Un verdadero material de consulta para tener siempre a tu
                    lado.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-[#f7ece7] py-[110px] max-[820px]:py-[82px] max-[560px]:py-[54px]"
          id="clases-practicas"
        >
          <div className="container">
            <div className="mx-auto max-w-[920px] text-center">
              <span className="section-kicker justify-center">
                Aprendizaje más allá del material
              </span>
              <h2 className="mb-0 mt-[14px] font-sans text-[clamp(34px,4.6vw,55px)] font-extrabold leading-[1.07] tracking-[-0.035em] text-[#35121d] max-[560px]:text-[clamp(27px,7.4vw,33px)] max-[560px]:leading-[1.16]">
                además de los manuales, recibirás clases PRÁCTICAS con profesores
                enseñándote paso a paso:
              </h2>
            </div>

            <div className="mx-auto mt-[52px] w-full max-w-[760px] overflow-hidden rounded-[22px] border border-[#bb955e8c] bg-[#35121d] p-[9px] shadow-[0_24px_52px_rgba(53,18,29,0.24)] max-[560px]:mt-[38px] max-[560px]:rounded-[18px] max-[560px]:p-[6px]">
              <video
                className="block max-h-[720px] w-full rounded-[14px] bg-[#35121d] object-contain max-[560px]:rounded-[12px]"
                src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/videos%20aulas.mp4"
                aria-label="Clases prácticas con profesores enseñando paso a paso"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </section>

        <section className="value-section" id="profesionalismo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">
                Profesionalismo que se puede ver
              </span>
              <h2>
                MÁS CONOCIMIENTO. MÁS PROFESIONALISMO. MÁS VALOR PARA TU
                TRABAJO.
              </h2>
            </div>

            <div className="value-grid value-grid-image-only">
              <div className="salon-placeholder">
                <img
                  className="salon-image"
                  src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9d21f7f8-a820-496a-83b0-1d70092e769f.jpg"
                  alt="Profesional en un salón mostrando certificados en la pared"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h3 className="value-closing">
              Valora tu profesión y muéstrales a tus clientas que están en manos
              de una profesional capacitada.
            </h3>
          </div>
        </section>

        <section className="social-section" id="certificadas">
          <div className="container">
            <div className="section-heading centered-heading social-heading">
              <span className="section-kicker">Certificaciones finalizadas</span>
              <h2>MIRA QUIÉN YA RECIBIÓ SU CERTIFICACIÓN</h2>
            </div>

            <div
              className="carousel-shell"
              aria-roledescription="carrusel"
              aria-label="Fotos de clientas con certificados"
            >
              <div className="carousel-viewport">
                <div className="carousel-track">
                  {continuousRecipients.map((recipient, index) => (
                    <div
                      className="carousel-slide"
                      key={`${recipient.src}-${index}`}
                      aria-hidden={index >= certificateRecipients.length}
                    >
                      <img
                        className="client-photo"
                        src={recipient.src}
                        alt={
                          index < certificateRecipients.length
                            ? recipient.alt
                            : ""
                        }
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

        <section className="offers-section" id="planes">
          <div className="container">
            <div className="section-heading centered-heading offers-heading">
              <span className="section-kicker">Comienza ahora</span>
            </div>

            <div className="offers-grid offers-grid-single">
              <div className="offer-highlight">
                <div className="offer-scarcity">
                  <span>
                    <Sparkles size={16} aria-hidden="true" />
                    Último día de descuento.
                  </span>
                  <strong>Termina en: {timeRemaining}</strong>
                </div>

                <article className="offer-card offer-card-featured">
                  <div className="offer-card-heading">
                    <span className="offer-option">
                      ¡FORMACIÓN COMPLETA — 5 CERTIFICACIONES!
                    </span>
                    <Award size={29} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <p>
                    Obtén acceso a las{" "}
                    <strong>5 especialidades profesionales.</strong>
                  </p>

                  <h3>Recibes:</h3>
                  <ul className="offer-benefits">
                    {completeBenefits.map((benefit) => (
                      <li key={benefit}>
                        <span aria-hidden="true">
                          <Check size={15} strokeWidth={2.6} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="featured-price">
                    <span>¡De $987,60 por $255 MXN!</span>
                    <div className="featured-price-value">
                      <small>FORMACIÓN COMPLETA</small>
                      <strong>$255 MXN</strong>
                    </div>
                  </div>

                  <button
                    className="button button-light button-full"
                    type="button"
                    onClick={() => setIsPaymentModalOpen(true)}
                  >
                    QUIERO MI CERTIFICADO
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="quienes-somos">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img
                className="about-image"
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e22cfbfd-b2dc-4da4-b64c-20024758e591.jpg"
                alt="Perfil de Instagram del Instituto Belleza Certificada"
                loading="lazy"
              />
            </div>

            <div className="about-copy">
              <span className="section-kicker">
                Instituto Belleza Certificada
              </span>
              <h2>Quiénes somos</h2>
              <p>
                El Instituto Belleza Certificada nació para ayudar a estilistas y
                profesionales de la belleza a perfeccionarse, valorar su trabajo
                y conquistar más reconocimiento en el salón.
              </p>
              <p>
                Ofrecemos manuales prácticos, contenidos objetivos y
                certificaciones de finalización para quienes desean aprender
                nuevas técnicas, actualizarse y mostrar a sus clientas que
                invierten en su propia profesión.
              </p>
              <p>
                Nuestro objetivo es simple: ayudarte a tener más conocimiento,
                más seguridad y más autoridad en el mercado de la belleza.
              </p>
            </div>
          </div>
        </section>

        <section className="why-section" id="por-que-tener-las-cinco">
          <div className="container why-grid">
            <div className="why-heading">
              <span className="section-kicker">Una formación más completa</span>
              <h2>¿POR QUÉ TENER LAS 5?</h2>
              <div className="why-mark" aria-hidden="true">
                <Scissors size={32} strokeWidth={1.5} />
              </div>
            </div>

            <div className="why-copy prose">
              <p>
                Porque una profesional completa puede atender muchas más
                necesidades dentro del salón.
              </p>

              <div className="service-sequence">
                <div>
                  <span aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  <p>
                    Hoy tu clienta puede querer un <strong>corte.</strong>
                  </p>
                </div>
                <div>
                  <span aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  <p>
                    Mañana, unos <strong>reflejos rubios.</strong>
                  </p>
                </div>
                <div>
                  <span aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  <p>
                    Después, un <strong>tratamiento.</strong>
                  </p>
                </div>
                <div>
                  <span aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  <p>
                    Después, una <strong>coloración.</strong>
                  </p>
                </div>
                <div>
                  <span aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  <p>
                    Después, un <strong>alisado.</strong>
                  </p>
                </div>
              </div>

              <p>
                Cuantas más técnicas domines,{" "}
                <strong>
                  más servicios podrás ofrecer y menos oportunidades tendrás que
                  dejar pasar.
                </strong>
              </p>

              <p>
                Y al finalizar todos los materiales, también podrás tener{" "}
                <strong>
                  5 certificados diferentes expuestos en tu espacio profesional.
                </strong>
              </p>

              <a className="button button-primary" href="#planes">
                QUIERO MI CERTIFICADO
              </a>
            </div>
          </div>
        </section>

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
                INVIERTE EN LA PROFESIONAL QUE TUS CLIENTAS VEN TODOS LOS DÍAS.
              </h2>

              <p>Ya elegiste trabajar con belleza.</p>
              <p>Ahora elige seguir evolucionando.</p>
              <p>
                Obtén acceso a las técnicas, a los manuales completos y a las
                certificaciones que te ayudarán a presentar tu trabajo con aún
                más profesionalismo.
              </p>

              <a className="button button-light button-large" href="#planes">
                QUIERO MI CERTIFICADO
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {isPaymentModalOpen && (
        <div
          className="payment-modal-backdrop"
          role="presentation"
          onMouseDown={() => setIsPaymentModalOpen(false)}
        >
          <section
            className="payment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="payment-modal-close"
              type="button"
              onClick={() => setIsPaymentModalOpen(false)}
              aria-label="Cerrar opciones de pago"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <span className="payment-modal-kicker">Pago seguro</span>
            <h2 id="payment-modal-title">Elige tu método de pago</h2>
            <p>Selecciona cómo deseas pagar tu formación.</p>

            <div className="payment-options">
              <a className="payment-option" href={CREDIT_CARD_CHECKOUT_URL}>
                <span className="payment-option-icon" aria-hidden="true">
                  <CreditCard size={24} strokeWidth={1.8} />
                </span>
                <span>
                  <strong>Tarjeta de crédito</strong>
                  <small>Paga de forma segura con tu tarjeta.</small>
                </span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>

              <a className="payment-option" href={SPEI_CHECKOUT_URL}>
                <span className="payment-option-icon" aria-hidden="true">
                  <Landmark size={24} strokeWidth={1.8} />
                </span>
                <span>
                  <strong>Pago por SPEI</strong>
                  <small>Realiza tu pago mediante transferencia SPEI.</small>
                </span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>

            <button
              className="payment-modal-cancel"
              type="button"
              onClick={() => setIsPaymentModalOpen(false)}
            >
              Cancelar
            </button>
          </section>
        </div>
      )}
    </>
  );
}