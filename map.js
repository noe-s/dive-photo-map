mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lcyIsImEiOiJjanRmd3o2dnAwOGFuNDNwZm82cTZ2eGgyIn0.4wmZQIg2RbpZtWZfR-2PLA';

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [117.120885, -8.50000], // starting position as [lng, lat]
  zoom: 6.5
});

var popup = new mapboxgl.Popup()
  .setHTML('<h3>Selamat Siang Bali</p>');

var sanur = new mapboxgl.Marker() //Sanur
  .setLngLat([115.274438, -8.673202])
  .setPopup(popup)
  .addTo(map);

var nusaPenida = new mapboxgl.Marker() //Nusa Penida
  .setLngLat([115.453450, -8.708357])
  // .setPopup(popup)
  .addTo(map);
  
var padangBai = new mapboxgl.Marker() //Padang Bai
  .setLngLat([115.510227, -8.532714])
  // .setPopup(popup)
  .addTo(map);

var amed = new mapboxgl.Marker() //Amed
  .setLngLat([115.641725, -8.333528])
  // .setPopup(popup)
  .addTo(map);
  
var tulamben = new mapboxgl.Marker() //Tulamben
  .setLngLat([115.593037, -8.274202])
  // .setPopup(popup)
  .addTo(map);

var giliAir = new mapboxgl.Marker() //Gili Air
  .setLngLat([116.076526, -8.354627])
  // .setPopup(popup)
  .addTo(map);
  
var komodo = new mapboxgl.Marker() //Komodo
  .setLngLat([119.542719, -8.622536])
  // .setPopup(popup)
  .addTo(map);
  
var sulawesi = new mapboxgl.Marker() //WangiWangi
  .setLngLat([124.849215, 1.617057])
  // .setPopup(popup)
  .addTo(map);

