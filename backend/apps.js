var express = require('express');
var database = require('./database.js')
var app = express();
var port = process.env.PORT || 1337;
var path = require('path');
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));
const connectionstring = process.env.DATABASE_CONNECTION_URL || 'postgres://localhost:5432/paytential'


console.log("Carry on executing");
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
var path = require('path');

//uses the public folder as a path for the front end html
app.use(express.static(path.join(__dirname, 'public')));


//Routes
//grabs and sends the HTML file up front
app.get('/', function (req, res) {
  
  res.sendFile(path.join(__dirname + '/frontend/html/index.html'));
  
})

app.get('/help-page.html', function (req, res) {
  
  res.sendFile(path.join(__dirname + '/frontend/html/help-page.html'));
  
})

app.get('/test', function (req, res) {
  
  res.sendFile(path.join(__dirname + '/frontend/html/test.html'));
  
})

app.get('/sqltest', function (req, res) {
  
  res.sendFile(path.join(__dirname + '/frontend/html/sqltest.html'));
  
})

app.get('/sqltest2',function(req,res){

  var sql = `
   SELECT * FROM employees;
  `;
   database.executeQuery(sql);
   return (JSON.stringify(req.body))
   
});

//queries
app.post('/sqltest2', function(req,res){
  var sql = `
   SELECT * FROM employees;
  `;
   database.executeQuery(sql);
  console.log('posted to /sqltest');
  console.log(JSON.stringify(req.body));
  return res.send("success");
});



app.get('frontend/index', function(req,res){
  console.log('app / hello-world requested');
  return res.render('index.html');
});

app.get('/trainList2', function(req,res){
  console.log('app / trains requested');
  return res.render('trainList2.html');
});


// This is my URL endpoint which is /test.html


var pg = require("pg");

var conString = "pg://postgres:password@localhost/paytential";

var client = new pg.Client(conString);
client.connect();

// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);

var query = client.query("SELECT * FROM employees;");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {

    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});









app.get('/helloworld', function(req,res){
  console.log('app helloworld/ requested');
  return res.render("helloworld.html");
});

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});