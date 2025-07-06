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
  title: "Zahira - Quinceañera Invitation",
  description: "Una celebración mágica - 15 años de Zahira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${imperial.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
