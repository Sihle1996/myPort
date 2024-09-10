# Stage 1: Build the application
FROM node:alpine3.11 AS build

# Create an application directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the application code
COPY frontend/ .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


