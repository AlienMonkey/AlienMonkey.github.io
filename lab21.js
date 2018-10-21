document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.10.15.2.1";
//-----------------------------------------------------------------------------------------
function citire(){
	var _a=document.getElementById("id_a").value;
	var _b=document.getElementById("id_b").value;
	var _c=document.getElementById("id_c").value;
	var coeficienti={a:_a, b:_b, c:_c};
	return coeficienti;
}
//-----------------------------------------------------------------------------------------
function rezolvare(coeficienti){
	var delta=coeficienti.b*coeficienti.b-4*coeficienti.a*coeficienti.c;
	var x1re, x1im, x2re, x2im;
	if(delta>=0){
		x1re=(-coeficienti.b+Math.sqrt(delta))/(2*coeficienti.a);
		x2re=(-coeficienti.b-Math.sqrt(delta))/(2*coeficienti.a);
		x1im=x2im=0;
	}
	else{
		x1re=-coeficienti.b/(2*coeficienti.a);
		x1im=Math.sqrt(-delta)/(2*coeficienti.a);
		x2re=-coeficienti.b/(2*coeficienti.a);
		x2im=-Math.sqrt(-delta)/(2*coeficienti.a);
	}
	var x1={re:x1re, im:x1im};
	var x2={re:x2re, im:x2im};
	var solutii={x1:x1, x2:x2};
	return solutii;
}
//-----------------------------------------------------------------------------------------
function afiseaza(){
	document.getElementById("id_x1").innerHTML=solutii.x1.re+" + "+solutii.x1.im+"i";
	document.getElementById("id_x2").innerHTML=solutii.x2.re+" + "+solutii.x2.im+"i";
}
//-----------------------------------------------------------------------------------------
function rezolva(){
	var coeficienti=citire();
	var solutii=rezolvare(coeficienti);
	afiseare(solutii);
}//-----------------------------------------------------------------------------------------