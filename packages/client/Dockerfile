# Client Dockerfile

FROM node:18-alpine AS build

# make the 'app' folder the current working directory
WORKDIR /app

RUN echo "Building client alpine image - begin"

# Fix up entrypoint line endings and make exec
RUN apk update

# .env file, generated from hook in azure.yml, is copied over to the container
COPY . .

# install project dependencies
RUN npm install

# DEBUG: Make sure the .env is in the directory listing
#RUN ls -la > ls-first-layer-1.txt

# .env file is copied over to the container
RUN npm run build

# DEBUG: Make sure the .env is in the directory listing
#RUN ls -Rla > ls-first-layer-2.txt

RUN echo "Building client alpine - complete"

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN echo "Building nginx image - begin"

# Copy over generated assets
COPY --from=build /app/dist .
#COPY --from=build /app/ls*.txt ./archive
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

RUN echo "Building nginx image - complete"

CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]