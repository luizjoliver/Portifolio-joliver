import type { Metadata } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const grotesk = Schibsted_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Joliver - Portfolio",
  description: "Porfolio do desenvolvedor luiz fellipe joliver , confira meus projetos e entre em contato para colaborações!",
  keywords: [
    "Desenvolvedor Front-End",
    "Portfolio desenvolvedor",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Luiz Joliver",
    "Desenvolvimento Web",
    "Desenolvimento",
    "Programador",
    "Desenvolvedor"
  ],
  authors: [{ name: "Luiz Fellipe Joliver" }],
  creator: "Luiz Fellipe Joliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${grotesk.className} antialiased scroll-smooth  bg-black-500  `}
      >
        {children}
      </body>
    </html>
  );
}
