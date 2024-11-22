FROM node:16-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 5173

CMD ["npm", "run","dev"]
