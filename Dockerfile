# stage 1
FROM node:lts as node

WORKDIR /app

# Copy package deps files
 COPY package*json ./

#Installing Packages
RUN npm install

# Copy Website files
COPY . .

# Building the project
RUN npm run build --prod



# stage 2
FROM nginx:alpine

# Copy Nginx Config file
COPY  nginx.conf /etc/nginx/conf.d/default.conf 

# Copy the website's generated source code forl the previous stage
COPY --from=node /app/dist/todo /usr/share/nginx/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
