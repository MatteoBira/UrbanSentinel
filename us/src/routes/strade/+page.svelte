<!DOCTYPE html>
  <head>
    <meta charset='utf-8' />
    <title>airq</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js'>
    </script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css' rel='stylesheet'/>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: black;
      }

      #map {
        position: absolute;
        top: 100px;
        bottom: 0;
        width: 1000px;
        height: 500px;
        border-radius: 20px;
        margin-left: 210px;
        margin-top: 30px;
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
  </head>
  <body>
      
    <div id='airQuality'></div>
    <div id='map'></div>
    <a href='./test'><button class="but">Calculate</button></a>
    
    <script>
      const airKey = '10025b0589b068a1acf38c14565b93ac'; // Replace with your actual API key
      mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvYmlybzAwIiwiYSI6ImNsdTFxbXkwMzBkaDcycXBkbXU3M29vejQifQ.ZALCogfOtg_4D1muzFxKqA';

      let airQ;
      function fetchAirPollutionData(lat, lon, apiKey) {
        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
        fetch(url)
          .then(response => response.json())
          .then(data => {
            return data.list[0].main.aqi
          })
          .catch(error => console.error('Error fetching air pollution data:', error));
    }


  // Example usage
  
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-122.662323, 45.523751], // starting position
  zoom: 12
});
// set the bounds of the map
const bounds = [
  [-123.069003, 45.395273],
  [-122.303707, 45.612333]
];
map.setMaxBounds(bounds);

// an arbitrary start will always be the same
// only the end or destination will change
const start = [-122.662323, 45.523751];

// create a function to make a directions request
async function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  //let lat = end[0];
  //let lon = end[1];
  airQ = fetchAirPollutionData(end[1],end[0],airKey);
  document.getElementById('airQuality').innerText = `Air Quality: ${airQ}`;
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
}
map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });

  map.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }

  getRoute(coords);
});
});

    </script>
  </body>
