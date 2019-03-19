mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lcyIsImEiOiJjanRmd3o2dnAwOGFuNDNwZm82cTZ2eGgyIn0.4wmZQIg2RbpZtWZfR-2PLA';

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [117.120885, -8.888218], // starting position as [lng, lat]
  zoom: 6.5
});

var popup = new mapboxgl.Popup()
.setHTML('<h3>Selamat Siang Bali</p>');

var marker = new mapboxgl.Marker()
.setLngLat([115.274438, -8.673202])
.setPopup(popup)
.addTo(map);