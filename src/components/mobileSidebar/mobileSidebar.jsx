import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "contexts";

export const MobileSidebar = ({ setSidebar }) => {
  const { isLoggedIn } = useAuth();

    const activeStyle = {
      textDecoration: "underline",
    };

  return (
    <section className="mobile-sidebar">
      <div className="mobile-sidebar-container">
        <h2 className="heading">
          <span className="material-icons"> account_circle </span>Welcome
          <AiOutlineClose
            className="close"
            onClick={() => setSidebar((prev) => !prev)}
          />
        </h2>
        <ul className="list">
          <NavLink
            to="/"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop Now
          </NavLink>
          <NavLink
            className="list-item"
            to={!isLoggedIn ? "/login" : "/logout"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {!isLoggedIn ? "Login" : "Logout"}
          </NavLink>
        </ul>
      </div>
    </section>
  );
};
