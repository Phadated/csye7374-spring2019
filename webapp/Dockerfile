FROM node:10.15.1
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT ["node", "app.js"]
EXPOSE 5000
