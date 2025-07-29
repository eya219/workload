# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
 
# Stage 2: Run
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
RUN npm install -g serve
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]