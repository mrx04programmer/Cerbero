
<div align="center">
  <img src="https://user-images.githubusercontent.com/46001898/189253290-e4b73194-6781-46b9-9ca1-aca73b752a30.png" width="250">
  <h1>Cerbero</h2> A locally controlled server that can be hosted using the Ngrok tool. 
</div>

## Requirements
| Name | Version|
|--------|--------|
| [node](https://www.nodejs.org/) | 16.x |
| [json-server](https://www.npmjs.com/package/json-server) | 0.17.0 |
| [ngrok](https://www.npmjs.com/package/ngrok) | 4.3.3 |

## Installation
<b>Option 1:</b>Running the ```npm install```<br> command
<b>Option 2:</b>Run the script called install.sh

## Configuration (cerbero.js file)
* Set the localhost

Line 5 : ```const host = 'localhost';```
* Establish port where the API will work

  * Line 6 (cerbero.js) :```const port_json '5000';```<br>
  * Line 7 (package.json) : ```"server": "json-server --watch db.json --port 5000",```<br>
  Set port on which Cerbero will run

Line 7 : ```const port = '8080';```
* Set link which generates local ngrok. (Default configuration)

Line 8 : ```const ngroklocal = 'http://localhost:4040/inspect/http';```

## Execution
To start the cerbero server, we use the command ```npm run cerbero```

## Demo
![imagen](https://user-images.githubusercontent.com/46001898/189255366-28b3d367-aaaa-49c7-a753-3c86c5bb0764.png)
![imagen](https://github.com/mrx04programmer/Cerbero/assets/46001898/478b85ee-a3a2-45ac-b962-0a56a7c91a90)


<h6>NodeJS version used: v16.13.1</h6>
<img src="https://img.shields.io/badge/status-finishing-blue?style=for-the-badge&logo=nodedotjs&color=darkgreen&logoColor=green&labelColor=black">

<a href="https://github.com/mrx04programmer/Cerbero/blob/master/README-ES.md">Version in Spanish 🇪🇸</a>
