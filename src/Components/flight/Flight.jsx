import style from "./Flight.module.css";

const Flight = ({
  departure,
  arrival,
  price,
  departure_time,
  arrival_time,
}) => {
  function refactorTime(time) {
    const secondPart = time.split('T')[1];
    const firstPart = secondPart.split('.')[0];
    const thirdPart = firstPart.split(':');
    return thirdPart[0] + ':' + thirdPart[1];
  }

  return (
    <div className={style.container}>
      <div className={style['from-to']}>
        <div className={style.from}>
          <p>{departure}</p>
          <p>{refactorTime(departure_time)}</p>
        </div>
        <div className={style.to}>
          <p>{arrival}</p>
          <p>{refactorTime(arrival_time)}</p>
        </div>
      </div>
      <div className={style.price}>{price} €</div>
    </div>
  );
};

export default Flight;