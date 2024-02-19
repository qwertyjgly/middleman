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
    
if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log('Received body:', body);
            fetchData(body).then((result) => {
                console.log('Result:', result);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            }
        });
}
    
    res.writeHead(200);
    res.end();
    return;
}).listen(8080);

async function fetchData(command) {
    const data = { query: command };

    try {
        let response = await fetch("http", {
            //let response = await fetch("http://qwertyjgly.github.io/middleman/requesthandler.js", {
            method:"POST",
            mode:"cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Origin": "http://localhost:63342",
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }

        const responseData = await response.text();

        try {
            console.log(response);
            return JSON.parse(responseData);
        } catch (e) {
            console.error('This does not look like valid JSON: ', responseData);
            return null;
        }
    } catch (e) {
        console.error('Fetch failed: ', e);
        return null;
    }
}

