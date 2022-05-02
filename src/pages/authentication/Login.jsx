import { Link, useLocation, useNavigate } from "react-router-dom";
import "styles/authentication/Login.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "contexts";

const Login = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const {setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    document.title = "Login | Shopzila";
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: _email,
        password: _password,
      });
      localStorage.setItem("token",response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/product", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  const dummyHandler = (event) => {
    event.preventDefault();
    setEmail("arpitkumar@gmail.com");
    setPassword("arpit1234");
  };

  return (
    <section className="loginContainer">
      <span className="material-icons-outlined"> login </span>
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
        <small>See your growth and consulting support</small>
      </div>

      <form action="login">
        <label htmlFor="Email">
          Email
          <input
            className="inp"
            type="email"
            placeholder="Email"
            value={_email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Password">
          Password
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={_password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          className="submit"
          type="submit"
          value="Login"
          onClick={(event) => loginHandler(event)}
        />
        <input
          className="submit"
          type="submit"
          onClick={(event) => dummyHandler(event)}
          value="Login as Test Credential"
        />
      </form>
      <p>
        Don't have an account?
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export { Login };
