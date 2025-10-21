import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Providers from "./services/providers";
import 'bootstrap-icons/font/bootstrap-icons.css';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M-Cart",
  description: "E-Commerce App using NextJS App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
        <div className="d-flex flex-column min-vh-100">
          <Nav/>
          {children}
          <Footer/>
        </div>
        </Providers>
      </body>
    </html>
  );
}
