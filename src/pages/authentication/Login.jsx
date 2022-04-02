import { Link } from "react-router-dom";
import "styles/authentication/Login.css";

const loginData = ["Email", "Password"];
const Login = () => (
  <section className="loginContainer">
    <span className="material-icons-outlined"> login </span>
    <div className="heading">
      <h1>
        <strong>LOGIN</strong>
      </h1>
      <small>See your growth and consulting support</small>
    </div>

    <form action="login">
      {loginData.map((item) => (
        <>
          <label for="Email">
            {item}
            <input className="inp" type="text" placeholder={item} required />
          </label>
        </>
      ))}
      <input className="submit" type="submit" value="Login" />
    </form>

    <p>
      Don't have an account?
      <Link className="signup-link" to="/signup">
        Log In
      </Link>
    </p>
  </section>
);

export { Login };
