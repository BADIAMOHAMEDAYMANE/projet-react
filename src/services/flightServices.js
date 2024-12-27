const flightsUrl = 'http://localhost:3000/api/flights';

export async function getFlightsByOriginAndDepartureandDate(departure,arrival,date) {
    const response = await fetch(`${flightsUrl}/search?departure=${departure}&arrival=${arrival}&date=${date}`);
    return await response.json()
}