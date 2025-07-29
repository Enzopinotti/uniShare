// src/services/authService.ts

type User = {
  name: string;
  email: string;
  password: string;
};

const usersDB: User[] = [
  {
    name: "Belén Espilman",
    email: "belen@example.com",
    password: "password123",
  },
];

export const fakeAuthApi = {
  register: async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    return new Promise<{
      token: string;
      user: { name: string; email: string };
    }>((resolve, reject) => {
      setTimeout(() => {
        // Validar que no exista usuario con ese email
        if (usersDB.some((u) => u.email === email)) {
          reject(new Error("Usuario ya registrado"));
          return;
        }

        // Validar que password y confirmPassword coincidan
        if (password !== confirmPassword) {
          reject(new Error("Las contraseñas no coinciden"));
          return;
        }

        // Crear usuario nuevo y agregar a la "DB"
        const newUser = { name, email, password };
        usersDB.push(newUser);

        // Simular token y devolver usuario sin password
        resolve({
          token: "fake-jwt-token",
          user: { name: newUser.name, email: newUser.email },
        });
      }, 700);
    });
  },

  login: async (email: string, password: string) => {
    return new Promise<{
      token: string;
      user: { name: string; email: string };
    }>((resolve, reject) => {
      setTimeout(() => {
        const user = usersDB.find((u) => u.email === email);
        if (!user) {
          reject(new Error("Usuario no encontrado"));
          return;
        }

        if (user.password !== password) {
          reject(new Error("Contraseña incorrecta"));
          return;
        }

        resolve({
          token: "fake-jwt-token",
          user: { name: user.name, email: user.email },
        });
      }, 700);
    });
  },
};
