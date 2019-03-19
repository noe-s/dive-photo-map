mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lcyIsImEiOiJjanRmd3o2dnAwOGFuNDNwZm82cTZ2eGgyIn0.4wmZQIg2RbpZtWZfR-2PLA';

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/noes/cjtg6kjaz03e81fqb4qif7z2g', // style URL
  center: [118.32950023407346, -6.300759521738627], // starting position as [lng, lat]
  zoom: 5.5

});

var popup = new mapboxgl.Popup({anchor: 'bottom'}) 
  .setHTML('<h3>Photos Taken in Bali, Indonesia</h3>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Bali/clown.jpg" alt="First slide">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/clown2.jpg" alt="Second slide">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/ray.jpg" alt="Third slide">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/temple.jpg" alt="Third slide">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/nudis.jpg" alt="Third slide">\
        </div>\
      </div>\
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
        <span class="sr-only">Previous</span>\
      </a>\
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
        <span class="carousel-control-next-icon" aria-hidden="true"></span>\
        <span class="sr-only">Next</span>\
      </a>\
    </div>'
    )
  
var sanur = new mapboxgl.Marker() //Sanur
  .setLngLat([115.274438, -8.673202])
  .setPopup(popup)
  .addTo(map);

//<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li><li data-target="#carouselExampleIndicators" data-slide-to="3"></li><li data-target="#carouselExampleIndicators" data-slide-to="4"></li><li data-target="#carouselExampleIndicators" data-slide-to="5"></li><li data-target="#carouselExampleIndicators" data-slide-to="6"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img class="d-block w-100" src="./img/Bali/clown.jpg" alt="First slide"></div><div class="carousel-item"><img class="d-block w-100" src="./img/Bali/clown2.jpg" alt="Second slide"></div><div class="carousel-item"><img class="d-block w-100" src="./img/Bali/temple.jpg" alt="Third slide"></div></div><div class="carousel-item"><img class="d-block w-100" src="./img/Bali/ray.jpg" alt="Second slide"></div><div class="carousel-item"><img class="d-block w-100" src="./img/Bali/moray.jpg" alt="Second slide"></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a</div>'

// var nusaPenida = new mapboxgl.Marker() //Nusa Penida
//   .setLngLat([115.453450, -8.708357])
//   // .setPopup(popup)
//   .addTo(map);
  
// var padangBai = new mapboxgl.Marker() //Padang Bai
//   .setLngLat([115.510227, -8.532714])
//   // .setPopup(popup)
//   .addTo(map);

// var amed = new mapboxgl.Marker() //Amed
//   .setLngLat([115.641725, -8.333528])
//   // .setPopup(popup)
//   .addTo(map);
  
// var tulamben = new mapboxgl.Marker() //Tulamben
//   .setLngLat([115.593037, -8.274202])
//   // .setPopup(popup)
//   .addTo(map);

var giliAir = new mapboxgl.Marker() //Gili Air
  .setLngLat([116.076526, -8.354627])
  // .setPopup(popup)
  .addTo(map);
  
var komodo = new mapboxgl.Marker() //Komodo
  .setLngLat([119.542719, -8.622536])
  // .setPopup(popup)
  .addTo(map);
  
var wangiWangi = new mapboxgl.Marker() //WangiWangi
  .setLngLat([123.521366,-5.264015])
  // .setPopup(popup)
  .addTo(map);

map.on('click',function(e){
  console.log(e.lngLat);
});