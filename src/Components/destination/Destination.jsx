import { useRef } from 'react';
import style from './Destination.module.css'
import { useNavigate } from 'react-router';

function Destination() {

  const navigate = useNavigate();
  
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const departureDateRef = useRef(null);
  const arrivalDateRef = useRef(null);
  const passengersRef = useRef(null);
  
  function handleSubmit(event) {
    event.preventDefault();
    const origin = originRef.current.value;
    const destination = destinationRef.current.value;
    const departureDate = departureDateRef.current.value;
    const arrivalDate = arrivalDateRef.current.value;
    const passengers = passengersRef.current.value;
    localStorage.setItem('flightOptions',JSON.stringify({origin,destination,departureDate,arrivalDate,passengers}))
    navigate('/flights-list')
  }
  return (
    <div className={style.destination}>
      <form onSubmit={handleSubmit} className={style['destination-form']}>
        <div className={style['form-group']}>
          <label>Origine:</label>
          <input type="text"
                 className={style.input}
                 ref={originRef} />
        </div>
        <div className={style['form-group']}>
          <label>Destination:</label>
          <input type="text"
                 className={style.input}
                 ref={destinationRef} />
        </div>
        <div className={style['form-group']}>
          <label>Date aller:</label>
          <input type="date"
                 className={style.input}
                 ref={departureDateRef} />
        </div>
        <div className={style['form-group']}>
          <label>Date retour:</label>
          <input type="date"
                 className={style.input}
                 ref={arrivalDateRef} />
        </div>
        <div className={style['form-group']}>
          <label>Passagers:</label>
          <input type="number"
                 className={style.input}
                 ref={passengersRef}
                 defaultValue={1} />
        </div>
        <button type="submit" className={style.button}>
          Rechercher
        </button>
      </form>
    </div>
  );
}

export default Destination;
