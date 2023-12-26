import axios from "axios";
import dayjs from "dayjs";

const { CancelToken } = axios;


const flightsearch = (input) => {
  console.log("The input is : " + input);
  if (input) {
    try {
      const source = CancelToken.source();
      const request = axios.get(`http://localhost:1338/api/city-search?keyword=${input}`, {
        cancelToken: source.token,
      });
      return {
        async process(callback) {
          request.then((response) => {
            const json = response.data;

            if (json && json.data) {
              callback(
                json.data.map(({ address }) => {
                  return {
                    city: address.cityName,
                    code: address.cityCode,
                    country: address.countryName,
                    state: address.stateCode,
                  };
                })
              );
            }
          });
        },
        cancel() {
          source.cancel();
        },
      };
    } catch (error) {
      console.error(error);
    }
  }
  return {
    process() {
      return [];
    },
    cancel() {},
  };
};

const citySearch = async(searchTerm) =>{  
  return await axios.get(`/api/city-search?keyword=${searchTerm}`)             
}


const flightSearch = async(originCityCode,destinationCityCode,departureDate, returnDate, travelClass,
adults, child, infants, maxResult, currencyCode, nonStop) =>{  
return await axios.get(`/api/async-flight-search?originCode=${originCityCode}&
destinationCode=${destinationCityCode}&dateOfDeparture=${departureDate}&
dateOfReturn=${returnDate}&travelClass=${travelClass}&adults=${adults}&
children=${child}&infants=${infants}&max=${maxResult}&currencyCode=${currencyCode}&nonStop=${nonStop}`)             
}

export { flightsearch, citySearch, flightSearch}