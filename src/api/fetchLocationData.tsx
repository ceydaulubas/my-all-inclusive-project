import axios from 'axios';

const fetchLocationData = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching location data');
  }
};

export { fetchLocationData };
