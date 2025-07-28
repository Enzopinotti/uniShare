import SignUpForm from "../features/auth/signup/SignUpForm";

const SignUp = () => {
  return (
    <div className="auth-page">
      <h1 className="auth-title">Crea una nueva cuenta</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
