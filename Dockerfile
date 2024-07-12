FROM node:latest AS build
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli
RUN npm install --silent
COPY . .
RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0"]
