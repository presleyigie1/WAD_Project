//presley
//https://developers.google.com/maps/documentation/javascript/directions#TransitOptions
//https://docs.mapbox.com/mapbox-gl-js/guides/install/
//mapbox cdn package
//access token for mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicHJlc2xleWlnaWUxIiwiYSI6ImNsYjR0dGFqMzAwMzAzb3BpbWVjd2hqeDgifQ.QIGCXhHdmiUbL3EsflmwVA';

const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v12', // style URL (street view)
    center: [-6.260310, 53.349804], // starting position [lng, lat]
    zoom: 12.5, // starting zoom
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav)

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/cycling'
  });
  
  
  map.addControl(directions, 'top-left');



/*js for google map api (not in use)
function initMap(){
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var dublin = new google.maps.LatLng(53.349804, -6.260310);

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom:14,
        center: dublin,
    })
    directionsRenderer.setMap(map);
    
    findRouteAndDisplay(directionsService, directionsRenderer);
    
}


function findRouteAndDisplay(directionsService,directionsRenderer){
    const mode = "TRANSIT"

    directionsService
    .route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,

        travelMode: google.maps.TravelMode['TRANSIT'],
    })
    .then((response) =>{
        directionsRenderer.setDirections(response);
    })
    .catch((e)=> window.alert("Journey Request failed," + status));
}*/
