import "styles/authentication/Login.css";

const Login = () => (
  <>
    <section class="loginContainer">
      <span class="material-icons-outlined"> login </span>
      <div class="heading">
        <p>
          <strong>LOGIN</strong>
        </p>
        <small>See your growth and consulting support</small>
      </div>

      <form action="login">
        <label for="Email">
          Email
          <input
            class="inp"
            type="text"
            placeholder="mail@gmail.com"
            required
          />
        </label>
        <label for="Password">
          Password
          <input
            class="inp"
            type="password"
            placeholder="Min. 8 characters"
            required
          />
        </label>
        <input class="submit" type="submit" name="" />
      </form>

      <p>
        Don't have an account?
        <a class="signup-link" href="/pages/signup.html">
          Sign Up
        </a>
      </p>
    </section>
  </>
);

export { Login };
