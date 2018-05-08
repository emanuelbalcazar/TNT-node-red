docker run -d --name temporal --rm nginx
docker cp temporal:/usr/lib/nginx/modules/ ../nginx/modules
docker stop temporal