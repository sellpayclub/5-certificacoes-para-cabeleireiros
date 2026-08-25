
const links = [
  { label: "Certificações", href: "#certificacoes" },
  { label: "Apostilas", href: "#apostilas" },
  { label: "Opções", href: "/#planos" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

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