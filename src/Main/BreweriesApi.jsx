import axios from "axios"
const baseURL = 'https://api.openbrewerydb.org/'


//consume api with axios
const apiBreweries = axios.create({
  baseURL: baseURL
});

export default apiBreweries;