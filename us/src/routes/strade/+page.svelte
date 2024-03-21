<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Display a map on a webpage</title>
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
  <link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet">
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

<script src="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js"></script>
<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvYmlybzAwIiwiYSI6ImNsdTFxbXkwMzBkaDcycXBkbXU3M29vejQifQ.ZALCogfOtg_4D1muzFxKqA';

  function initMap() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
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
</script>
</body>
</html>
