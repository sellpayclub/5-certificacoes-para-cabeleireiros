import { ArrowRight, Award, Check, Palette } from "lucide-react";

const COLORIMETRIA_CHECKOUT_URL = "https://pay.kiwify.com.br/fA56E4G";
const COMBO_CHECKOUT_URL = "https://pay.kiwify.com.br/Q7d2LSL";

const learningPoints = [
  "qual tom usar;",
  "como neutralizar uma cor;",
  "como matizar;",
  "como entender o fundo de clareamento;",
  "como evitar manchas;",
  "como corrigir um resultado indesejado;",
  "como fazer loiros mais bonitos e profissionais.",
];

const audiencePoints = [
  "trabalha como cabeleireira;",
  "quer aprender colorimetria com mais segurança;",
  "sente medo de errar em mechas e loiros;",
  "quer entender melhor matização e neutralização;",
  "quer oferecer serviços mais valorizados;",
  "quer ter apostilas para estudar e consultar;",
  "quer receber certificados no seu nome;",
  "quer mostrar mais profissionalismo para suas clientes.",
];

const planOneItems = [
  "Apostila de Colorimetria Profissional",
  "Apostila de Mechas & Loiros",
  "Certificado em Colorimetria Profissional",
  "Certificado em Mechas & Loiros",
  "Acesso imediato",
];

const planTwoItems = [
  "Colorimetria Profissional",
  "Mechas & Loiros",
  "Alisamento Profissional",
  "Tratamentos e Terapia Capilar",
  "Corte Feminino Profissional",
  "5 apostilas completas",
  "5 certificados no seu nome",
];

const resultsMedia = [
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/bc948b41-002d-43bc-bab2-10238641f109.png", alt: "Resultado de mechas em cabelo ondulado castanho com tons dourados" },
  { type: "video", src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(1).mp4", alt: "Vídeo de resultado de corte e cabelo" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/f26cbf80-0516-415b-a239-d7026b887521.jpg", alt: "Resultado de mechas em cabelo castanho com luzes douradas" },
  { type: "video", src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(2).mp4", alt: "Vídeo de resultado de corte e cabelo" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9edd94a4-2e04-40f2-815d-4d7017f36714.jpg", alt: "Resultado de mechas em cabelo longo castanho com iluminação dourada" },
  { type: "video", src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest%20(3).mp4", alt: "Vídeo de resultado de corte e cabelo" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d7167ec1-a38b-4a44-be59-f5da650a2ac1.jpg", alt: "Resultado de mechas loiras em cabelo ondulado" },
  { type: "video", src: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/Pinterest.mp4", alt: "Vídeo de resultado de corte e cabelo" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9fc62ed2-8f15-4b7f-8932-29384906f700.jpg", alt: "Resultado de mechas em cabelo cacheado com tons dourados" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/08014d50-ac6e-4f0e-8f7e-956a147663e0.jpg", alt: "Resultado de loiro longo com ondas" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/533f8778-4b25-4d59-9d27-18354548cb31.jpg", alt: "Resultado de loiro longo com mechas iluminadas" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/9952f680-f369-46a1-844d-39d1f4fc9bf4.jpg", alt: "Resultado de loiro com raiz esfumada e ondas" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a3b5b071-cecf-479e-b33d-b21ee0f6f7f7.jpg", alt: "Resultado de cabelo loiro dourado em ondas" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/320c3bcf-5ac8-4595-af5d-f40527e965da.jpg", alt: "Resultado de cabelo loiro claro com ondas" },
  { type: "image", src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1807396d-d8b3-47f4-ac07-3305b50afc33.jpg", alt: "Resultado de cabelo loiro platinado com ondas" },
];

function CheckList({ items, className = "" }) {
  return (
    <ul className={`color-list ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">
            <Check size={16} strokeWidth={2.7} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ColorimetryLanding() {
  return (
    <div className="color-page">
      <header className="color-header">
        <div className="color-container color-header-inner">
          <a className="color-brand" href="#inicio" aria-label="Ir para o início">
            <span className="color-brand-mark" aria-hidden="true">
              <Palette size={21} strokeWidth={1.8} />
            </span>
            <span>
              <strong>Color & Loiros</strong>
              <small>Formação Profissional</small>
            </span>
          </a>

          <a className="color-header-cta" href="#planos">
            ESCOLHA SEU PLANO
          </a>
        </div>
      </header>

      <main>
        <section className="color-hero" id="inicio">
          <div className="color-hero-orb color-hero-orb-one" aria-hidden="true" />
          <div className="color-hero-orb color-hero-orb-two" aria-hidden="true" />

          <div className="color-container color-hero-grid">
            <div className="color-hero-copy">
              <div className="color-ibc-brand" aria-label="IBC Instituto Beleza">
                <span className="color-ibc-mark" aria-hidden="true">
                  <Award size={14} strokeWidth={1.55} />
                  <b>IBC</b>
                </span>
                <strong>IBC Instituto Beleza</strong>
              </div>

              <h1>Aprenda Colorimetria e Mechas & Loiros sem medo de errar.</h1>

              <p className="color-hero-highlight">
                Receba 2 apostilas completas + Aula PRÁTICA.
                <br />
                <strong>(certificado em seu nome incluso)</strong>
              </p>

              <p className="color-hero-description">
                ganhar mais segurança no salão e oferecer serviços de cor, mechas e loiros com muito mais confiança.
              </p>

              <a className="color-button color-button-primary" href="#planos">
                QUERO COLORIMETRIA + MECHAS
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="color-hero-products">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d1639d13-de1f-4821-83e6-643911a5be6e.jpg"
                alt="Apostila de Colorimetria Profissional"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7d30ee9f-cb92-40bc-adbf-a89019ec78f6.jpg"
                alt="Apostila de Mechas & Loiros Profissionais"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="color-problem-section">
          <div className="color-container color-problem-grid">
            <div>
              <span className="color-kicker">Mais confiança em cada atendimento</span>
              <h2>A cor certa valoriza seu trabalho. A cor errada pode custar caro.</h2>
            </div>

            <div className="color-problem-copy">
              <p>
                Quem trabalha com cabelo sabe: colorimetria e mechas são serviços muito valorizados, mas também são áreas que dão medo.
              </p>

              <div className="color-fears">
                <span>Medo de manchar.</span>
                <span>Medo de errar o tom.</span>
                <span>Medo de deixar o cabelo alaranjado.</span>
                <span>Medo de não conseguir corrigir.</span>
                <span>Medo da cliente não gostar do resultado.</span>
              </div>

              <p>
                E é exatamente por isso que uma profissional que entende de cor, loiros e mechas se destaca muito mais dentro do salão.
              </p>

              <p>
                Com esse material, você vai estudar os fundamentos da colorimetria e das mechas de forma simples, prática e direta, para atender com mais segurança e oferecer serviços com maior valor agregado.
              </p>
            </div>
          </div>
        </section>

        <section className="color-learning-section">
          <div className="color-container color-learning-grid">
            <div className="color-learning-title">
              <span className="color-kicker">Estudo prático e direto</span>
              <h2>Com esse material você vai aprender:</h2>
            </div>

            <div>
              <CheckList items={learningPoints} />
              <p className="color-more">e MUITO MAIS!.</p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#f7efe6] py-[110px] max-[820px]:py-[82px] max-[560px]:py-[62px]"
          id="aulas-praticas"
        >
          <div className="color-container">
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="m-0 font-sans text-[clamp(34px,4.4vw,53px)] font-extrabold leading-[1.08] tracking-[-0.043em] text-[#183d42] max-[560px]:text-[clamp(28px,7.4vw,34px)] max-[560px]:leading-[1.15]">
                além da apostila, você receberá aulas PRÁTICAS com professores te ensinando passo a passo:
              </h2>
            </div>

            <div className="mx-auto mt-[52px] w-full max-w-[760px] overflow-hidden rounded-[20px] border border-[#d06f5061] bg-[#183d42] p-[9px] shadow-[0_22px_45px_rgba(24,61,66,0.18)] max-[560px]:mt-[38px] max-[560px]:rounded-[14px] max-[560px]:p-[6px]">
              <video
                className="block max-h-[720px] w-full rounded-[12px] bg-[#183d42] object-contain max-[560px]:rounded-[9px]"
                src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/videos%20aulas.mp4"
                aria-label="Aulas práticas com professores ensinando passo a passo"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </section>

        <section className="color-results-section">
          <div className="color-container">
            <div className="color-centered-heading">
              <span className="color-kicker">Resultados reais</span>
              <h2>Veja resultados das nossas alunas:</h2>
            </div>

            <div
              className="color-results-carousel"
              aria-roledescription="carrossel"
              aria-label="Resultados de mechas e loiros das alunas"
            >
              <div className="color-results-track">
                {[...resultsMedia, ...resultsMedia].map((media, index) => (
                  <div
                    className="color-results-slide"
                    key={`${media.src}-${index}`}
                    aria-hidden={index >= resultsMedia.length}
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        aria-label={index < resultsMedia.length ? media.alt : undefined}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={media.src}
                        alt={index < resultsMedia.length ? media.alt : ""}
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="color-audience-section">
          <div className="color-container color-audience-grid">
            <div>
              <span className="color-kicker">Feito para a sua evolução</span>
              <h2>Para quem é esse material?</h2>
              <p>Esse material é para você que:</p>
            </div>

            <CheckList items={audiencePoints} className="color-audience-list" />
          </div>
        </section>

        <section className="color-receive-section" id="receber">
          <div className="color-container">
            <div className="color-centered-heading">
              <span className="color-kicker">Seu material de estudo</span>
              <h2>Você recebe 2 apostilas completas + Curso online.</h2>
            </div>

            <div className="color-asset-frame color-book-frame">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/3dad7a37-9605-4dd9-a5f5-4af03032424d.jpg"
                alt="Apostilas de Colorimetria Profissional e Mechas & Loiros"
              />
            </div>

            <div className="color-certificates-content">
              <div className="color-centered-heading">
                <span className="color-kicker">Certificação profissional</span>
                <h2>E também recebe 2 certificados no seu nome</h2>
              </div>

              <div className="color-asset-frame color-certificate-frame">
                <img
                  src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/fa118c09-7d6a-4042-b957-f9da8a5afec9.jpg"
                  alt="Certificados de Colorimetria Profissional e Mechas & Loiros"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="color-plans-section" id="planos">
          <div className="color-container">
            <div className="color-centered-heading">
              <span className="color-kicker">Sua escolha começa aqui</span>
              <h2>Escolha seu plano</h2>
            </div>

            <div className="color-plans-grid">
              <article className="color-plan-card">
                <span className="color-plan-label">Plano 1 — Colorimetria + Mechas</span>
                <h3>Ideal para quem quer aprender e se aperfeiçoar nas duas áreas mais procuradas quando o assunto é cor e loiros.</h3>

                <p className="color-plan-subtitle">Você recebe:</p>
                <CheckList items={planOneItems} />

                <div className="color-price">
                  <span>R$ 29,90</span>
                </div>

                <a
                  className="color-button color-button-outline"
                  href={COLORIMETRIA_CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  QUERO COLORIMETRIA + MECHAS
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </article>

              <article className="color-plan-card color-plan-featured">
                <span className="color-plan-badge">Plano 2 — Mais Vantajoso</span>
                <h3>Combo Cabeleireiro Profissional 5 em 1</h3>
                <p>
                  Por apenas R$ 20 a mais, você recebe mais 3 apostilas e mais 3 certificados.
                </p>

                <p className="color-plan-subtitle">Você recebe:</p>
                <CheckList items={planTwoItems} />

                <div className="color-price">
                  <span>R$ 49,90</span>
                  <small>Menos de R$ 10 por certificação.</small>
                </div>

                <a
                  className="color-button color-button-light"
                  href={COMBO_CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  QUERO O COMBO 5 EM 1
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="color-final-section">
          <div className="color-container color-final-grid">
            <div className="color-final-icon" aria-hidden="true">
              <Award size={48} strokeWidth={1.35} />
            </div>

            <div>
              <span className="color-kicker">O próximo passo é seu</span>
              <h2>Você não precisa continuar insegura na hora da cor</h2>
              <p>Colorimetria e mechas não precisam ser um bicho de sete cabeças.</p>
              <p>
                Com estudo, prática e orientação certa, você começa a entender melhor o processo e ganha mais segurança para atender suas clientes.
              </p>
              <p>
                Se você quer parar de fazer no achismo e começar a estudar de verdade, esse material foi feito para você.
              </p>
              <strong className="color-final-price">Comece hoje por apenas R$ 29,90</strong>

              <a className="color-button color-button-light" href="#planos">
                QUERO RECEBER MINHAS APOSTILAS E CERTIFICADOS
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}