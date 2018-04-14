FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

ADD ./src src
WORKDIR ./src
RUN apk --update add bash
RUN npm install
CMD npm start