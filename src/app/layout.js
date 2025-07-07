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

// ✅ Usa TU dominio final (sin / al final)
const BASE_URL = "https://invitacion-zahira.vercel.app/"; // cambia esto

export const metadata = {
  title: "Zahira – Quinceañera Invitation",
  description: "Una celebración mágica – 15 años de Zahira",

  openGraph: {
    title: "Zahira – Quinceañera Invitation",
    description: "Una celebración mágica – 15 años de Zahira",
    url: BASE_URL,
    siteName: "Invitación Virtual",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/herobg.jpg`, // 🔑 URL absoluta
        width: 1200,
        height: 630,
        alt: "Fondo dorado con destellos y el nombre de Zahira",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zahira – Quinceañera Invitation",
    description: "Una celebración mágica – 15 años de Zahira",
    images: [`${BASE_URL}/herobg.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${imperial.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
