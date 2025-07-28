import LoginForm from "../features/auth/login/LoginForm";

const Login = () => {
  return (
    <div className="auth-page">
      <h1 className="auth-title">Inicia sesión en tu cuenta</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
