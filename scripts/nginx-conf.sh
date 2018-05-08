docker run -d --name temporal --rm nginx
docker cp temporal:/etc/nginx ../nginx/
docker cp temporal:/usr/lib/nginx/modules/ ../nginx/modules
docker stop temporal