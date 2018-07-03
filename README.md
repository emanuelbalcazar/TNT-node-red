# Taller de Nuevas Tecnologias

Este proyecto forma parte del trabajo practico 2, 3, 4 y 5 de la materia.


### Despliegue
Construir y desplegar con docker compose:

```
docker-compose -f docker-compose.yml up -d --build
```

Verificar en: 
* Node Red: [http://<server-url>/nodered]()
* Storage Backend Api: [http://<server-url>:8100/api/info]()
* Dashboard: [http://<server-url>/nodered/ui]()
* SVG MQTT Client: [http://<server-url>/nodered/mqtt]()
* MQTT User Admin: [http://<server-url>/public/users]()


### NOTA

* El script de `scripts/mosquitto-conf.sh` extrae los archivos de configuracion de eclipse-mosquitto desde el contenedor en docker y los coloca en la carpeta correspondiente, solo debe utilizarse si no se encuentra el archivo de configuracion.

### TO DO

* [pendiente] En `storage-api` debo leer de la ruta rest el nombre de la coleccion en donde se debe guardar/recuperar los flows.
* [pendiente] En `node-red` debo leer de algun lado (variables de entorno seguramente) para parametrizar el prefijo de la ruta base de nodered y para la ruta rest de plugins/http-storage ya que ahora la ruta contiene la informacion de a que coleccion debe guardar/recuperar los flows esa instancia de nodered.
