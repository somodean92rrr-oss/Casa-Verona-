const categorii = [
  {
    nume: "🍕 Pizza",
    produse: [
      ["Pizza Verona", "Sos de roșii, mozzarella și ingrediente atent alese", "—"],
      ["Pizza Quattro Formaggi", "Selecție de brânzeturi", "—"],
      ["Pizza casei", "Una dintre specialitățile Casa Verona", "—"],
    ],
  },
  {
    nume: "🥩 Preparate",
    produse: [
      ["Șnițel din cotlet de purcel", "Crocant la exterior și fraged în interior", "—"],
      ["Piept de pui la grătar", "Servit cu garnitura preferată", "—"],
      ["Carne la garniță", "Preparat tradițional, consistent", "—"],
    ],
  },
  {
    nume: "🥘 Plăcinte",
    produse: [
      ["Plăcintă cu brânză de burduf și slăninuță", "Gust tradițional și intens", "—"],
      ["Plăcintă cu carne la garniță", "Carne la garniță, brânză și slăninuță", "—"],
      ["Plăcintă Quattro Formaggi", "Pentru iubitorii de brânzeturi", "—"],
    ],
  },
];

export default function Meniu() {
  return (
    <main className="section">
      <p className="eyebrow">CASA VERONA</p>
      <h1 className="pageTitle">Meniul nostru</h1>
      <p className="pageIntro">
        Alege ce îți face poftă. În curând vei putea adăuga produsele direct
        în coș și plasa comanda online.
      </p>

      {categorii.map((categorie) => (
        <section className="menuSection" key={categorie.nume}>
          <h2>{categorie.nume}</h2>

          <div className="menuGrid">
            {categorie.produse.map(([nume, descriere, pret]) => (
              <article className="menuItem" key={nume}>
                <div>
                  <h3>{nume}</h3>
                  <p>{descriere}</p>
                </div>
                <strong>{pret}</strong>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
