import { AsideDesign } from "@/components/AsideDesign";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Veraz",
  description: "Get true and verified information about the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen ${roboto.className}`}>
        <AsideDesign>{children}</AsideDesign>
      </body>
    </html>
  );
}
