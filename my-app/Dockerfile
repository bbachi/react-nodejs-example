FROM node:14-alpine

WORKDIR /sample

COPY package*.json ./

RUN npm install

COPY . .

RUN sed -i 's/localhost/api/g' package.json

EXPOSE 3000

CMD ["npm", "start"]
