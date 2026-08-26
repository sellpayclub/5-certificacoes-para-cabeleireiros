import { useEffect, useState } from "react";
import { ArrowRight, Award, Check, Sparkles } from "lucide-react";

const CHECKOUT_COMPLETE_FORMATION =
  "https://pay.kiwify.com.br/30UKU4V";

const completeBenefits = [
  "Alisamento Profissional",
  "Colorimetria Profissional",
  "Mechas & Loiros Profissionais",
  "Tratamentos e Terapia Capilar",
  "Corte Feminino Profissional",
  "5 Apostilas completas",
  "5 Certificados de conclusão",
];

function BenefitList({ items }) {
  return (
    <ul className="offer-benefits">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">
            <Check size={15} strokeWidth={2.6} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

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

export default function Offers() {
  const [completeCheckoutUrl, setCompleteCheckoutUrl] = useState(
    CHECKOUT_COMPLETE_FORMATION
  );
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    setCompleteCheckoutUrl(
      getCheckoutWithUtm(CHECKOUT_COMPLETE_FORMATION)
    );
  }, []);

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

  return (
    <section className="offers-section" id="planos">
      <div className="container">
        <div className="section-heading centered-heading offers-heading">
          <span className="section-kicker">Comece agora</span>
        </div>

        <div className="offers-grid offers-grid-single">
          <div className="offer-highlight">
            <div className="offer-scarcity">
              <span>
                <Sparkles size={16} aria-hidden="true" />
                Ultimo Dia Desconto.
              </span>
              <strong>Encerra em: {timeRemaining}</strong>
            </div>

            <article className="offer-card offer-card-featured" id="checkout-completo">
              <div className="offer-card-heading">
              <span className="offer-option">
                FORMAÇÃO COMPLETA — 5 CERTIFICAÇÕES!
              </span>
              <Award size={29} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <p>
              Tenha acesso às <strong>5 especializações profissionais.</strong>
            </p>

            <h3>Você recebe:</h3>
            <BenefitList items={completeBenefits} />

              <div className="featured-price">
                                  <span>De R$249,50 por R$19,90!</span>
                <div className="featured-price-value">
                  <small>FORMAÇÃO COMPLETA</small>
                  <strong>R$ 19,90</strong>
                </div>
              </div>

              <a
                className="button button-light button-full"
                href={completeCheckoutUrl}
                target="_blank"
                rel="noreferrer"
              >
                QUERO MEU CERTIFICADO
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}