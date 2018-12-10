document.getElementById("id_logic_version").innerHTML="Bussiness version: 2018.12.10.0";
document.getElementById("id_start").addEventListener("click", get_position);

function get_position(){
	navigator.geolocation.getPosition(on_gps_ok, on_error);
}

function on_gps_ok(e){
	document.getElementById("id_lat").innerHTML = e.coords.latitude;
	document.getElementById("id_long").innerHTML = e.coords.longitude;
	document.getElementById("id_acc").innerHTML = e.coords.accuracy;
}

function on_error(e){
	alert("error" + e.error);
}