import { Outlet, Link } from "react-router-dom";

//help layout supposed to be usefull to the need help screen and not match screen
function HelpLayout() {
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
          <Link to="/">go back 🏠 </Link>
        </p>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HelpLayout