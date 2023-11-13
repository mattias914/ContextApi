import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link" to="/"> Home </Link> | <Link className="link" to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
