# Use official Node.js 20 image as the base
FROM node:20

# Set working directory in the container
WORKDIR /

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build Nuxt 3 app
RUN npm run build

# Expose the default port (3000) for Nuxt 3
EXPOSE 3000

# Start Nuxt 3 app
CMD ["npm", "run", "start"]

