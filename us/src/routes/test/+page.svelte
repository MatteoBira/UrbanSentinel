<script>
    function fetchAirPollutionData(lat, lon, apiKey) {
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
  
    // Example usage
    const apiKey = '3c5159d38cd1093228cc3102fe001a36'; // Replace with your actual API key
    const latitude = 31.230391; // Example latitude
    const longitude = 121.473701; // Example longitude
  
    fetchAirPollutionData(latitude, longitude, apiKey)
      .then(aqi => console.log('Air quality index:', aqi))
      .catch(error => console.error('Failed to fetch air pollution data:', error));
  </script>
  
  <h1>Daje</h1>
