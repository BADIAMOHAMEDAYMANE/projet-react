import style from './Destination.module.css'

function Destination() {
  return (
    <div className={style.destination}>
      <form className={style['destination-form']}>
        <div className={style['form-group']}>
          <label htmlFor="origin">Origine:</label>
          <input
            type="text"
            id="origin"
            placeholder="Marrakech RAK"
            className={style.input}
          />
        </div>
        <div className={style['form-group']}>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            placeholder="Madrid MAD"
            className={style.input}
          />
        </div>
        <div className={style['form-group']}>
          <label htmlFor="departure">Date aller:</label>
          <input type="date" id="departure" className={style.input} />
        </div>
        <div className={style['form-group']}>
          <label htmlFor="return">Date retour:</label>
          <input type="date" id="return" className={style.input} />
        </div>
        <div className={style['form-group']}>
          <label htmlFor="passengers">Passagers:</label>
          <select id="passengers" className={style.input}>
            <option>1 Passager</option>
            <option>2 Passagers</option>
            <option>3 Passagers</option>
          </select>
        </div>
        <button type="submit" className={style.button}>
          Rechercher
        </button>
      </form>
    </div>
  );
}

export default Destination;
