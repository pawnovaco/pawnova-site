import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Paw Nova | Pet Finds Worth Knowing About",
    template: "%s | Paw Nova"
  },
  description:
    "Useful pet finds, everyday essentials, grooming picks, and smart products for dogs, cats, and the people who love them."
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
