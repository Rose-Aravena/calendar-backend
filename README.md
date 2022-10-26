# CalendarApp-Backend

- Repositorio del backend generado para el proyecto [CalendarApp](https://github.com/Rose-Aravena/CalendarApp-Frontend), del curso de React de Udemy. Puedes visitarlo para ver como se implemento el backend.

Este backend permite realizar: creacion de usuarios, autenticar usuarios, crear eventos, modificar eventos y eliminar eventos.

## Ruta para las peticiones HTTP

`https://calendarbackend-api.herokuapp.com/api`

**Crear usuario**
```
Método HTTP: POST
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/auth/new
```
- Datos obligatorios:
```json
{
    "name": "demo",
    "email": "demo@correo.com",
    "password": "demo123456"
}
```

**Autenticar usuario**
```
Método HTTP: POST
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/auth
```
- Datos obligatorios:
```json
{
    "email": "demo@correo.com",
    "password": "demo123456"
}
```
- Ejemplo de respuesta (crear usuario y autenticar):
```json
{
    "ok": true,
    "uid": "63598c60da0",
    "name": "demo",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzU5OGM2M"
}
```
**Revalidar JWT**
```
Método HTTP: GET
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/auth/renew
```

**Obtener los eventos**
```
Método HTTP: GET
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/events
```

**Crear un evento**
```
Método HTTP: POST
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/events
```
- Datos obligatorios:
```json
{
    "title": "trabajo pendiente",
    "start": /*fecha de inicio*/,
    "end": /*fecha final*/
}
```

**Actualizar evento**
Para la actualizacion debes indicar el id del evento.
```
Método HTTP: PUT
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/events/:id
```
- Ejemplo de respuesta (crear y actualizar evento):
```json
{
    "ok": true,
    "event": {
        "title": "demo",
        "notes": "demo",
        "start": "2022-10-26T19:31:56.218+00:00",
        "end": "2022-10-26T21:31:56.218+00:00",
        "user": "63585c116e",
        "id": "63598b32da0"
    }
}
```
**Eleminar evento**
Para eleminar debes indicar el id del evento.
```
Método HTTP: DELETE
Ruta requerida: https://calendarbackend-api.herokuapp.com/api/events/:id
```
- Ejemplo de respuesta
```json
{
    "ok": true,
    "msg": "Evento eliminado"
}
```

## Ejemplo para conectar al endpoint con Axios

[Axios](https://axios-http.com/) es una librería JavaScript, se puede ejecutarse en el navegador y nos permite hacer sencillas las operaciones como cliente HTTP.

```node
npm install axios
```
- Este archivo es un ejemplo de como configurar el endpoints principal, puedes ver la implementacion en el repositorio de [CalendarApp](https://github.com/Rose-Aravena/CalendarApp-Frontend/blob/main/src/api/calendarApi.js) 

```javascript
import axios from 'axios';
import { getEnvVariables } from '../helpers';

const {VITE_API_URL} = getEnvVariables()

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default calendarApi;
```

## Development pasos

1. Renombrar el archivo '.env.template' por '.env'.
2. Agregar tus variables de entorno al archivo.

PORT= 'puerto al cual conectarse en desarrollo'
DB_CNN=  'agrega tu cadena de conexion'
SECRET_JWT_SEED= 'crea tu palabra de seguridad para el json web token'
