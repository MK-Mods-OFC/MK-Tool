<h1 align="center">
<a href="https://github.com/MK-Mods-OFC/MK-Tool"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/collision-symbol_1f4a5.png"></a>
  <br>
  MK-Tool
  <br>
</h1>

<h2 align="center">SMS bombardero en el navegador + API</h2>


## Cómo utilizar?

**Versión WEB**
> Para usar SMS Bomber, debe instalar [NodeJS](https://nodejs.org/en/)
  * Descargar [el último](https://github.com/MK-Mods-OFC/MK-Tool/releases/) versión
  * Desempaquetar el archivo
  * Instalar dependencias - `npm install`
  * Ingresar `npm start` o `node index`
   > Inicialmente se ejecuta en `3000` puerto, usa la bandera `--port` para ejecutarse en el puerto deseado. por ejemplo: `node index.js --port=3001`

**Mensaje importante**
> A partir de la versión 2.0.0, estamos descontinuando el soporte para la API Node.JS. Los usuarios solo usan el sitio para organizar ataques, no la API, como se concibió durante el lanzamiento, pero podrá organizar ataques en sus aplicaciones utilizando solicitudes HTTP. 

| Método | Descripción |
|---|---|
| attack | Iniciando un ataque. Acepta dos parámetros, el número es un número de teléfono; bucle - número de repeticiones |
| stop | Deteniendo el ataque. número - número de teléfono |
| list | No acepta parámetros, devuelve una lista de ataques activos en formato JSON |

```js
const request = require("request");

request.get({url:'http://localhost:3000/attack', 
body: {"number": 79864765066, "loops": 1}},
function(err, res, json){
});
```

  ## TODO
  
   * Registrar el envío de mensajes
   * Lista de ataques activos en la versión WEB
   * ~~Detener ataques en la versión WEB~~
