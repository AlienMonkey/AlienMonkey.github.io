document.getElementById("id_bussiness_version").innerHTML="Bussiness version: 2018.10.22.0";
document.getElementById("id_button").addEventListener("click",rezolva);
//-----------------------------------------------------------------------------------------
function t_ec2(){
	this.citire=function(){
		this.a=document.getElementById("id_a").value;
		this.b=document.getElementById("id_b").value;
		this.c=document.getElementById("id_c").value;
	}
//-----------------------------------------------------------------------------------------
	this.rezolvare=function(){
		var delta=this.b*this.b-4*this.a*this.c;
		var x1re, x1im, x2re, x2im;
		if(delta>=0){
			x1re=(-this.b+Math.sqrt(delta))/(2*this.a);
			x2re=(-this.b-Math.sqrt(delta))/(2*this.a);
			x1im=x2im=0;
		}
		else{
			x1re=-this.b/(2*this.a);
			x1im=Math.sqrt(-delta)/(2*this.a);
			x2re=-this.b/(2*this.a);
			x2im=-Math.sqrt(-delta)/(2*this.a);
		}
		this.x1={re:x1re, im:x1im};
		this.x2={re:x2re, im:x2im};
	}
//-----------------------------------------------------------------------------------------
	this.afisare=function(){
		document.getElementById("id_x1").innerHTML=this.x1.re+" + "+this.x1.im+"i";
		document.getElementById("id_x2").innerHTML=this.x2.re+" + "+this.x2.im+"i";
	}
}
//-----------------------------------------------------------------------------------------
function rezolva(){
	var ec2=new t_ec2();
	ec2.citire();
	ec2.rezolvare();
	ec2.afisare();
}
}//-----------------------------------------------------------------------------------------