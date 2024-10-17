# Stage one: Build the application
FROM node:14-alpine as builder
WORKDIR /app

COPY package.json ./

COPY tools ./tools

# Install all dependencies
RUN npm install

# Install eslint-watch globally
RUN npm install -g eslint-watch@4.0.2

COPY . .

# Run the build command of your application
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
