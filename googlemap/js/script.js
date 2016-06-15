rendererOptions = {
	draggable: true,
	preserveViewport:false
};
var directionsDisplay = 
	new google.maps.DirectionsRenderer(rendererOptions);
var directionsService = 
	new google.maps.DirectionsService();
var map;

function initialize() {
	var zoom = 7;
	var mapTypeId = google.maps.MapTypeId.ROADMAP

	var opts = {
		zoom: zoom,
		mapTypeId: mapTypeId
	};
	map = new google.maps.Map
	(document.getElementById("map_canvas"),opts);
	directionsDisplay.setMap(map);

	google.maps.event.addListener(directionsDisplay,
								  'directions_changed', function(){
	});
	calcRoute();
}

function calcRoute() {
	var request = {
		origin: new google.maps.LatLng( 35.710063 , 139.8107 ), // スカイツリーの緯度経度
		destination: new google.maps.LatLng( 35.658581 , 139.745433 ), // 東京タワーの緯度経度
		travelMode: google.maps.DirectionsTravelMode.WALKING,
		unitSystem: google.maps.DirectionsUnitSystem.METRIC,
		optimizeWaypoints: true,
		avoidHighways: false,
		avoidTolls: false
	};
	directionsService.route(request,
							function(response,status){
		if (status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);}
	});
}