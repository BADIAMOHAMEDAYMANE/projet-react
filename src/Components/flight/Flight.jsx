import style from "./Flight.module.css";

const Flight = ({
  departure,
  arrival,
  price,
  departure_time,
  arrival_time,
}) => {
  function getTime(time) {
    const secondPart = time.split('T')[1];
    const firstPart = secondPart.split('.')[0];
    const thirdPart = firstPart.split(':');
    return thirdPart[0] + ':' + thirdPart[1];
  }

  function getDate(time) {
    const datePart = time.split('T')[0];
    const [year, month, day] = datePart.split('-');
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={style.container}>
      <div className={style.price}>{price} €</div>
      <div className={style['from-to']}>
        <div className={style.from}>
          <p>{departure}</p>
          <p>{getTime(departure_time)}</p>
        </div>
        <div className={style.date}>
          {getDate(departure_time)}
        </div>
        <div className={style.to}>
          <p>{arrival}</p>
          <p>{getTime(arrival_time)}</p>
        </div>
      </div>
      <button className={style.reserveButton}>Réserver</button>
    </div>
  );
};

export default Flight;