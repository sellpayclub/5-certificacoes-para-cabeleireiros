import { Scissors } from "lucide-react";

const links = [
  { label: "Certificações", href: "#certificacoes" },
  { label: "Apostilas", href: "#apostilas" },
  { label: "Opções", href: "/#planos" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Ir para o início">
          <span className="brand-icon" aria-hidden="true">
            <Scissors size={19} strokeWidth={1.8} />
          </span>
          <span>
            <strong>5 Certificações</strong>
            <small>para Cabeleireiros</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/#planos">
          QUERO MEU CERTIFICADO
        </a>
      </div>
    </header>
  );
}