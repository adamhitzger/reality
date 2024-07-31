import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const font = Montserrat({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Hrdina Reality",
  description: "Hrdina reality",
  icons: {
    icon: "/logo.jpg"
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {draftMode().isEnabled && (

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
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
