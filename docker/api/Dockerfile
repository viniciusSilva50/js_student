FROM node:12.16.1 as serverJs

WORKDIR /app

COPY package.json ./
COPY *.js ./
COPY src src

RUN npm i

EXPOSE 3000
CMD ["node", "server.js"]
