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
  const latitude = 31.230391; 
  const longitude = 121.473701; 

  let val = null; // Initialize val here
  fetchAirPollutionData(latitude, longitude, apiKey)
    .then(aqi => {
      console.log('Air quality index:', aqi);
      val = aqi; // Set val inside the then callback
      console.log(val)
      let categoryIndex=2;
      if (val==5){
         categoryIndex=0
      }
      if (val==4){
         categoryIndex=1
      }
      if (val==3){
         categoryIndex=2
      }
      if (val==2){
         categoryIndex=3
      }
      if (val==1){
         categoryIndex=4
      }
      // Update the HTML with descriptive categories
      const categories = ['Very Bad', 'Bad', 'Moderate', 'Good', 'Very Good'];
      categoryIndex = Math.floor(Math.random()*5); 
      document.querySelector('.sh').innerText = `Air quality index: ${categories[categoryIndex]}`;
    })
    .catch(error => console.error('Failed to fetch air pollution data:', error));
</script>
<body>
<h1 class="sh">Loading...</h1>
<a href="../strade"><button class="but">Go back</button></a>
</body>
<style>
  body {
      background-color: black;
  }
  .sh {
      margin-left: 15%;
      margin-top: 15%;
      color: white;
      font-size: 70px;
  }
  .but {
    font-family: Georgia;
    background-color: rgba(0, 0, 1, 0);
    border: 2px solid white;
    color: white;
    padding: 12px 28px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    position: absolute; /* Position the button absolutely */
    bottom: 40px;
    left: 50%; /* Center the button horizontally */
    transform: translateX(-50%); /* Center the button horizontally */
    z-index: 2; /* Set z-index to 2 to place buttons above video */
  }

  .but:hover {
    background-color: white;
    color: #000000;  
  }
</style>
