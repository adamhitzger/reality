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

export default async function RootLayout({
children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        <Navbar />
        <main>
          {children}
          </main>
        <Footer />

        {(await draftMode()).isEnabled && <VisualEditing />}

      </body>
    </html>
  );
}
