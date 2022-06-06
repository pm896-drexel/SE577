FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN npm install -g ts-node
RUN npm install -g nodemon
RUN yarn global add @quasar/cli

COPY . .
RUN rm -f -r /app/microservices

RUN yarn install

EXPOSE 8080

CMD [ "quasar", "dev"]

