# Stage 1: Build
FROM node:20.19.0 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve static files
FROM node:20.19.0-alpine
WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve

# Copy only the built output
COPY --from=build /app/dist ./dist

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
