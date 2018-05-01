# Taller de Nuevas Tecnologias

Este proyecto forma parte del trabajo practico 2 y 3 de la materia.


### Despliegue
Construir y desplegar con docker compose:

```
docker-compose -f docker-compose.yml up -d --build
```

Verificar en: 
* Node Red: http://localhost/nodered
* Storage Backend Api: http://localhost:8100/api/info

### NOTA

* El proxy reverso se encuentra configurado en `nginx/nginx/conf.d/localhost.conf`.
* El script de `scripts/nginx-conf.sh` extrae los archivos de configuracion utilizados por NGINX desde un contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentran los archivos de configuracion.
* El script de `scripts/mosquitto-conf.sh` extrae los archivos de configuracion de eclipse-mosquitto desde el contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentra el archivo de configuracion.