
        function Power()
        {
          var a = parseInt( document.getElementById('a').value);
          var b = parseInt( document.getElementById('b').value);
          var n = parseInt( document.getElementById('c').value);

          var x=1;
          a=a % n;
           while(b>0){
             if((b & 1)==1){
               x=(x*a)%n;
             }
             b=b>>1;
             a=(a*a)%n;
           }
           document.getElementById('display').innerHTML = x;
           //return x;
        }
