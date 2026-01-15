import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Sidebar.css";

export default function Sidebar(
  editProfile,
  onEditProfile,
  signOut,
  onSignOut
) {
  const currentUser = useContext(CurrentUserContext);
  const handleEditProfile = () => {
    onEditProfile(editProfile);
  };

  const handleSignOut = () => {
    onSignOut(signOut);
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <p className="sidebar__username">{currentUser.name}</p>
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="sidebar__avatar"
        ></img>
      </div>
      <button className="sidebar__edit-button" onClick={handleEditProfile}>
        Edit Profile
      </button>

      <button className="sidebar__logout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </aside>
  );
}
