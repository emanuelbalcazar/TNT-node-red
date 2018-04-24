docker run -d --name temporal --rm eclipse-mosquitto
docker cp temporal:/etc/mosquitto/mosquitto.conf ../mqtt
docker stop temporal