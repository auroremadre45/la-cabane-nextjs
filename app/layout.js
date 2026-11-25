import "./globals.css";
import { Bricolage_Grotesque, Nunito } from "next/font/google";

const head = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-head", display: "swap" });
const body = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "La Cabane Mauricienne – Home-style Mauritian food in Grand Baie",
  description: "Fresh fish, fragrant curries and generous plates in Grand Baie, Mauritius. Call +230 5711 4817 to order.",
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
