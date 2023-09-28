FROM node:20.6.0-alpine3.18
WORKDIR /budget_tracker
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD time npm start