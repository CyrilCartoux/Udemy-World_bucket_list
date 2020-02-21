let map;
let panorama;
const panoramaElement = document.getElementById("panorama");
const backToMapButton = document.getElementById("back-to-map");

const resetMapButton = document.getElementById('reset-map');


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 48.858245, lng: 2.294515},
	  zoom: 3,
	  mapTypeId: "satellite"
	});

	panorama = new google.maps.StreetViewPanorama(
      document.getElementById('panorama'), {
        position: {lat: 48.858245, lng: 2.294515},
        pov: {
          heading: 34,
          pitch: 10
        }
      });

	addMapListener();
	panoramaElement.style.display = "none";	
	backToMapButton.style.display = "none";
}

function addMapListener() {
	resetMapButton.addEventListener("click", resetMap);
	backToMapButton.addEventListener("click", backToMap);
}

function addMarkerOnMap(dream) {
		const marker = new google.maps.Marker({
		position: dream.coordinates,
		map: map,
		icon: dream.done ? "./dist/images/marker-done.png" : "./dist/images/marker.png"
	});

		marker.addListener("click", function () {
			zoomOn(marker.getPosition())
		})	
}

function zoomOn(position){
	map.setZoom(20);
	map.setCenter(position);
	map.setMapTypeId("satellite");
}

function resetMap() {
	map.setZoom(3);
	map.setCenter({lat: 48.858245, lng: 2.294515});
	map.setMapTypeId("satellite");
}

function backToMap() {
	panoramaElement.style.display = "none";
	backToMapButton.style.display = "none";
	resetMapButton.style.display = "block";
}

function visitDreamOnMap(position){
	panorama.setPosition(position);
	panoramaElement.style.display = "block";
	backToMapButton.style.display = "block";
	resetMapButton.style.display = "none";
}

export {initMap, addMarkerOnMap, visitDreamOnMap};