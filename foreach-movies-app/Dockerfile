FROM node:alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g sass axios
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine

COPY foreachmovies.conf /etc/nginx/conf.d/foreachmovies.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
