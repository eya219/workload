# Stage 1: Build
FROM node:20.19.0 AS build
WORKDIR /app

# Copy only the dependency files first (enables layer caching)
COPY package*.json ./

# Clean and fast install
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve
FROM node:20.19.0-alpine
WORKDIR /app

# Copy built app from previous stage
COPY --from=build /app /app

# Install lightweight server
RUN npm install -g serve

# Expose the port your app will run on
EXPOSE 4173

# Start the app in preview mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
