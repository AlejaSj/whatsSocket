# whatsSocket

# Proyecto WebChat

## Descripción

Este proyecto es un ejemplo de un chat en tiempo real utilizando HTML, CSS y JavaScript en el frontend, junto con Node.js, Express y Socket.IO en el backend. Además, se utiliza SQLite para almacenar los mensajes de chat.

## Comenzando con Node.js

### Requisitos previos

- Node.js y npm instalados en tu máquina.
- Conocimientos básicos de JavaScript, HTML y CSS.
- Conocimientos básicos de terminal/command line.

### Pasos para comenzar

1. **Inicializa un nuevo proyecto Node.js**

   Abre tu terminal y navega a la carpeta donde deseas crear tu proyecto. Luego ejecuta:

   ```sh
   npm init -y
   ```

   Esto creará un archivo `package.json` con la configuración predeterminada.

2. **Instala las dependencias necesarias**

   Ejecuta el siguiente comando para instalar Express, Socket.IO, Morgan (un logger HTTP), y SQLite:

   ```sh
   npm install express socket.io morgan sqlite sqlite3
   ```

3. **Crea la estructura del proyecto**

   Crea las siguientes carpetas y archivos en tu proyecto:

   ```
   project-folder/
   ├── client/
   │   └── index.html
   ├── server/
   │   └── index.js
   ├── chat.db
   ├── .gitignore
   └── package.json
   ```

4. **Configura el servidor**

   En el archivo `server/index.js`, configura tu servidor Express con Socket.IO y SQLite.

5. **Configura el cliente**

   En el archivo `client/index.html`, añade el contenido de tu frontend.

6. **Añade un script para iniciar el servidor**

   En tu archivo `package.json`, añade el siguiente script:

   ```json
   "scripts": {
       "dev": "node server/index.js"
   }
   ```

7. **Ejecuta el servidor**

   En la terminal, ejecuta:

   ```sh
   npm run dev
   ```

   Esto iniciará el servidor y podrás acceder a tu aplicación de chat en tiempo real navegando a `http://localhost:9877` en tu navegador.

## Características del proyecto

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express.
- **Websockets**: Socket.IO.
- **Base de datos**: SQLite.
- **Logger**: Morgan.

## Funcionalidades

- **Autogeneración de nombres de usuario**: Si un usuario no tiene un nombre guardado, se genera uno aleatorio y se guarda en el almacenamiento local del navegador.
- **Persistencia de mensajes**: Los mensajes se guardan en una base de datos SQLite y se cargan al inicio de la conexión.
- **Mensajes en tiempo real**: Utiliza Socket.IO para la transmisión en tiempo real de mensajes entre los clientes y el servidor.
- **Interfaz de usuario intuitiva**: Diseño limpio y moderno con una separación clara entre la lista de chats y la ventana de mensajes.
- **Historial de mensajes**: Los mensajes previos se cargan al conectar, permitiendo ver el historial de la conversación.
- **Estado en línea**: Indicador de estado en línea en la cabecera del chat.

## Uso y despliegue

Este proyecto es ideal para entender cómo funcionan los sistemas de chat en tiempo real y para ser usado como base para proyectos más complejos. Puedes extender este proyecto añadiendo características como autenticación de usuarios, chats en grupo, envío de archivos y mucho más.

---

Con estos pasos y funcionalidades, tienes una guía completa para iniciar y entender el funcionamiento de un proyecto de chat en tiempo real utilizando Node.js, Express, Socket.IO y SQLite.
