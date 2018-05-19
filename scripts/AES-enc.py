import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('searchbox')
print '''<html>
<head><title>My first Python CGI app</title></head>
<body>
<p>Hello, 'world'!</p>
</body>
</html>'''
#print searchterm
#document.getElementById('display').innerHTML = searchterm;
