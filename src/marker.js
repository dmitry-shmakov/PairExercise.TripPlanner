// const mapboxgl = require('./index.js')
const mapboxgl = require("mapbox-gl");
const map = require('./index');



module.exports = function (type, coord) {
  const div = document.createElement('div');
  div.style.width = '32px';
  div.style.height = '39px';

  if (type === 'activity') {
    div.className = 'activityIcon';
    div.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'hotel') {
    div.className = 'hotelIcon';
    div.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    div.className = 'restaurantIcon';
    div.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  return new mapboxgl.Marker(div).setLngLat(coord);
};
