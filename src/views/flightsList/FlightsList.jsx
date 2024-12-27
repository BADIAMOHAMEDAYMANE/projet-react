import { useEffect, useState } from "react";
import { getFlightsByOriginAndDepartureandDate } from "../../services/flightServices";
import Flight from "../../components/flight/Flight";
import style from './FlightList.module.css'

const FlightsList = () => {
  const flightOptions = localStorage.getItem("flightOptions");
  const { origin, destination, departureDate, arrivalDate } =
    JSON.parse(flightOptions);
  const [departsFlights, setDepartsFlights] = useState([]);
  const [returnsFlights, setReturnsFlights] = useState([]);

  async function getDepartsFlights(origin, destination, departureDate) {
    try {
      const response = await getFlightsByOriginAndDepartureandDate(
        origin,
        destination,
        departureDate
      );
      setDepartsFlights(response.flights);
    } catch (e) {
      alert(e);
    }
  }
  async function getReturnsFlights(destination, origin, departureDate) {
    try {
      const response = await getFlightsByOriginAndDepartureandDate(
        origin,
        destination,
        departureDate
      );
      setReturnsFlights(response.flights);
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    getDepartsFlights(origin, destination, departureDate);
    getReturnsFlights(origin, destination, arrivalDate);
  }, [origin, destination, departureDate, arrivalDate]);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Allée</h1>
      <div className={style.flights}>
      {departsFlights.map((flight) => (
        <Flight departure={flight.departure}
        arrival={flight.arrival}
        price={flight.price}
        departure_time={flight.departure_time}
        arrival_time={flight.arrival_time}
        key={flight.id} />
      ))}
      </div>
      <h1 className={style.title}>Retour</h1>
      <div className={style.flights}>
      {returnsFlights.map((flight) => (
        <Flight departure={flight.departure}
        arrival={flight.arrival}
        price={flight.price}
        departure_time={flight.departure_time}
        arrival_time={flight.arrival_time}
        key={flight.id} />
      ))}
      </div>
    </div>
  );
};

export default FlightsList;
