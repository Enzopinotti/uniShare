import { useForm } from "react-hook-form";
import type { LoginFormData } from "../interfaces";
import "./AuthForm.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <div className="auth-container">
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div>
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <input
              placeholder="Contraseña"
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
            />

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit">Iniciar Sesión </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
