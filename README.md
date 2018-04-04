# Node-red - Docker - Http Storage

Taller de Nuevas Tecnologias - Trabajo Practico N2

Construir con: 
`docker build -t nodejs-docker:1.0 .`

Ejecutar con: 
`docker run -p 8000:8000 nodejs-docker:1.0`

Verificar en: 
`http://localhost:1880`

Construir y desplegar con docker compose:
`docker-compose -f docker-compose.yml up -d --build`
