import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.sonme((id) => id === CurrentUserContext._id);

  const itemLikeButtonClassName = `card__like-button ${isLiked ? "card__like-button_liked" : ""}`;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />

      {isLoggedin && (
        <button
          className={itemLikeButtonClassName}
          type="button"
          aria-label="Like button"
          onClick={() => onCardLike({ id: item._id, isLiked })}
        >
          <img src="/images/like-button.svg" alt="Like icon" />
        </button>
      )}
    </li>
  );
}

export default ItemCard;
