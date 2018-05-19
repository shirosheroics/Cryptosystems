import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('searchbox')
print searchterm
#document.getElementById('display').innerHTML = searchterm;
