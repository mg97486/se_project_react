import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

function ItemModal({
  activeModal,
  onClose,
  card,
  onRequestDelete,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        {isLoggedIn && currentUser._id === card.owner && (
          <button
            type="button"
            className="modal__delete-button"
            onClick={() => onRequestDelete(card)}
          >
            Delete item
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
