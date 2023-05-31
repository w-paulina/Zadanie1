FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

LABEL author = "[Paulina Wójcik]"

CMD ["npm", "run", "start"]