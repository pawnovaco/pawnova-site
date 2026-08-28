import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://pawnovaco.com"),
  title: {
    default: "Paw Nova | Better Finds for Happier Dogs",
    template: "%s | Paw Nova"
  },
  description:
    "Discover useful dog products, practical picks, and everyday finds selected to make life with your dog a little better. Part of what we earn helps dogs in need.",
  keywords: [
    "dog products",
    "dog owner finds",
    "dog grooming",
    "dog essentials",
    "Amazon dog finds",
    "Paw Nova"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paw Nova | Better Finds for Happier Dogs",
    description:
      "Discover useful dog products, practical picks, and everyday finds selected to make life with your dog a little better.",
    url: "https://pawnovaco.com",
    siteName: "Paw Nova",
    images: [{ url: "/pawnova-logo.png", width: 494, height: 410 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Nova | Better Finds for Happier Dogs",
    description:
      "Discover useful dog products, practical picks, and everyday finds selected to make life with your dog a little better.",
    images: ["/pawnova-logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

