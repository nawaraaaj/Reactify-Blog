import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Reactify Blog</h1>
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            New Blog
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
