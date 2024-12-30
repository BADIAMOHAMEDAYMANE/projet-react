const flightsUrl = 'http://localhost:3000/api/bookings';

const token = localStorage.getItem('token');

export async function getMyBookings() {
    const response = await fetch(`${flightsUrl}/my-bookings`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json()
}


export async function registerBooking(booking) {
    const response = await fetch(`${flightsUrl}/`,{
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
    });
    return await response.json()
}