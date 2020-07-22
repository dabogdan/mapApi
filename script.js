
	var Lviv_PPO = "<a href=\"https://lviv.gp.gov.ua/ua/index.html\" target=\"_blank\">Lviv Public Prosecution Office <br> <img class=\"ppoImage\" src=\"images/PPO.jpeg\"></a><br><p> We are here to ensure that you will visit our office infrequently, Herr Rolofs.</p>";
	var Lviv_SSU = "<a href=\"https://ssu.gov.ua/contacts/upravlinnia\" target=\"_blank\">State Security Service Office <br> <img class=\"mapImage\" src=\"images/ssu.jpg\"></a><br><p> We are here to ensure that you will spend your time wisely in Ukraine, Herr Rolofs.</p>";

	var rolofs = '<a href=\"https://marcus-rolofs.com\"><br> NaLevo International <br> <img class=\"rolofs\" src=\"images/rolofs.jpg\"></a>';


	var mymap = L.map('mapid').setView([49.837, 24.032], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);






// marker!


// Lviv PPO
	
	const ppoMarker = L.marker([49.83675, 24.03211]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />This is the " + Lviv_PPO).openPopup();

// Lviv SSU

	const ssuMarker = L.marker([49.831588, 24.019117]).addTo(mymap)
		.bindPopup("<b>Welcome to us!</b><br />This is the " + Lviv_SSU);


// circle
	// L.circle([51.508, -0.11], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

// polygon
	const marcusPolygon = L.polygon([
		[49.838425, 24.038429],
		[49.820044, 24.023666],
		[49.820708, 23.987617],
		[49.842854, 24.02195]
	]).addTo(mymap).bindPopup("Das ist einen Rolofskyi Rayon." + rolofs);

// popup
	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

