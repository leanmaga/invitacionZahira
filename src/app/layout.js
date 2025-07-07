// app/layout.js | layout.tsx
import "./globals.css";
import { Inter, Playfair_Display, Beau_Rivage } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const imperial = Beau_Rivage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-elegant",
});

export const metadata = {
  title: "Zahira – Mis quince años",
  description: "Una celebración mágica ",

  openGraph: {
    title: "Zahira – Mis quince años",
    description: "Una celebración mágica ",
    url: "https://invitacion-zahira.vercel.app/",
    siteName: "Invitación Virtual",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `assets/herobg.jpg`,
        width: 1200,
        height: 630,
        alt: "Fondo dorado con destellos y el nombre de Zahira",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${imperial.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
