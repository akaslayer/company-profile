import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import StateProvider from "@/context/StateContext";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: "--font-DM-Sans",
  display: 'swap'
})




export const metadata: Metadata = {
  title: "ITechno",
  description: "The best IT service company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateProvider>
        <body className={`${sans.variable}`}>
          <SideBar />
          <NavBar />
          {children}
          <Footer />
        </body>
      </StateProvider>
    </html>
  );
}
