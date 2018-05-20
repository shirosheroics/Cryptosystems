<script>
//find the gcd(a,b)
//two integers a and b are relatively prime if gcd(a,b)=1
function gcd(a,b){
  var r0;
  var r1;
  var r2;

  r0=a;
  r1=b;
  r2=r0%r1;
  while(r2){
    r0=r1;
    r1=r2;
    r2=r0%r1;
  }
  if(r1>0){
    return r1;
  }

  else {
    return -r1;
  }
}
var a=prompt("Enter the value of a: "); // input a
var b=prompt("Enter the value of b: "); // input b

document.write("The greater common divisor between these two integers is " + gcd(a,b));

</script>
