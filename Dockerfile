FROM node:18-alpine

WORKDIR /app

COPY ./node_modules /app/node_modules 
COPY package*.json /app/
COPY ./public /app/public
COPY ./src /app/src

RUN npm install

EXPOSE 3000
