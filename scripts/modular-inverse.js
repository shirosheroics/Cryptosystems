<script>
// finds
//   a^-1 mod p
function inverseMod( a, m )
{
   for ( var x = 1; x <= m; ++x )
   {
        if ( ( ( a * x ) % m ) == 1 )
        {
            return x;
        }
   }
   return 0;
}

function test( A, M )
{
    var X = inverseMod( A, M );
    document.write("The value of a^-1 mod p = <b>"
                   + A + "^-1 mod " + M + "</b> is "
                   + ( X == 0 ? "undefined" : X ) + "<br/>");
}

 var a = prompt("Enter the value of a"); //input a
 var p = prompt("Enter the value of P"); //input p
 test(a,p);
</script>
