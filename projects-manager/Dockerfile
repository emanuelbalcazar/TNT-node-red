FROM node:alpine
LABEL author=<emanuelbalcazar13@gmail.com>

ENV mqtt='tcp://mqtt:1883'
ENV topic='/projects/#'

RUN apk --update add bash
COPY package.json .
RUN npm install
ADD ./src src
CMD npm start