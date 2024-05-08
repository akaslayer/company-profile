import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StateProvider from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <SideBar />
          <NavBar />
          {children}
        </body>
      </StateProvider>
    </html>
  );
}
