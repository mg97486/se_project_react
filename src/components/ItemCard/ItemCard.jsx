import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleCardLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  const currentUser = useContext(CurrentUserContext);
  const isLiked = currentUser
    ? item.likes.some((id) => id === currentUser._id)
    : null;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />

      {currentUser && (
        <button
          className={`card__like-button ${isLiked ? "card__like-button_liked" : ""}`}
          type="button"
          aria-label="Like button"
          onClick={handleCardLike}
        ></button>
      )}
    </li>
  );
}

export default ItemCard;
