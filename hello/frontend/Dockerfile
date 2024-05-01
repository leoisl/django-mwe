# Step 1: Building the app
# Use a Node.js base image
FROM node:20.10.0 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your Next.js app to the container
COPY . .

# Build your Next.js application
RUN npm run build

# Step 2: Running the app
# Use a smaller Node.js base image for the runtime
FROM node:20.10.0-slim

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
