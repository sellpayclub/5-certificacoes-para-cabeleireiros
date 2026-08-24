import { useEffect, useState } from "react";
import { Award, Check, ChefHat, ArrowRight, BookOpen, Sparkles, ChevronDown } from "lucide-react";

const certificates = [
  {
    number: "01",
    title: "Certificado em Hambúrguer Artesanal",
    description:
      "Aprenda a montar hambúrgueres artesanais com combinações que valorizam sabor, textura e apresentação.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/fd055e71-e256-47bc-ba30-3c6a5b9b4c06.jpg",
  },
  {
    number: "02",
    title: "Certificado em Pizzas Profissionais",
    description:
      "Conheça preparos e possibilidades para criar pizzas que conquistam pelo aroma, pela massa e pelo recheio.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/263fe72e-25e6-4fd1-90f5-ecf10bfd4b48.jpg",
  },
  {
    number: "03",
    title: "Certificado em Confeitaria Profissional",
    description:
      "Explore técnicas de confeitaria para transformar ingredientes em sobremesas de visual marcante.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/2ed2f098-1b58-49e3-b4fa-1b4b70e904a9.jpg",
  },
  {
    number: "04",
    title: "Certificado em Bolos Caseiros e Recheados",
    description:
      "Descubra opções de bolos caseiros e recheados para preparar com carinho e servir em diferentes ocasiões.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e3c8df38-2a96-4720-8853-5a51281fbaba.jpg",
  },
  {
    number: "05",
    title: "Certificado em Doces Gourmet",
    description:
      "Desenvolva doces com acabamento especial, sabores envolventes e uma apresentação que chama atenção.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ea92ae45-2047-4cb3-86e9-7dd50a8b09f6.jpg",
  },
  {
    number: "06",
    title: "Certificado em Salgados para Venda",
    description:
      "Aprenda preparos versáteis de salgados para montar um cardápio prático e cheio de possibilidades.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b464f19e-e370-4900-8c76-d29f47ac4df2.jpg",
  },
  {
    number: "07",
    title: "Certificado em Panificação Profissional",
    description:
      "Conheça o universo dos pães, das massas e dos processos que tornam a panificação ainda mais especial.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/55211842-6555-4e18-b276-5290e4874bf6.jpg",
  },
  {
    number: "08",
    title: "Certificado em Marmitas e Comida Caseira",
    description:
      "Tenha ideias para criar refeições caseiras, saborosas e pensadas para o dia a dia.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/415619a8-2df2-4cf1-99a3-676388aa8c92.jpg",
  },
  {
    number: "09",
    title: "Certificado em Comida Japonesa",
    description:
      "Aproxime-se dos sabores e da apresentação delicada que fazem parte da culinária japonesa.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d1163f40-6dae-4271-8032-6403927333a9.jpg",
  },
  {
    number: "10",
    title: "Certificado em Churrasco e Grelhados",
    description:
      "Explore cortes, acompanhamentos e preparos na brasa para servir momentos cheios de sabor.",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ec016f33-73de-4b8a-a13b-f1b197cb6cea.jpg",
  },
];

const studyTopics = [
  "Receitas e preparos organizados",
  "Orientações passo a passo",
  "Técnicas para diferentes especialidades",
  "Dicas para sabor e apresentação",
  "Ideias para ampliar seu cardápio",
  "Material para consultar sempre que precisar",
];

const faqItems = [
  {
    question: "Preciso já trabalhar com Gastronomia?",
    answer:
      "Não. Os materiais foram pensados tanto para quem já trabalha com alimentos quanto para quem quer ampliar seus conhecimentos na cozinha.",
  },
  {
    question: "O material é físico?",
    answer:
      "Não. Todo o conteúdo é digital e você recebe acesso após a confirmação da compra.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. Você pode estudar pelo celular, tablet ou computador.",
  },
  {
    question: "Recebo certificado?",
    answer:
      "Sim. Cada especialização possui seu próprio Certificado de Conclusão.",
  },
  {
    question: "Se eu comprar as 10 especializações, recebo 10 certificados?",
    answer:
      "Sim. São 10 especializações diferentes e, consequentemente, 10 certificados de conclusão.",
  },
  {
    question: "Posso imprimir meu certificado?",
    answer:
      "Sim. Você poderá imprimir e guardar seu certificado da forma que preferir.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "Após a confirmação da compra, você recebe as instruções para acessar seus materiais no email.",
  },
];

export default function GastronomyLanding() {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [openItems, setOpenItems] = useState([0]);

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

  function toggleItem(index) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  return (
    <div className="gastronomy-page">
      <header className="gastronomy-header">
        <div className="container gastronomy-header-inner">
          <a className="gastronomy-brand" href="#inicio" aria-label="Ir para o início">
            <span className="gastronomy-brand-icon" aria-hidden="true">
              <ChefHat size={20} strokeWidth={1.8} />
            </span>
            <span>
              <strong>10 Certificados</strong>
              <small>para Gastronomia</small>
            </span>
          </a>

          <nav className="gastronomy-nav" aria-label="Navegação principal">
            <a href="#certificados">Certificados</a>
            <a href="#materiais">Apostilas</a>
            <a href="#perguntas-frequentes">Dúvidas</a>
          </nav>

          <a className="gastronomy-header-cta" href="#planos">
            VER OFERTA
          </a>
        </div>
      </header>

      <main>
        <section className="gastronomy-hero" id="inicio">
          <div className="gastronomy-hero-decoration gastronomy-hero-decoration-one" aria-hidden="true" />
          <div className="gastronomy-hero-decoration gastronomy-hero-decoration-two" aria-hidden="true" />

          <div className="container gastronomy-hero-grid">
            <div className="gastronomy-hero-copy">
              <span className="gastronomy-eyebrow">
                <Award size={17} aria-hidden="true" />
                Formação para Gastronomia
              </span>

              <h1>10 Certificados para Gastronomia!</h1>

              <p>
                Do hambúrguer artesanal ao churrasco e grelhados: descubra
                formações para ampliar seu repertório na cozinha.
              </p>

              <div className="gastronomy-certificate-highlight">
                <Award size={19} aria-hidden="true" />
                <strong>CERTIFICADO AUTENTIFICADO E VALIDO EM SEU NOME!</strong>
              </div>

              <a className="gastronomy-button gastronomy-button-primary" href="#planos">
                VER A OFERTA COMPLETA
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="gastronomy-hero-visual">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/bdfe4740-4cdd-4078-bab7-7f8ff1474370.jpg"
                alt="Todos os dez certificados das formações em Gastronomia"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="gastronomy-receive-section">
          <div className="container gastronomy-receive-grid">
            <div>
              <span className="gastronomy-kicker">Cozinha, técnica e criatividade</span>
              <h2>Você já manda bem na cozinha? Então comprove sua experiência com um certificado profissional.</h2>
              <p>
                Muitas pessoas já cozinham, vendem, atendem clientes ou trabalham na área da gastronomia, - mas ainda não têm um certificado para apresentar sua capacitação com mais confiança.
              </p>
              <p>
                Com a Certifica Cozinha, você acessa apostilas práticas, aprende novas técnicas e recebe seu certificado de conclusão para mostrar com orgulho sua experiência profissional.
              </p>
              <p>Conquiste seu certificado hoje mesmo!</p>
            </div>

            <div className="gastronomy-receive-image">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1cad04cd-4d53-49ea-85eb-174089dd7f54.jpg"
                alt="Certificados e apostilas das formações em Gastronomia"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="gastronomy-certificates-section" id="certificados">
          <div className="container">
            <div className="gastronomy-section-heading">
              <span className="gastronomy-kicker">Dez formações</span>
              <h2>VEJA TUDO QUE VOCÊ VAI RECEBER:</h2>
            </div>

            <div className="gastronomy-certificate-list">
              {certificates.map((certificate, index) => (
                <article
                  className={`gastronomy-certificate-item ${
                    index % 2 === 1 ? "gastronomy-certificate-item-alternate" : ""
                  }`}
                  key={certificate.title}
                >
                  <span className="gastronomy-certificate-number" aria-hidden="true">
                    {certificate.number}
                  </span>

                  <div className="gastronomy-certificate-copy">
                    <span className="gastronomy-course-label">Apostila + certificado</span>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.description}</p>
                  </div>

                  <img
                    src={certificate.image}
                    alt={`Material do curso ${certificate.title}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </article>
              ))}
            </div>

            <div className="gastronomy-centered-cta">
              <a className="gastronomy-button gastronomy-button-primary" href="#inicio">
                VOLTAR AO INÍCIO
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="gastronomy-material-section" id="materiais">
          <div className="container gastronomy-material-grid">
            <div className="gastronomy-material-image">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/f1db6f0f-1aa7-4377-9ce8-fd2b1c7ea392.jpg"
                alt="Apostilas das formações em Gastronomia"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="gastronomy-material-copy">
              <span className="gastronomy-kicker">Material para colocar a mão na massa</span>
              <h2>NÃO É APENAS UM CERTIFICADO.</h2>
              <p>
                Você também recebe apostilas completas para estudar no seu ritmo
                e consultar sempre que quiser preparar algo novo.
              </p>
              <h3>Dentro do seu material você encontra:</h3>
              <ul>
                {studyTopics.map((topic) => (
                  <li key={topic}>
                    <Check size={16} strokeWidth={2.7} aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="gastronomy-social-section" id="depoimentos">
          <div className="container">
            <div className="gastronomy-section-heading gastronomy-centered-heading">
              <span className="gastronomy-kicker">Sabores que inspiram</span>
              <h2>SEJA CERTIFICADO! E MOSTRE A TODOS QUE VOCÊ DOMINA NA COZINHA</h2>
            </div>

            <div className="gastronomy-testimonial-photos">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1802a0bb-dd6b-4dea-a01b-5732ff6cb13e.jpg"
                alt="Clientes certificados mostrando seus certificados e apostilas de Gastronomia"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/73ff53dd-feff-486c-9771-db1b499d7bfa.jpg"
                alt="Clientes certificados mostrando seus certificados e apostilas de Gastronomia"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <p className="gastronomy-certified-count">+ 12.300 certificados</p>
            </div>
          </div>
        </section>


        <section className="gastronomy-offer-section" id="planos">
          <div className="container">
            <div className="gastronomy-section-heading gastronomy-centered-heading">
              <span className="gastronomy-kicker">Comece agora</span>
              <h2>SUA FORMAÇÃO COMPLETA EM GASTRONOMIA</h2>
            </div>

            <div className="gastronomy-offer-wrap">
              <div className="gastronomy-scarcity">
                <span>
                  <Sparkles size={16} aria-hidden="true" />
                  Ultimo Dia Desconto.
                </span>
                <strong>Encerra em: {timeRemaining}</strong>
              </div>

              <article className="gastronomy-offer-card">
                <div className="gastronomy-offer-heading">
                  <div>
                    <span>FORMAÇÃO COMPLETA</span>
                    <h3>10 CERTIFICADOS PARA GASTRONOMIA!</h3>
                  </div>
                  <Award size={32} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <p>
                  Tenha acesso às <strong>10 especializações em Gastronomia</strong>,
                  às apostilas completas e aos certificados de conclusão.
                </p>

                <div className="gastronomy-offer-list">
                  {certificates.map((certificate) => (
                    <span key={certificate.title}>
                      <Check size={15} strokeWidth={2.7} aria-hidden="true" />
                      {certificate.title.replace("Certificado em ", "")}
                    </span>
                  ))}
                </div>

                <div className="gastronomy-price">
                  <span>De R$200,00 por R$47,00!</span>
                  <small>FORMAÇÃO COMPLETA</small>
                  <strong>R$ 47,00</strong>
                </div>

                <a
                  className="gastronomy-button gastronomy-button-light"
                  href="https://checkout.sellpay.com.br/c/7o4w"
                  target="_blank"
                  rel="noreferrer"
                >
                  VER TODAS AS FORMAÇÕES
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="gastronomy-about-section" id="quem-somos">
          <div className="container gastronomy-about-container">
            <div className="gastronomy-about-image-wrap">
              <img
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/cfaf8538-f4b0-42c6-a5c2-8556fc66208d.png"
                alt="Perfil da Certifica Cozinha com formações e receitas de Gastronomia"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="gastronomy-about-content">
              <span className="gastronomy-kicker">A Certifica Cozinha</span>
              <h2>Quem somos nós</h2>
              <div className="gastronomy-about-copy">
                <p>
                  A Certifica Cozinha nasceu para ajudar pessoas que trabalham ou desejam trabalhar com gastronomia a se aperfeiçoarem, aprenderem novas receitas e valorizarem sua profissão.
                </p>
                <p>
                  Oferecemos apostilas práticas, conteúdos objetivos e certificados de conclusão para quem quer estudar no seu ritmo, melhorar suas técnicas e mostrar com orgulho sua capacitação.
                </p>
                <p>
                  Nosso objetivo é simples: ajudar você a ter mais conhecimento, mais confiança e mais oportunidades na área da gastronomia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="gastronomy-faq-section" id="perguntas-frequentes">
          <div className="container gastronomy-faq-container">
            <div className="gastronomy-section-heading gastronomy-centered-heading">
              <span className="gastronomy-kicker">Tire suas dúvidas</span>
              <h2>PERGUNTAS FREQUENTES</h2>
            </div>

            <div className="gastronomy-faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openItems.includes(index);
                const answerId = `gastronomy-faq-answer-${index}`;

                return (
                  <article className={`gastronomy-faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span>{item.question}</span>
                        <ChevronDown size={20} aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={answerId} hidden={!isOpen}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="gastronomy-final-section">
          <div className="container gastronomy-final-content">
            <Check size={32} aria-hidden="true" />
            <div>
              <span className="gastronomy-kicker">Seu próximo passo na cozinha</span>
              <h2>10 CERTIFICADOS PARA GASTRONOMIA!</h2>
            </div>
            <a className="gastronomy-button gastronomy-button-light" href="#planos">
              VER A OFERTA
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}