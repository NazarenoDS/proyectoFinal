# Practico final para "Talento Tech: Nodejs" == API REST Node.js + Firebase

--Descripcion: Proyecto realizado para la entrega de trabajo practico final, del curso de "Talento tech: Nodejs, en base a los requerimientos dados en el pdf.- url https://gamma.app/docs/Ejercicio-Clae-15-Node-JS-4nrhn17nnthsgsd?mode=doc ..
**API RESTful para gestión de colecciones y autenticación de usuarios, desarrollada en Node.js, Express y Firebase Firestore.**
Con algunas modificanes.
[ Las modificaciones se pensaron para que el proyecto pueda reusarse. Que el cliente pueda crear collecciones con la api, tener auditoria, obtendria de esta manera, una apirest mas generica y adaptable. Pero despues de mucho investigar documentacion, tengo que adaptar firebase admin. Si te intereza saber mas, lee el ultimo mensaje. Gracias. ]
--

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- **Firestore** para base de datos.
- **JWT** auth de usuario.
- Configuración minimalista lista para usar.

---

## Instalación

### Clonar el repositorio

`https://github.com/NazarenoDS/proyectoFinal`
    cd proyectoFinal

#### Instala las dependencias
   ```
   npm install
   ```

#### Configura las variables de entorno

   Crea un archivo `.env` en la raíz del proyecto (puedes copiar el ejemplo):
   ```
   cp env.example .env
   ```
   Completa los valores según tu proyecto de Firebase y tu configuración JWT.


**Variables de entorno**
El archivo `.env` debe contener:

--env
```
APIKEY=tu_apikey_firebase
AUTHDOMAIN=tu_authdomain_firebase
PROJECTID=tu_projectid_firebase
STORAGEBUCKET=tu_storagebucket_firebase
MESSAGINGSENDERID=tu_messagingsenderid_firebase
APPID=tu_appid_firebase
JWT_SECRET=tu_clave_secreta_jwt
```
---

## Comandos disponibles
**npm start**
**npm run watch**


### Uso

### 1. **Iniciar el servidor**

```
npm start
```
El servidor correrá en el puerto definido en `.env` o por defecto en `3000`.

---

### Actualizar dependencias (Opcional)

Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

###  **Endpoints principales**

...falta completar(se completara en la otra actualizacion debido a una feature que se quiso agregar y necesita pruebas).

## Estructura del proyecto
proyectoFinal/
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── utils/
├── .env.example
├── package.json
└── README.md

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## ✨ Autor

**https://github.com/NazarenoDS**

>Si tenes alguna duda, sugerencias o quieres mejorar el codigo( o ayudarme con la feature que comente ) abri una issue y nos ponemos en contacto. Saludos.-
