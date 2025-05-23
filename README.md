# UseIt Test Angular

Aplicación Angular para gestión de usuarios con autenticación, tabla responsive y detalles de usuario. Utiliza json-server como backend simulado.

## Requisitos
- Node.js >= 18
- npm >= 9
- Angular 19 
- json-server

## Instalación
1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Inicialización del Backend (json-server)
1. Asegúrate de tener `json-server` instalado globalmente:
   ```bash
   npm install -g json-server
   ```
2. Inicia el servidor simulado con el archivo `db.json`:
   ```bash
   json-server --watch db.json --port 3000
   ```
   Esto expondrá la API REST en `http://localhost:3000/users`.

## Inicialización del Frontend (Angular)
1. En otra terminal, inicia la aplicación Angular:
   ```bash
   ng serve
   ```
2. Abre tu navegador en `http://localhost:4200`.

## Uso
- Inicia sesión con cualquier usuario y contraseña válidos del archivo `db.json`.
- Visualiza la tabla de usuarios, navega a los detalles y prueba el logout.

## Estructura principal
- `src/app/services/users.service.ts`: Acceso a usuarios vía API REST.
- `src/app/services/auth.service.ts`: Lógica de autenticación y token.
- `src/app/guards/auth-guard.guard.ts`: Protección de rutas.
- `src/app/components/organisms/login/`: Componente de login.
- `src/app/components/organisms/users-table/`: Tabla de usuarios.
- `src/app/pages/user-detail/`: Vista de detalles de usuario.

## Notas
- Puedes editar `db.json` para agregar, quitar o modificar usuarios.
- El token de autenticación es el id del usuario guardado en localStorage.
- Si no tienes un usuario válido, revisa los datos en `db.json`.
- Puedes usar el usuario admin con la contraseña 1234
---