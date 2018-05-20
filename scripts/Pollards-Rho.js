//Pollard's Rho
function gcd(x,y){

if (y == 0) {return x;}
else {return gcd(y,x%y);}
}

function f(x,n){
	return (x*x+3) %n; }

function pollardrho(){
	//document.write("A B GCD");
	var num = parseInt( document.getElementById('num').value);
	var x=2;
	var y=2;
	var d=1;
	while (d==1){
		x=f(x,num)
		y=f(f(y,num,),num)
		d=gcd(Math.abs(x-y),num)
		//document.write(+ x, +y,+d);
}
		if (d>1 && num>d){
			document.getElementById('result').innerHTML = d;}
		(if d==num){
			document.getElementById('result').innerHTML = -1 ;}

}
