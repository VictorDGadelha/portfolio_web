import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: "Portfólio | Victor Gadelha - Desenvolvedor Full-Stack",
  description: "Portfólio de Victor, desenvolvedor full-stack. Explore meus projetos, habilidades e entre em contato para colaborações.", 
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        <main>
          {children}
          </main>

          <Footer />
      </body>
    </html>
  );
}