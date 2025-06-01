# Use official Node.js 20 image as the base
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker cache
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Copy the rest of the application
COPY . .

# Build Nuxt 3 app
RUN npm run build

# Remove dev dependencies after build to reduce image size
RUN npm prune --production

# Expose the default port (3000) for Nuxt 3
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Start Nuxt 3 app
CMD ["npm", "run", "preview"]

