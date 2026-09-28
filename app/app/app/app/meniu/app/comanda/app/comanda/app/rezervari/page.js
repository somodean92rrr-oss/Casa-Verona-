export default function Rezervari() {
  return (
    <main className="section">
      <p className="eyebrow">REZERVĂRI ONLINE</p>
      <h1 className="pageTitle">Masa ta te așteaptă.</h1>

      <p className="pageIntro">
        Alege data, ora și numărul de persoane. Casa Verona va confirma
        rezervarea.
      </p>

      <form className="bookingForm">
        <div className="formGroup">
          <label>Nume și prenume</label>
          <input type="text" placeholder="Ex: Andrei Pop" required />
        </div>

        <div className="formGroup">
          <label>Telefon</label>
          <input type="tel" placeholder="07xx xxx xxx" required />
        </div>

        <div className="formGroup">
          <label>Data</label>
          <input type="date" required />
        </div>

        <div className="formGroup">
          <label>Ora</label>
          <input type="time" required />
        </div>

        <div className="formGroup">
          <label>Număr persoane</label>
          <select defaultValue="2">
            <option value="1">1 persoană</option>
            <option value="2">2 persoane</option>
            <option value="3">3 persoane</option>
            <option value="4">4 persoane</option>
            <option value="5">5 persoane</option>
            <option value="6">6 persoane</option>
            <option value="7">7 persoane</option>
            <option value="8">8 persoane</option>
            <option value="9+">9+ persoane</option>
          </select>
        </div>

        <div className="formGroup fullWidth">
          <label>Observații</label>
          <textarea
            rows="4"
            placeholder="Ex: scaun pentru copil, aniversare, preferință masă..."
          />
        </div>

        <button type="submit" className="primary bookingButton">
          Rezervă masa
        </button>
      </form>

      <p className="formNote">
        Rezervarea devine valabilă după confirmarea restaurantului.
      </p>
    </main>
  );
}
