import "styles/authentication/Signup.css";

const loginData = ["Firstname", "Lastname", "Email", "Password"];
const Signup = () => (
  <>
    <section class="signupContainer">
      <div class="heading">
        <p>
          <strong>SIGN UP</strong>
        </p>
      </div>

      <form action="login">
        {loginData.map((item) => (
          <>
            <label for={item}>
              {item}
              <input class="inp" type="text" placeholder={item} required />
            </label>
          </>
        ))}
        <input class="submit" type="submit" name="" />
      </form>

      <p>
        Already have an account?
        <a class="signin-link" href="/pages/login.html">
          Sign In
        </a>
      </p>
    </section>
  </>
);

export { Signup };
