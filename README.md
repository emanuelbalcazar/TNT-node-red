# Taller de Nuevas Tecnologias

Este proyecto forma parte del trabajo practico 2, 3, 4 y 5 de la materia.


### Despliegue
Construir y desplegar con docker compose:

```
docker-compose -f docker-compose.yml up -d --build
```

Ejecutar el container-manager (no utiliza docker) para lanzar a demanda nuevas instancias de nodered.

```
cd container-manager

npm install

npm start
```

Verificar en: 
* Node Red: http://<server-url>/nodered
* Storage Backend Api: http://<server-url>:8100/api/info
* Dashboard: http://<server-url>/nodered/ui
* SVG MQTT Client: http://<server-url>/nodered/mqtt
* MQTT User Admin: http://<server-url>/public/users
* Projects Admin: http://<server-url>/public/projects
* Container Manager: escuchando en http://<server-url>:8400 por defecto.

### NOTA

* El script de `scripts/mosquitto-conf.sh` extrae los archivos de configuracion de eclipse-mosquitto desde el contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentra el archivo de configuracion.

