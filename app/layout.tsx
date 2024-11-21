import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const font = Montserrat({ subsets: ["latin"] })
export const metadata: Metadata = {
  icons: {
    icon: "/logo.jpg"
  },
  applicationName: "Hrdina reality",
  generator: "Next.ts",
  keywords: ["Hrdina reality Ostrov Havlíčkův Brod", "Realitní společnost", "Lukáš Hrdina", "Lukáš Hrdina Havlíčkův Brod", "Reality Havlíčkův Brod", "Havlíčkův Brod realitní makléř"],
  openGraph: {
    title: "Hrdina reality",
    description: "Hrdina reality - můžete nás navštívit na adrese Havlíčkovo náměstí 56, Havlíčkův Brod 580 01 .",
    url: "https://www.hrdinareality.cz",
    siteName: "Hrdina reality Havlíčkův Brod",
    locale: "cs_CZ",
    type: "website"
  }

};

<<<<<<< HEAD
<<<<<<< HEAD
export default async function RootLayout({
=======
export default function RootLayout({
>>>>>>> f5c87ce01d755afdb9ddc7f797a44aa446a260e8
=======
export default function RootLayout({
>>>>>>> origin/main
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
<<<<<<< HEAD
<<<<<<< HEAD
        {(await draftMode()).isEnabled && (
=======
        {draftMode().isEnabled && (
>>>>>>> f5c87ce01d755afdb9ddc7f797a44aa446a260e8
=======
        {draftMode().isEnabled && (
>>>>>>> origin/main

          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <Navbar />
        <main>{children}

        </main>
        <Footer />
<<<<<<< HEAD
<<<<<<< HEAD
        {(await draftMode()).isEnabled && <VisualEditing />}
=======
        {draftMode().isEnabled && <VisualEditing />}
>>>>>>> f5c87ce01d755afdb9ddc7f797a44aa446a260e8
=======
        {draftMode().isEnabled && <VisualEditing />}
>>>>>>> origin/main
      </body>
    </html>
  );
}
