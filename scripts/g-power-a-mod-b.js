<script>
//find a^b mod n by giving the value of a,b and p //
function Power()
{
  var a = document.getElementById('a').value
  var b = document.getElementById('b').value
  var n = document.getElementById('c').value

  var x=1;
  a=a % n;
   while(b>0){
     if((b & 1)==1){
       x=(x*a)%n;
     }
     b=b>>1;
     a=(a*a)%n;
   }
   window.alert("yes!");
   document.getElementById('display').innerHTML = x;
   //return x;
}


//=prompt("Enter the value of g: ");  //input

//=prompt("Enter the value of power i-e a: "); //input

//=prompt("Enter the value of b: "); //input
//document.write("Result is " + Power(a,b,n));

</script>
