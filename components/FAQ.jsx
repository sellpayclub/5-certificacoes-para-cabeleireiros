import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Preciso já trabalhar como cabeleireira?",
    answer:
      "Não. O material pode ser utilizado tanto por quem já trabalha na área e deseja aperfeiçoamento quanto por quem está começando a estudar técnicas de cabeleireiro.",
  },
  {
    question: "O material é físico?",
    answer:
      "Não. Todo o conteúdo é digital e você recebe acesso após a confirmação da compra.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim. Você pode estudar pelo celular, tablet ou computador.",
  },
  {
    question: "A apostila fica disponível para consulta?",
    answer:
      "Sim. Você poderá utilizar seu material para estudar e consultar as técnicas sempre que precisar.",
  },
  {
    question: "Recebo certificado?",
    answer:
      "Sim. Cada especialização possui seu próprio Certificado de Conclusão.",
  },
  {
    question: "Se eu comprar as 5 especializações, recebo 5 certificados?",
    answer:
      "Sim. São 5 especializações diferentes e, consequentemente, 5 certificados de conclusão.",
  },
  {
    question: "Posso imprimir meu certificado?",
    answer:
      "Sim. Você poderá imprimir e emoldurar seu certificado para deixar no seu salão ou espaço profissional.",
  },
  {
    question: "O certificado é válido?",
    answer:
      "O certificado comprova a conclusão do material/curso oferecido. Ele equivale por si só, a diploma técnico, graduação ou licença profissional regulamentada.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "Após a confirmação da compra, você recebe as instruções para acessar seus materiais no email.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0]);

  function toggleItem(index) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  return (
    <section className="faq-section" id="perguntas-frequentes">
      <div className="container faq-container">
        <div className="section-heading centered-heading">
          <span className="section-kicker">Tire suas dúvidas</span>
          <h2>PERGUNTAS FREQUENTES</h2>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openItems.includes(index);
            const answerId = `faq-answer-${index}`;

            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
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
                <div
                  className="faq-answer"
                  id={answerId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}