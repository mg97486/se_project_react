import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  onAddClick,
  handleCardClick,
  isLoggedIn,
  clothingItems,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = currentUser
    ? clothingItems.filter((item) => item.owner._id === currentUser._id)
    : [];
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p>Your items </p>
        {isLoggedIn && (
          <button className="clothes-section__add-button" onClick={onAddClick}>
            + Add new
          </button>
        )}
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
