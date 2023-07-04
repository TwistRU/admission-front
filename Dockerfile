FROM node:14.17.0-alpine as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as production-stage
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf