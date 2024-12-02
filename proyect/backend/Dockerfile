# Usar Node.js como imagen base
FROM node:18

# Crear y definir directorio de trabajo
WORKDIR /app

# Copiar archivos del backend al contenedor
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 5000

# Iniciar el servidor
CMD ["npm", "start"]
