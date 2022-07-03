import { Link } from "react-router-dom";
import "styles/authentication/Login.css";
import { useEffect, useState } from "react";
import { useLogin } from "utils";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Shopzila";
  }, []);

  const {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  } = useLogin();
    const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="loginContainer">
      <span className="material-icons-outlined"> login </span>
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
      </div>

      <form onSubmit={(event) => loginHandler(event)}>
        <label htmlFor="Email">Email</label>
        <input
          className="inp"
          type="email"
          placeholder="Email"
          value={_email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          className="inp"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={_password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="password-icon"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
        <button className="submit" onClick={(event) => dummyHandler(event)}>
          Login as Guest
        </button>
        <button className="submit">Login</button>
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
