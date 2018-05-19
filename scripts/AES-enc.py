import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('searchbox')
document.getElementById('display').innerHTML = searchterm;
