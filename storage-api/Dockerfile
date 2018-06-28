FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

RUN apk --update add bash
COPY package.json .
RUN npm install
ADD ./src src
CMD npm start