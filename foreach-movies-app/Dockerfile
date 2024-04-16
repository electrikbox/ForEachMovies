FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g sass react-router-dom reat-dotenv react-paginate

COPY . .

# RUN npm run build
# EXPOSE 3000

CMD ["npm", "start"]
