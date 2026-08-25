import { Award } from "lucide-react";

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
          <span className="academy-logo" aria-hidden="true">
            <Award size={16} strokeWidth={1.9} />
            <b>IBC</b>
          </span>
          <span className="academy-brand-copy">
            <strong>Instituto Beleza</strong>
            <small>Certificada</small>
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