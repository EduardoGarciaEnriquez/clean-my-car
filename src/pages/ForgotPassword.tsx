import ForgotPasswordForm from "../components/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src="" alt="clean my car logo, tire inside a water drop" />
        <h1>
          <i>CleanMyCar</i>
        </h1>
        <p>
          India's first waterless <br /> car cleaning company
        </p>
      </div>
      <div className="form-container">
        <p>
          <a href="/help">Need help?</a>
        </p>
        <div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
