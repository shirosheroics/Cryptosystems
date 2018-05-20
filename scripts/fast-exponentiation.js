//fastModularExponentiation
// finds x^ymod n
function fe() {
  var x=parseInt( document.getElementById('x').value);
  var y=parseInt( document.getElementById('y').value);
  var n=parseInt( document.getElementById('n').value);
  x = x % n;
  var remainder = 1;
  var a = x;

  while(y> 0){
    var leastSignificantBit = y % 2;
    y = Math.floor(y / 2);

    if (leastSignificantBit == 1) {
      remainder = remainder * x;
      remainder = remainder % n;
    }

    a = a * a;
    a = a % n;
  }
  document.getElementById('remainder').innerHTML =  remainder;
};



//document.write("Result is " + function(x,y,n);
