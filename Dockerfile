FROM node:18-alpine as build

#WORKDIR /usr/src/app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Might need to call in your .jar file before the next section as we don't have absolute paths?

# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx:1.21.6-alpine
WORKDIR /usr/src/app

# ENV MY_APP_API=http://13.41.42.175

COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

