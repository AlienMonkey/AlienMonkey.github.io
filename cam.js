document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.11.12.0";
document.getElementById("id_button").addEventListener("click", start);
//--------------------------------------------------------------------------------------------
function on_success(e){
	document.getElementById("id_video").srcObject=e;
}
//--------------------------------------------------------------------------------------------
function on_failure(e){
	alert("Eroare conectare");
}
//--------------------------------------------------------------------------------------------
function start(){
	var c={audio: true, vidio: true}
	navigator.mediaDevices.getUserMedia().then(on_success).catch(on_failure);
}
//--------------------------------------------------------------------------------------------