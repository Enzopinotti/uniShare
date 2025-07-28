import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss"; // luego creamos este archivo para estilos

const Layout = () => {
  return (
    <div className="layout">
      <header className="navbar">
        <h1 className="logo">UniShare</h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>© 2025 UniShare</small>
      </footer>
    </div>
  );
};

export default Layout;
