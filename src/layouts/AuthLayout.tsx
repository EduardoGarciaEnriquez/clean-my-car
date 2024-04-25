import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
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
      <div className='form-container'>
        <p>
          <Link to="/help">Need help?</Link>
        </p>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
