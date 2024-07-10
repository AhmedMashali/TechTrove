import { Link, NavLink } from "react-router-dom";
import {
  RiHomeLine,
  RiArticleLine,
  RiBook2Line,
  RiQuillPenLine,
} from "react-icons/ri";

import logo from "../assets/logo2.png";
import user from "../assets/user-img.jpg";

const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive ? "header__active-link" : null;

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="TechTrove" width={500} height={500} />
        </Link>
        <nav className="header__nav">
          <ul>
            <li>
              <NavLink to="/" className={activeLink}>
                <RiHomeLine className="nav-i header__link-i" />
                <div className="header__link-title">Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className={activeLink}>
                <RiArticleLine className="nav-i header__link-i" />
                <div className="header__link-title">Articles</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/threads" className={activeLink}>
                <RiBook2Line className="nav-i header__link-i" />
                <div className="header__link-title">Threads</div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <NavLink to="/write-article" className={activeLink}>
            <RiQuillPenLine className="nav-i header__link-i" />
            <div className="header__link-title">Write</div>
          </NavLink>
          <div className="header__actions-user">
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
