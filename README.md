# 📚 tusApuntes — Backend

**tusApuntes** es una plataforma colaborativa que funciona como una red social de estudiantes para **compartir, organizar y descubrir apuntes universitarios**.  
Los usuarios pueden subir sus apuntes en PDF, mantenerlos privados o compartirlos con amigos, grupos o de manera pública.  

Versión en inglés: **StudyDrop**

---

## 🚀 Características principales (MVP)

- Autenticación y registro de usuarios con JWT.
- Subida de PDFs (apuntes) con privacidad configurable:
  - Privado (sólo el usuario).
  - Compartido (usuarios/grupos seleccionados).
  - Público (visible para todos).
- Organización por **carrera, materia y año**.
- Feed con apuntes recientes de tus contactos o materias seguidas.
- Sistema de seguidores (similar a Twitter).
- API documentada con Swagger.

---

## 🛠️ Tecnologías

- **Backend:** [NestJS](https://nestjs.com/) (Node.js + TypeScript).
- **Base de datos:** MongoDB (con Mongoose).
- **Autenticación:** JWT + Passport.
- **Validaciones:** class-validator / class-transformer.
- **Documentación:** Swagger.
- **Seguridad:** bcrypt para contraseñas hasheadas.
- **Infraestructura (dev):** Docker Compose.
- **Frontend:** React + TypeScript + Vite (desarrollado en otro repo por Belu).

---

## 📂 Estructura del proyecto

```
tusApuntes-backend/
├── src/
│   ├── auth/        # Módulo de autenticación
│   ├── users/       # Usuarios
│   ├── posts/       # Apuntes (posts en PDF)
│   ├── common/      # Utilidades, guards, interceptores
│   └── main.ts      # Entry point
├── test/            # Tests con Jest
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Instalación y uso

### 1. Clonar el repo

```bash
git clone https://github.com/Enzopinotti/tusApuntes.git
cd tusApuntes/backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

Crear un archivo `.env` en la raíz del backend con:

``` bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/tusapuntes
JWT_SECRET=supersecret
```

### 4. Levantar en modo desarrollo

```bash
npm run start:dev
```

### 5. Documentación Swagger

Una vez levantado el server, visitar:  
👉 `http://localhost:4000/api/docs`

---

## 🧑‍🤝‍🧑 Equipo

- **Enzo Pinotti** — Fullstack Developer & Ingeniería Industrial.  
- **Belén Espilman** — Frontend & Mobile Developer.  
- **André Coronel Vargas** — UX/UI & Multimedia Designer.  

---

## 📈 Roadmap (MVP → Futuro)

- [x] Autenticación básica (JWT).  
- [x] Upload y gestión de PDFs.  
- [ ] Feed de apuntes compartidos.  
- [ ] Sistema de comentarios y reacciones.  
- [ ] Grupos de estudio (virtuales/presenciales).  
- [ ] Gamificación: logros y sistema de regalos virtuales.  
- [ ] Suscripción premium (más espacio de almacenamiento + features sociales).

---

## 📝 Licencia

Proyecto privado — uso exclusivo para desarrollo e investigación.  
