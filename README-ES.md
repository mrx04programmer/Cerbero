<div align="center">  
  <img src="https://user-images.githubusercontent.com/46001898/189253290-e4b73194-6781-46b9-9ca1-aca73b752a30.png" width="250">
  <h1>Cerbero</h2>
  Servidor controlado local el cual puede aplicarse con la herramiento Ngrok para su hosting.
</div>

## Requerimientos
| Nombre | Versión|
|--------|--------|
| [node](https://www.nodejs.org/) | 16.x |
| [json-server](https://www.npmjs.com/package/json-server) | 0.17.0 |
| [ngrok](https://www.npmjs.com/package/ngrok) | 4.3.3 |

## Instalación
<b>Opción 1:</b>Ejecutando el comando ```npm install```<br>
<b>Opción 2:</b>Ejecutando el script llamado install.sh

## Configuración (Archivo cerbero.js)
* Establecer el localhost

Linea 5 : ```const host = 'localhost';```
* Establecer puerto donde se trabajará la API

  * Linea 6 (cerbero.js) :```const port_json '5000';```<br>
  * Linea 7 (package.json) : ```"server": "json-server --watch db.json --port 5000",```<br>
  Establecer puerto en el que correrá Cerbero

Linea 7 : ```const port = '8080';```
* Establecer enlace el cual genera ngrok local. (Configuración por defecto)

Linea 8 : ```const ngroklocal = 'http://localhost:4040/inspect/http';```

## Ejecución
Para iniciar el servidor de cerbero, utilizamos el comando ```npm run cerbero```
## Demo
![imagen](https://user-images.githubusercontent.com/46001898/189255366-28b3d367-aaaa-49c7-a753-3c86c5bb0764.png)

<h6>Versión de NodeJS usado: v16.13.1</h6>
<img src="https://img.shields.io/badge/status-finishing-blue?style=for-the-badge&logo=nodedotjs&color=darkgreen&logoColor=green&labelColor=black">
