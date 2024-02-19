var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');

var queryresult
var body

/*
var con = mysql.createConnection({
        host: "localhost",
        user: "middleman",
        password: "jsinterface",
        database: "compSAC1"
});
*/

/*const options = {
        key: fs.readFileSync('server-key.pem'),
        cert: fs.readFileSync('server-csr.pem')
};*/

/*
con.connect(function(err) {
        if (err) throw err;
        console.log("MySQL interface operational");
});
*/

/*https.createServer({
        key: fs.readFileSync('server-key.pem'),
        cert: fs.readFileSync('server-cert.pem')
},
function (req, res) {*/
//http.createServer( function (req, res) {
    http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Referrer-Policy', 'no-referrer');

    if (req.method === 'OPTIONS') {
        // This is a preflight request. Respond successfully:
        res.writeHead(200);
        res.end();
        return;
    }

        res.writeHead(200);
        res.end();
        return;
}).listen(8080);

