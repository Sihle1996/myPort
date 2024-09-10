# Stage 1: Build the application
FROM node:alpine3.11 as react

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the Docker container
COPY ./ . 

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build files from the first stage to the Nginx folder
COPY --from=react /app/dist /usr/share/nginx/html

# Expose port 80 to allow web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
