# Use the official Node.js image as a base
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Nuxt app
RUN npm run build

# Use a lightweight Node.js image for production
FROM node:18-alpine

WORKDIR /

# Copy built files from the build stage
COPY --from=build /.output ./

# Expose the Nuxt port
EXPOSE 3000

# Start Nuxt
CMD ["node", "server/index.mjs"]
