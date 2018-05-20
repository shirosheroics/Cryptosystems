//find the gcd(a,b)
//two integers a and b are relatively prime if gcd(a,b)=1
function gcd(){
  var r0;
  var r1;
  var r2;

  r0= parseInt( document.getElementById('a1').value);
  r1= parseInt( document.getElementById('b1').value);
  r2=r0%r1;
  while(r2){
    r0=r1;
    r1=r2;
    r2=r0%r1;
  }
  if(r1>0){
    document.getElementById('display1').innerHTML = r1;
  }

  else {
  document.getElementById('display1').innerHTML =  -r1;
  }

}
