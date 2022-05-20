FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN npm install -g ts-node
RUN npm install -g nodemon
COPY . .

RUN yarn install --production

EXPOSE 4081
USER    node

CMD [  "yarn", "run",  "watch" ]

