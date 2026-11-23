import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./compoment/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "StudioKala | Digital Design & Engineering Studio",
  description: "Thoughtful websites built for brands that care about craft.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF9F6]`}>
        <Nav />
        <div className="pt-10 pb-20">{children}</div>
      </body>
    </html>
  );
}
