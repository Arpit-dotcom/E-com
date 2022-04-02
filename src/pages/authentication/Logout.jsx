import "styles/authentication/Logout.css";

const Logout = () => (
  <section className="logoutContainer">
    <div className="heading">
      <span className="material-icons-outlined"> logout </span>
      <h1>
        <strong>LOG OUT</strong>
      </h1>
      <small>Oh no! You're leaving...</small>
    </div>

    <form className="logout" action="logout">
      <a className="primary" href="#">
        {" "}
        Just kidding{" "}
      </a>

      <a className="secondary" href="#">
        {" "}
        Log Me Out{" "}
      </a>
    </form>
  </section>
);

export { Logout };
