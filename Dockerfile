# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR ./

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Nuxt app
RUN npm run build

# Expose the Nuxt default port
EXPOSE 3000

# Start the Nuxt application
CMD ["npm", "run", "preview"]
