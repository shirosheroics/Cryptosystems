
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

function test( )
{
    var a = parseInt( document.getElementById('a2').value);
    var m = parseInt( document.getElementById('b2').value);
    var x = inverseMod( a, m );
      document.getElementById('display2').innerHTML = x;
      //
        //           + A + "^-1 mod " + M + "</b> is "
          //         + ( X == 0 ? "undefined" : X ) + "<br/>");
}
