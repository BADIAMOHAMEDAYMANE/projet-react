import { useEffect, useState } from "react";
import { getFlightsByOriginAndDepartureandDate } from "../../services/flightServices";
import style from './FlightList.module.css'
import Flight from "../../Components/flight/Flight";
import { getMyBookings, registerBooking } from "../../services/bookingServices";
import { useNavigate } from "react-router";

const FlightsList = () => {
  const navigate = useNavigate()
  const flightOptions = localStorage.getItem("flightOptions");
  const { origin, destination, departureDate, arrivalDate } =
    JSON.parse(flightOptions);
  const [departsFlights, setDepartsFlights] = useState([]);
  const [returnsFlights, setReturnsFlights] = useState([]);
  const [flightsBookedIds,setFlightsBookedIds] = useState([])

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

  function generateRandomSeat() {
    // Common airplane letters for seats
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    // Random row number (typically between 1 and 30)
    const rowNumber = Math.floor(Math.random() * 30) + 1;
    
    // Random seat letter
    const seatLetter = letters[Math.floor(Math.random() * letters.length)];
    
    return `${rowNumber}${seatLetter}`;
  }
  

  async function bookFlight (id) {
    const randomSeat = generateRandomSeat()
    const booking = {flightId: id, setNumber: randomSeat}
    try {
      await registerBooking(booking);
      navigate('/booking-list')
    }catch(e){
      alert(e)
    }
    
  }
  async function getAllMyBookings() {
    const response = await getMyBookings();
    const bookings = response.bookings;
    const flightIds = bookings.map(flight => flight.flightId)
    setFlightsBookedIds(flightIds)
  }
  useEffect(() => {
    getDepartsFlights(origin, destination, departureDate);
    getReturnsFlights(origin, destination, arrivalDate);
    getAllMyBookings();
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
        id={flight.id}
        onClick={bookFlight}
        key={flight.id}
        alreadyBooked={flightsBookedIds.includes(flight.id)} />
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
        id={flight.id}
        onClick={bookFlight}
        key={flight.id}
        alreadyBooked={flightsBookedIds.includes(flight.id)} />
      ))}
      </div>
    </div>
  );
};

export default FlightsList;
