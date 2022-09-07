FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

USER ayda

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]