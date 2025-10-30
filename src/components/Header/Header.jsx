import "./Header.css";
import headerLogo from "../../images/logo.svg";
import headerAvatar from "../../images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img src={headerLogo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__right">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-btn"
        >
          + Add clothes
        </button>
        <NavLink to="/profile" className="header__profile-link">
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={headerAvatar}
            alt="User avatar"
            className="header__avatar"
          />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
