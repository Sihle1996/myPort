# Stage 1: Build the application
FROM node:alpine3.11 as react

# Create an application directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install node packages
RUN npm install

# Copy the rest of the application
COPY frontend/ .

# Build the app
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build files from the first stage to the Nginx folder
COPY --from=react /app/dist /usr/share/nginx/html

# Expose port 80 to allow web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
