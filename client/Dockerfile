# Build
FROM node:lts-alpine
WORKDIR /app

RUN npm i -g serve

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "serve", "-l", "8080", "-s", "build" ]
