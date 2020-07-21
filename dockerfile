FROM node:14.4.0-slim

WORKDIR /usr/src/app

RUN apt update && apt install yarn -y

COPY . ./

RUN rm .env

RUN yarn install

RUN npm install pm2 -g

RUN npm run build

EXPOSE 3001

CMD ["pm2-runtime","dist/api.bundle.js"]