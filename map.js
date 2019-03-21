mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lcyIsImEiOiJjanRmd3o2dnAwOGFuNDNwZm82cTZ2eGgyIn0.4wmZQIg2RbpZtWZfR-2PLA';

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/noes/cjtg6kjaz03e81fqb4qif7z2g', // style URL
  center: [118.32950023407346, -6.300759521738627], // starting position as [lng, lat]
  zoom: 5.0
});
map.scrollZoom.disable();
map.dragPan.disable();
//Popups
var popupBali = new mapboxgl.Popup({anchor: 'bottom', }) 
  .setHTML('<h4>Photos Taken in Bali, Indonesia</h4>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Bali/clown.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/clown2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/ray.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/temple.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Bali/nudis.jpg">\
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
  );


var popupGili = new mapboxgl.Popup({anchor: 'bottom', }) 
  .setHTML('<h4>Photos Taken at Gili Air</h4>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Gilis/og-turtle.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/cuttle.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/cuttle-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/mantis.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/ray-shark.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/scorpion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/scorpion-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/trash-fish.jpg">\
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
  );

var popupKomodo = new mapboxgl.Popup({anchor: 'bottom', }) 
  .setHTML('<h4>Photos Taken in Komodo National Park</h4>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Komodo/lion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark-3.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/croc.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/nemo-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/nemo.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/reef.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/reef-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/batfish.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark-3.jpg">\
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
  );

  var popupWangi = new mapboxgl.Popup({anchor: 'right', }) 
  .setHTML('<h4>Photos Taken at Wangi Wangi (Sulawesi)</h4>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Wangi-Wangi/nudi.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Wangi-Wangi/scorpion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Wangi-Wangi/orangutan.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Wangi-Wangi/snake.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Wangi-Wangi/lion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Wangi-Wangi/ray.jpg">\
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
  );

var bali = new mapboxgl.Marker() //Sanur
  .setLngLat([115.274438, -8.673202])
  .setPopup(popupBali)
  .addTo(map);

var giliAir = new mapboxgl.Marker() //Gili Air
  .setLngLat([116.076526, -8.354627])
  .setPopup(popupGili)
  .addTo(map);
  
var komodo = new mapboxgl.Marker() //Komodo
  .setLngLat([119.542719, -8.622536])
  .setPopup(popupKomodo)
  .addTo(map);
  
var wangiWangi = new mapboxgl.Marker() //WangiWangi
  .setLngLat([123.521366,-5.264015])
  .setPopup(popupWangi)
  .addTo(map);

//Useful Functions
// map.on('click',function(e){
//   console.log(e.lngLat);
// });