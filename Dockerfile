FROM node:11-stretch

ENV NODE_PATH /node_modules

COPY package.json package.json

RUN npm install

RUN mkdir /app
WORKDIR /app

CMD ["npm", "run", "watch"]
