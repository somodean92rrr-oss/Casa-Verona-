import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">BISTRIȚA • VIIȘOARA</p>

          <h1>Casa Verona</h1>

          <p className="subtitle">
            Gust românesc. Porții generoase. O masă la care te întorci.
          </p>

          <div className="buttons">
            <Link href="/meniu" className="primary">
              Vezi meniul
            </Link>

            <Link href="/comanda" className="secondary">
              Comandă online
            </Link>

            <Link href="/rezervari" className="secondary">
              Rezervă o masă
            </Link>
          </div>
        </div>

        <div className="heroBadge">
          <span>PRÂNZUL ZILEI</span>
          <strong>39 LEI</strong>
          <small>Luni – Vineri</small>
        </div>
      </section>
    </main>
  );
}
