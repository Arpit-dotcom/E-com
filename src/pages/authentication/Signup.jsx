import { Link } from "react-router-dom";
import "styles/authentication/Signup.css";

const loginData = ["Firstname", "Lastname", "Email", "Password"];
const Signup = () => (
    <section class="signupContainer">
      <div class="heading">
        <h1>
          <strong>SIGN UP</strong>
        </h1>
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
        <input class="submit" type="submit" value="Signup" />
      </form>

      <p>
        Already have an account?
        <Link class="signin-link" to="/login">
          Sign In
        </Link>
      </p>
    </section>
);

export { Signup };
