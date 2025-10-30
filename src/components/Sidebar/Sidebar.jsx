import "./Sidebar.css";
import headerAvatar from "../../images/avatar.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <p className="sidebar__username">Terrence Tegegne</p>
        <img
          src={headerAvatar}
          alt="Terrence Tegegne"
          className="sidebar__avatar"
        ></img>
      </div>
    </aside>
  );
}
