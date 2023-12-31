# build env
FROM node:12.8.0 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build Angular Application in Production
RUN export NODE_OPTIONS=--max_old_space_size=8048
RUN node ./node_modules/@angular/cli/bin/ng build --prod --progress
RUN ls -al

#### STAGE 2
#### Deploying the application

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx Files
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE Port 80
# EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]