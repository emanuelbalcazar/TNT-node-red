FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

RUN apk --update add bash

# enviroments
ENV prefix "nodered"
ENV collection "nodered"

# instalo el dashboard en el userDir
RUN mkdir -p /data
WORKDIR /data
RUN npm install node-red-dashboard

# instalo nodered en el directorio /
WORKDIR /
COPY package.json .
RUN npm install
ADD ./src src

CMD npm start