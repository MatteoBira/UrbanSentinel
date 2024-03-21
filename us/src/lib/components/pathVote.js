function fetchAirPollutionData(lat, lon, apiKey) {
    console.log("la funsion è stata eseguita")
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
   
    fetch(url)
       .then(response => response.json())
       .then(data => {
         console.log(data);
         return data.list[0].main.aqi
       })
       .catch(error => console.error('Error fetching air pollution data:', error));
}


// Example usage
const apiKey = '0e466079af4ea422a127325ec4aaa8b6'; // Replace with your actual API key
const latitude = 50.0; // Example latitude
const longitude = 50.0; // Example longitude

fetchAirPollutionData(latitude, longitude, apiKey);
