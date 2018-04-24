# Node-red - Docker - Http Storage

Taller de Nuevas Tecnologias - Trabajo Practico N2

Construir y desplegar con docker compose:
`docker-compose -f docker-compose.yml up -d --build`

Verificar en: 
* Node Red: `http://localhost/nodered`
* Storage Backend Api: `http://localhost:8100/api/info`

## NOTA

* El proxy reverso se encuentra configurado en `nginx/nginx/conf.d/localhost.conf`.
* Se modifico node-red para que escuche en `http://localhost:1880/nodered` y se le indico el plugin que debe utilizar para persistir/recuperar los flows.
* El script de `scripts/initialize-nginx.sh` extrae los archivos de configuracion utilizados por NGINX desde un contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentran los archivos de configuracion.
* El script de `scripts/mosquitto-conf` extrae los archivos de configuracion de eclipse-mosquitto desde el contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentra el archivo de configuracion.