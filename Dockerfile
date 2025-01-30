FROM node:16

WORKDIR /app

COPY ./geek-store-frontend/package*.json ./

RUN npm install

COPY ./geek-store-frontend ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
