document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.10.15.1";

function rezolva(){
	//citire
	var a=document.getElementById("id_a").value;
	var b=document.getElementById("id_b").value;
	var c=document.getElementById("id_c").value;
	//rezolvare
	var delta=b*b-4*a*c;
	var x1re, x1im, x2re, x2im;
	if(delta>=0){
		x1re=(-b+Math.sqrt(delta))/(2*a);
		x2re=(-b-Math.sqrt(delta))/(2*a);
		x1im=x2im=0;
	}
	else{
		x1re=-b/(2*a);
		x1im=Math.sqrt(-delta)/(2*a);
		x2re=-b/(2*a);
		x2im=-Math.sqrt(-delta)/(2*a);
	}
	//scriere
	document.getElementById("id_x1").innerHTML=x1re+" + "+x1im+"i";
	document.getElementById("id_x2").innerHTML=x2re+" + "+x2im+"i";
}