import Link from 'next/link';
export default function Header() {
    return (
        <header>
            <nav>
                 <Link href="/">Victor</Link>

                <div>
                    <Link href="#sobre">Sobre</Link>
                    <Link href="#projetos">Projetos</Link>
                    <Link href="#contato">Contato</Link>
                </div>
            </nav>
        </header>
    );
}