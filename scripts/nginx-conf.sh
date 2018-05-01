docker run -d --name temporal --rm nginx
docker cp temporal:/etc/nginx ../nginx
docker stop temporal