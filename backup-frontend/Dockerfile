# Stage 1: Build
FROM node:20.19.0 AS build
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only dependency files
COPY pnpm-lock.yaml package.json ./

# Install deps using pnpm
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: Serve
FROM node:20.19.0-alpine
WORKDIR /app

# Install lightweight server
RUN npm install -g serve

# Copy built app from previous stage
COPY --from=build /app /app

# Expose port
EXPOSE 4173

# Start app
CMD ["serve", "dist", "--single", "--listen", "4173"]
