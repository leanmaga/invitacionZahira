// app/layout.js | layout.tsx
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
  title: "Zahira – Mis quince años",
  description:
    "Una celebración mágica que quedará en nuestros corazones para siempre. Acompáñame en este día tan especial.",

  // Favicon personalizado
  icons: {
    icon: [
      {
        url: "assets/favicon.ico",
        sizes: "any",
      },
      {
        url: "assets/android.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // Open Graph para redes sociales (WhatsApp, Facebook, etc.)
  openGraph: {
    title: "Zahira – Mis quince años",
    description:
      "Una celebración mágica que quedará en nuestros corazones para siempre. Acompáñame en este día tan especial.",
    url: "https://invitacion-zahira.vercel.app/",
    siteName: "Invitación Virtual - Zahira",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://invitacion-zahira.vercel.app/assets/android.png", // URL absoluta
        width: 1200,
        height: 630,
        alt: "Invitación a los quince años de Zahira - Una celebración mágica",
      },
    ],
  },

  // Twitter Cards (por si alguien comparte en Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Zahira – Mis quince años",
    description:
      "Una celebración mágica que quedará en nuestros corazones para siempre. Acompáñame en este día tan especial.",
    images: ["https://invitacion-zahira.vercel.app/assets/android.png"],
  },

  // Metadatos adicionales
  keywords: [
    "quince años",
    "quinceañera",
    "celebración",
    "Zahira",
    "invitación",
  ],
  authors: [{ name: "Zahira" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${imperial.variable}`}>
      <head>
        {/* Meta tags adicionales para WhatsApp */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
