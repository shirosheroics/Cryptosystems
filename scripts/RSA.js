function encrypt() {
var p = parseInt(document.getElementById("p").value);
var q = parseInt(document.getElementById("q").value);
var n = p * q;
var e = parseInt(document.getElementById("e").value);


  // d = inverse(p,q,e);
  var nLength = n.toString().length;


  var stringMessage =
      document.getElementById("text").value ;

  var l = stringMessage.length;

  var numericalMessage =
      stringToNumerals(stringMessage,l);


  block(nLength,numericalMessage,e,n);
}

function stringToNumerals(s,l) {
  var numericalMessage ="";
  var a;
  for( var i = 0; i<l;i++) {
     a = s.charCodeAt(i);
    if(a!="32") {
      if(a>="65" && a<="90") {
       a = a - 64;
       a = pad(a);
      }
      else if(a>="97" && a<="122") {
       a = a - 96;
       a = pad(a);
      }
    }

      else a = "00";

      numericalMessage = numericalMessage + a;
  }
  return numericalMessage;
}

function pad(a) {
  if(a<10)
    a = "0" + a;

  return a;
}

function inverse(p,q,e) {
  var fi = (p-1) * (q-1);
  var d = modInverse(e,fi);

  return d;

}

function modInverse(a, b) {
    a %= b;
    for (var x = 1; x < b; x++) {
        if ((a*x)%b == 1) {
            return x;
        }
    }
}

function block(n,str,e,nVal) {

var block1;
var s=str.length;


 s=Math.ceil(s/n);


for( var i=0;i<s;i++){

	block1=str.substring(i*n,(i+1)*n);

if(i==(s-1)){
block1=str.substring((s-1)*n, (s)*n);

var lastzeros=n-block1.length;
var zeros=[];
for(var i=0;i<lastzeros;i++){

block1+= "0";

}
}

var b1=parseInt(block1);

b1=cal(e,b1,nVal);


document.getElementById("encrypted").innerHTML = document.getElementById("encrypted").innerHTML + b1 ;

}
}

function cal(pow,val,MOD){
   if(pow == 0)
      return 1;
   var v = cal(pow/2, val, MOD);
   if(pow % 2 == 0)
      return (v*v) % MOD;
   else
      return (((v*val) % MOD) * v) % MOD;
}
