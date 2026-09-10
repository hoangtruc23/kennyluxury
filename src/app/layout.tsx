import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenny Luxury — Beyond Time, Beyond Luxury | Đồng Hồ Cao Cấp Chính Hãng",
  description:
    "Kenny Luxury chuyên phân phối đồng hồ chính hãng từ các thương hiệu hàng đầu: Rolex, Patek Philippe, Audemars Piguet, Hublot, Richard Mille tại TP. Hồ Chí Minh.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBF9F5] text-[#1A1A1A] antialiased selection:bg-[#8C5824] selection:text-white">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
