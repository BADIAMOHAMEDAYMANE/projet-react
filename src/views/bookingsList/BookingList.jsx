// BookingList.jsx
import { useEffect, useState } from "react";
import styles from './BookingList.module.css';
import { getMyBookings } from "../../services/bookingServices";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).replace(',', '');
};

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await getMyBookings();
                setBookings(response.bookings);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mes réservations :</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.flightNumber}>N° de vol</th>
                            <th className={styles.city}>Départ</th>
                            <th className={styles.city}>Arrivée</th>
                            <th className={styles.date}>Date de départ</th>
                            <th className={styles.date}>{"Date d'arrivée"}</th>
                            <th className={styles.seat}>Siège</th>
                            <th className={styles.price}>Prix</th>
                            <th className={styles.status}>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td className={styles.flightNumber}>{booking.flight.flight_number}</td>
                                <td className={styles.city}>{booking.flight.departure}</td>
                                <td className={styles.city}>{booking.flight.arrival}</td>
                                <td className={styles.date}>{formatDate(booking.flight.departure_time)}</td>
                                <td className={styles.date}>{formatDate(booking.flight.arrival_time)}</td>
                                <td className={styles.seat}>{booking.seat_number}</td>
                                <td className={styles.price}>{Number(booking.flight.price).toLocaleString('fr-FR', {
                                    style: 'currency',
                                    currency: 'EUR'
                                })}</td>
                                <td className={styles.status}>
                                    <span className={`${styles.statusBadge} ${
                                        booking.status === 'confirmed' 
                                            ? styles.confirmed 
                                            : styles.pending
                                    }`}>
                                        {booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {bookings.length === 0 && (
                    <div className={styles.emptyMessage}>
                        Aucune réservation trouvée
                    </div>
                )}
            </div>
            <div className={styles.footer}>© 2024 Iberia - Tous droits réservés.</div>
        </div>
    );
};

export default BookingList;