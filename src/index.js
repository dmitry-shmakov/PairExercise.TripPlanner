console.log('hello');

const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoiZHNobWFrb3YiLCJhIjoiY2pvZzgyN3FnMGNieTN2cGlicjhlM2hubyJ9.XdjFZ6z_T0hkaTOR522Adg'

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const div = document.createElement('div');
div.style.width = '32px';
div.style.height = '39px';
div.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(div).setLngLat([-74.009, 40.705]).addTo(map);