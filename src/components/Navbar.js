import { NavLink } from "react-router-dom";
import '../assets/planet.png';

const Navbar = () => {
  const links = [
    { name: "Rockets", path: "rockets" },
    { name: "Missions", path: "missions" },
    { name: "My Profile", path: "profile" },
  ];
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="#" alt="logo" />
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink className="nav-link" to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;