import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">BISTRIȚA • VIIȘOARA</p>
          <h1>Casa Verona</h1>
          <p className="subtitle">
            Gust românesc. Porții generoase. Comandă simplu.
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
      </section>

      <section className="section">
        <p className="eyebrow">CASA VERONA</p>
        <h2>Totul într-un singur loc.</h2>

        <div className="cards">
          <Link href="/meniu" className="card">
            <h3>🍕 Meniu</h3>
            <p>Descoperă preparatele Casa Verona.</p>
          </Link>

          <Link href="/comanda" className="card">
            <h3>🛍️ Comandă online</h3>
            <p>Livrare sau ridicare direct din restaurant.</p>
          </Link>

          <Link href="/rezervari" className="card">
            <h3>🍽️ Rezervări</h3>
            <p>Alege data, ora și numărul de persoane.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
