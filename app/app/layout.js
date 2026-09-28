import "./globals.css";

export const metadata = {
  title: "Casa Verona | Restaurant Bistrița",
  description:
    "Casa Verona – restaurant în Bistrița. Meniu, comenzi online și rezervări.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <header className="navbar">
          <a href="/" className="logo">
            CASA <span>VERONA</span>
          </a>

          <nav>
            <a href="/meniu">Meniu</a>
            <a href="/comanda">Comandă</a>
            <a href="/rezervari">Rezervări</a>
          </nav>
        </header>

        {children}

        <footer>
          <strong>Casa Verona</strong>
          <p>Restaurant • Bistrița</p>
          <p>© 2026 Casa Verona</p>
        </footer>
      </body>
    </html>
  );
}
