import "styles/authentication/Logout.css";
import { useEffect } from "react";
import { useLogout } from "utils";

const Logout = () => {

  const { logOutHandler, notLogOutHandler } = useLogout();

  useEffect(() => {
    document.title = "Logout | Shopzila";
  }, []);

  return (
    <section className="logoutContainer">
      <div className="heading">
        <span className="material-icons-outlined"> logout </span>
        <h1>
          <strong>LOG OUT</strong>
        </h1>
        <small>Oh no! You're leaving...</small>
      </div>

      <form className="logout" action="logout">
        <button
          className="cursor-pointer primary"
          onClick={() => notLogOutHandler()}
        >
          Just kidding
        </button>

        <button
          className="cursor-pointer secondary"
          onClick={() => logOutHandler()}
        >
          Log Me Out
        </button>
      </form>
    </section>
  );
};

export { Logout };
