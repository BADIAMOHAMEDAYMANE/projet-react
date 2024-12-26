const offersUrl = 'http://localhost:3000/api/destinations';


export async function getAllOffers() {
    const response = await fetch(offersUrl)
    return await response.json()
}