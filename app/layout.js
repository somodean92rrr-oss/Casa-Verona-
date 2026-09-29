import "./globals.css";

export const metadata = {
  title: "Casa Verona | Bistrița",
  description:
    "Casa Verona Bistrița — gust românesc, prânzul zilei, comenzi online și rezervări.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
