import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://pawnovaco.com"),
  title: {
    default: "Paw Nova | Pet Finds Worth Knowing About",
    template: "%s | Paw Nova"
  },
  description:
    "Useful pet finds, everyday essentials, grooming picks, and smart products for dogs, cats, and the people who love them.",
  keywords: [
    "pet finds",
    "dog products",
    "cat products",
    "pet grooming",
    "pet essentials",
    "Paw Nova"
  ],
  openGraph: {
    title: "Paw Nova | Pet Finds Worth Knowing About",
    description:
      "Useful pet finds, everyday essentials, grooming picks, and smart products for dogs, cats, and the people who love them.",
    url: "https://pawnovaco.com",
    siteName: "Paw Nova",
    images: [{ url: "/pawnova-logo.png", width: 494, height: 410 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Nova | Pet Finds Worth Knowing About",
    description:
      "Useful pet finds, everyday essentials, grooming picks, and smart products for dogs, cats, and the people who love them.",
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

