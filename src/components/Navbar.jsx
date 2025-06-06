import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
       <Link to="/">{<h1>Reactify Blog</h1>}</Link> 
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
