# BASE IMAGE with an alias #
FROM node:current-alpine3.16 as build
WORKDIR /app

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

# BASE IMAGE with an alias #
FROM nginx as runtime

# Copy contents from the other container with alias "build" #
# onto the specified path in the current container#
COPY ./src/config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html