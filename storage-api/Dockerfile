FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

COPY package.json .
RUN npm install
ADD ./src src
RUN apk --update add bash
CMD npm start