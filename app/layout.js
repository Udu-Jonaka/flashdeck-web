import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "FlashDeck – Study Smarter, Remember More",
  description:
    "FlashDeck helps you create, organize, and study flashcards that actually stick. AI-powered flashcard generation, spaced repetition, and offline support.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#0f7b6c",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "FlashDeck – Study Smarter, Remember More",
    description:
      "Create, and study flashcards that actually stick with AI-powered generation and spaced repetition.",
    url: "https://flashdeck.vercel.app",
    siteName: "FlashDeck",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "FlashDeck App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlashDeck – Study Smarter, Remember More",
    description:
      "Create, and study flashcards that actually stick with AI-powered generation and spaced repetition.",
    images: ["/photo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/7279bfc684.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/hero.css" />
        <link rel="stylesheet" href="/css/features.css" />
        <link rel="stylesheet" href="/css/cta.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/changelog.css" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
