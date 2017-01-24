import axios from 'axios'
import 'isomorphic-fetch'

const BEERMAP_API_KEY = '1586428906314affc5ad8d0f0328def9'

// www.brewerydb/developers/docs
const BREWDB_API_KEY = '84b266032fc3574cc3c27babc2b0de54'
const BREWDB_BASE_URL = 'http://api.brewerydb.com/v2'

export const INPUT_UPDATE = 'INPUT_UPDATE'
export const inputUpdate = ({ prop, value }) => ({
  type: INPUT_UPDATE,
  payload: { prop, value }
})

/********************************************************
           Brewery Actions
*********************************************************/
// export const fetchBreweryLocations = (name = '', location = 'Seattle') => dispatch => {
//   console.log('fetchBreweryLocations: ', name, ' ', location);
//   // const url = `${BREWDB_BASE_URL}/locations/?key=${BREWDB_API_KEY}&locality=${location}`
//   const url = 'http://api.brewerydb.com/v2/locations/?key=84b266032fc3574cc3c27babc2b0de54&locality=Seattle'
//   axios.get(url)
//     .then(response => console.log(response))
//     .catch(error => console.log('Error: ', error.errorMessage));
// };

export const fetchBreweryLocations = (name = '', location = 'Seattle') => dispatch => {
  console.log('fetchBreweryLocations: ', name, ' ', location);
  // const url = `${BREWDB_BASE_URL}/locations/?key=${BREWDB_API_KEY}&locality=${location}`
  const url = 'http://api.brewerydb.com/v2/locations/?key=84b266032fc3574cc3c27babc2b0de54&locality=Seattle'
  fetch(url, {
    Headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => console.log(response))
    .catch(error => console.log('Error: ', error));
};
