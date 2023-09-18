const API_URL = 'https://api.countrystatecity.in/v1/countries';
const HEADER = {
  'X-CSCAPI-KEY': 'dDNuM0h2eUxIaUpCbjBhVThGTU42ZHhCV2VkZTVWU2s0VzN6OERKRg==',
};

const getCountries = async () => {
  try {
    const response = await fetch(API_URL, { headers: HEADER });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getCountryDetails = async (filter: string) => {
  try {
    const response = await fetch(`${API_URL}/${filter}`, { headers: HEADER });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getCountries, getCountryDetails };
