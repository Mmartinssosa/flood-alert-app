# Flood Alert App

Aplicación web para monitoreo y alerta de inundaciones orientada a ciudadanos.

## Funcionalidades

- Alertas en tiempo real de posibles inundaciones.
- Visualización de reportes y sensores en un mapa interactivo.
- Envío de reportes por parte de los usuarios.
- Consulta de eventos históricos.
- Integración con sensores físicos (nivel de agua, lluvia, etc).

## Tecnologías

- **Backend:** Node.js, Express, Sequelize, PostgreSQL/PostGIS.
- **Frontend:** React, Leaflet (react-leaflet), Axios.

## Instalación

### Backend

1. Copia `.env` y configura los datos de tu base PostgreSQL.
2. Instala dependencias:
   ```
   cd backend
   npm install
   ```
3. Inicia el servidor:
   ```
   npm run dev
   ```

### Frontend

1. Copia `.env` y ajusta la URL del backend si es necesario.
2. Instala dependencias:
   ```
   cd frontend
   npm install
   ```
3. Inicia la app:
   ```
   npm start
   ```

## Notas

- Asegúrate de tener PostgreSQL y PostGIS instalados.
- Puedes mejorar la seguridad y la validación de los endpoints según tus necesidades.
- Para producción, adapta la configuración de CORS, variables de entorno, etc.
