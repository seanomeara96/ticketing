FROM node:alpine

WORKDIR /app
COPY pagkage.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]