import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "FlashDeck – Study Smarter, Remember More",
  description:
    "FlashDeck helps you create, organize, and study flashcards that actually stick. AI-powered flashcard generation, spaced repetition, and offline support.",
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
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
