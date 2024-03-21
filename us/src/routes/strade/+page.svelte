<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <title>Display a map on a webpage</title>
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
  <link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet">
  <script src="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js"></script>
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 150px; bottom: 0; width: 100%; }
    form { position: absolute; top: 0; left: 10px; z-index: 1; }
  </style>
</head>
<body>

<form onsubmit="handleSubmit(event)">
  <div>
    <label for="startingLatitude">Starting Latitude:</label>
    <input type="text" id="startingLatitude" required>
  </div>
  <div>
    <label for="startingLongitude">Starting Longitude:</label>
    <input type="text" id="startingLongitude" required>
  </div>
  <div>
    <label for="destinationLatitude">Destination Latitude:</label>
    <input type="text" id="destinationLatitude" required>
  </div>
  <div>
    <label for="destinationLongitude">Destination Longitude:</label>
    <input type="text" id="destinationLongitude" required>
  </div>
  <button type="submit">Submit</button>
</form>

  <div id="map"></div>



<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvYmlybzAwIiwiYSI6ImNsdTFxbXkwMzBkaDcycXBkbXU3M29vejQifQ.ZALCogfOtg_4D1muzFxKqA';
  
  function initMap() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    map.addControl(directions, 'top-left');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const startingLatitude = document.getElementById('startingLatitude').value;
    const startingLongitude = document.getElementById('startingLongitude').value;
    const destinationLatitude = document.getElementById('destinationLatitude').value;
    const destinationLongitude = document.getElementById('destinationLongitude').value;
    console.log('Starting Latitude:', startingLatitude);
    console.log('Starting Longitude:', startingLongitude);
    console.log('Destination Latitude:', destinationLatitude);
    console.log('Destination Longitude:', destinationLongitude);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMap();
  });
  
  let url = "https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token="+mapboxgl.accessToken
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error fetching air pollution data:', error));

</script>
<script src='https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css' rel='stylesheet' />

</body>

