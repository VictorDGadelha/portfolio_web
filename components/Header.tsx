import Link from 'next/link';
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <Link href="/" className="header-logo">
                    Meu Portfólio
                </Link>

                <nav className="header-navbar">
                    <Link href="#sobre">Sobre</Link>
                    <Link href="#projetos">Projetos</Link>
                    <Link href="#contato">Contato</Link>
                </nav>

                <a
                    href="/curriculo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-button"
                    >
                        Currículo
                    </a>
            </div>
        </header>
    );
}