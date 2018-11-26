document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.11.26.4";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);
canvas.addEventListener("touchmove", on_touch_move);

var canvas_boundig_rect = canvas.getBoundingClientRect();

function on_touch_start(e){
	for(var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches[i].pageX - canvas_boundig_rect.left,
					e.changedTouches[i].pageY - canvas_boundig_rect.top, 10, 0, 2 * Math.PI);
		context.stroke();
	}
}

function on_touch_move(e){
	e.preventDefault();
	for(var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches[i].pageX - canvas_boundig_rect.left,
					e.changedTouches[i].pageY - canvas_boundig_rect.top, 10, 0, 2 * Math.PI);
		context.stroke();
	}
}