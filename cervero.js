const http = require('http');
const json = require('json-server');
const ngrok = require('ngrok');

const host = 'localhost';
const port_json = '5000'
const port = '8080';
const ngroklocal = 'http://localhost:4040/inspect/http'

const requestListener = function(req, res){
    //const ip = res.socket.remoteAddress;
    //const port = res.socket.remotePort;
    res.writeHead(200);
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cervero</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <div id="inicio">
        <h1>Cervero</h1>
        <h6>Cervero ha sido iniciado exitosamente</h6>
        <h3>Acciones:</h3>
        <div id="menu">
        <ol>
            <li><a href="${ngroklocal}" id="1">Ver Conexiones</a></li>
        </ol>
        </div>
        </div>
        <style>
        
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-image: url(https://hdwallpaperim.com/wp-content/uploads/2017/09/17/64390-minimalism-Cerberus-748x468.jpg);
            background-size: 100% 100vh;
            text-align: center;
            margin: 0 auto;
        }
        #inicio{
            padding: 10px;
            background-color: #000;
            opacity: 70%;
            background-size: 100vh 100%;
            margin: 20px;
            border-radius: 20px;
            border: 1px solid #fff;
            height: 500px;
        }
        h1{
            color: #fff;
            font-size: 3em;
        }
        h6{
            color: lightgreen;
            text-align: center;
        }
        h3{
            color: #fff;
        }
        #menu{
            display: flex;
            flex-direction: row;
        }

        #menu > ol > li{
            list-style: none;
            
        }
        #menu > ol > li {
            width: 300px;
            margin-left: 208%;
            margin-top: 20%;
        }
        #menu > ol > li > a{
            text-decoration: none;
            color: #000;
            border-radius: 10px;
            border: 1px solid lightred;
            background-color: #fff;
            opacity: 80%;
            margin: 20px;
            padding: 20px;
        }
        
        
        </style>
    </body>
    </html>`);
};
const server = http.createServer(requestListener);
server.listen(port, host, async () => {
    console.log(`[+] Servidor local corriendo en http://${host}:${port}`);
    const url = await ngrok.connect(port_json);
    console.log(`[+] Iniciando servidor publico en ${url}:`);
    console.log(`-----------------------------------------------------`);
});
