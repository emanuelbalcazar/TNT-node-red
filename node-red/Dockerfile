FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

RUN apk --update add bash
ADD ./src src
WORKDIR ./src

RUN npm install
CMD npm start