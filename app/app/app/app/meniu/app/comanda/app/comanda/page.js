export default function Comanda() {
  return (
    <main className="section">
      <p className="eyebrow">COMANDĂ ONLINE</p>
      <h1 className="pageTitle">Pofta începe aici.</h1>

      <p className="pageIntro">
        Comandă preparatele tale preferate de la Casa Verona pentru
        ridicare sau livrare.
      </p>

      <div className="orderGrid">
        <div className="card">
          <h3>🛍️ Ridicare personală</h3>
          <p>
            Plasezi comanda online, noi o pregătim, iar tu o ridici
            direct de la Casa Verona.
          </p>

          <button className="primary orderButton">
            Începe comanda
          </button>
        </div>

        <div className="card">
          <h3>🚗 Livrare</h3>
          <p>
            Introduci adresa, alegi preparatele și urmărești statusul
            comenzii.
          </p>

          <button className="primary orderButton">
            Comandă cu livrare
          </button>
        </div>
      </div>

      <section className="comingSoon">
        <span>URMEAZĂ</span>
        <h2>Comenzi în timp real</h2>
        <p>
          Coș de cumpărături, adresă de livrare, plata online,
          confirmarea restaurantului și statusul comenzii vor fi
          integrate aici.
        </p>
      </section>
    </main>
  );
}
