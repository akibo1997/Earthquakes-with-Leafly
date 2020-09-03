var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: pk.eyJ1IjoiYWtpYm8xOTk3IiwiYSI6ImNrZW41aGNqcTA0c20yeGxnNmd6dzcwejcifQ.I9C0_Gb4qjmMeqLgN9FtxQ
  }).addTo(myMap);
  
  var newtry = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson";
  
  d3.json(newtry, function(response) {
  
    console.log(response);
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].location;
  
      if (location) {
        L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
      }
    }
  
  });
  