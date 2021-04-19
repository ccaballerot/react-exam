export async function getHotels () {
    const url = 'https://basset.free.beeceptor.com/reactjs-test/accommodations';
    // const url = 'http://localhost:5000/hotels';
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
}

export default {
    getHotels
}