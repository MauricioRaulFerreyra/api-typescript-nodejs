# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para aprovechar la caché de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar TypeScript
RUN npm run build

# Ejecutar las migraciones (después de la compilación)
RUN npm run m:gen || true
RUN npm run m:run || true

# Etapa 2: Producción
FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
# COPY .env ./

ENV NODE_ENV=production

EXPOSE 8000

CMD ["node", "dist/server.js"]
