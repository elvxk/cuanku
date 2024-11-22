import { Roboto_Condensed, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["100", "900"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata = {
  title: "CUANKU",
  description:
    "A user-friendly web app to track your income and expenses, helping you manage your finances and budget with ease.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-white">
        <head>
          {/* Favicon untuk browser umum */}
          <link rel="icon" href="/favicon.ico" />

          {/* Favicon 16x16 */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* Favicon 32x32 */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />

          {/* Favicon untuk perangkat Android */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />

          {/* Favicon untuk perangkat Apple */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Manifest file */}
          <link rel="manifest" href="/site.webmanifest" />

          {/* Set theme color */}
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body
          className={`${bebas.className} ${space.className} ${roboto.className} antialiased`}
        >
          <div className="container mx-auto">{children}</div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
