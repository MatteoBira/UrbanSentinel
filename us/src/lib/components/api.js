export function fetchAirPollutionData(lat, lon, apiKey) {
    console.log("la funsion è stata eseguita");
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.list[0].main.aqi;
      })
      .catch(error => {
        console.error('Error fetching air pollution data:', error);
        throw error; // re-throwing the error for proper handling
      });
  }
  
  