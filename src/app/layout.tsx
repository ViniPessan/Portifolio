import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vinicius Pessan",
  description: "Eu sou um desenvolvedor front-end residente em Pacaembu, Brazil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
