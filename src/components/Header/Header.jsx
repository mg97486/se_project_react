import "./Header.css";
import headerLogo from "../../images/logo.svg";
import headerAvatar from "../../images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleLogInClick,
  handleSignUpClick,
  isLoggedIn,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);

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
      {currentUser ? (
        <div className="header__right">
          <ToggleSwitch />
          {isLoggedIn && (
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-btn"
            >
              + Add clothes
            </button>
          )}

          <NavLink to="/profile" className="header__profile-link">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="header__avatar"
            />
          </NavLink>
        </div>
      ) : (
        <div className="header__right">
          <ToggleSwitch />(
          <button
            onClick={handleLogInClick}
            type="button"
            className=" header__log-in-btn"
          >
            Log In
          </button>
          <button
            onClick={handleSignUpClick}
            type="button"
            className=" header__register-btn"
          >
            Sign up
          </button>
          )
        </div>
      )}
    </header>
  );
}

export default Header;
