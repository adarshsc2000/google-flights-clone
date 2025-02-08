import axios from 'axios';

const API_HOST = import.meta.env.VITE_API_HOST;
const API_KEY = import.meta.env.VITE_API_KEY;


export const getNearbyAirports = async () => {
  try {
    const ip = await getIPAddress();
    const [lat, lng] = await getCoordinates(ip);
    let params = {
      lat: lat,
      lng: lng,
      locale: 'en-US'
    };
    let endpoint = '/getNearByAirports';
    return await api(params, endpoint);
  } catch(error) {
    console.error("Error:", error);
  }
};

export const searchAirport = async () => {
  let params = {
    query: 'kerala',
    locale: 'en-US'
  };
  let endpoint = '/searchAirport';
  return await api(params, endpoint);
}

export const searchFlights = async () => {
  let params = {
    originSkyId: 'BAH',
    destinationSkyId: 'COK',
    originEntityId: '95673610',
    destinationEntityId: '95673550',
    cabinClass: 'economy',
    date: '2025-02-08',
    adults: '1',
    sortBy: 'best',
    currency: 'USD',
    market: 'en-US',
    countryCode: 'US'
  };
  let endpoint = '/searchFlights';
  return await api(params, endpoint, 'v2');
};

const api = async (params, endpoint, version='v1') => {
  const options = {
    method: 'GET',
    url: `https://sky-scrapper.p.rapidapi.com/api/${version}/flights${endpoint}`,
    params: params,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const getIPAddress = async () => {
  let response = await fetch("https://api.ipify.org");
  return await response.text();
}

const getCoordinates = async (ip) => {
  let response = await fetch(`http://ip-api.com/json/${ip}`);
  let data = await response.json();
  return [data.lat, data.lon];
}