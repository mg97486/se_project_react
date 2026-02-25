import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "./DeleteItemModal.css";

function DeleteItemModal({ activeModal, onClose, card, onDelete, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className={`modal ${activeModal === "delete" ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__caption">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        {isLoggedIn && currentUser && currentUser._id === card.owner && (
          <button
            type="button"
            className="delete__item_modal-delete-button"
            onClick={() => onDelete(card._id)}
          >
            Yes, Delete item
          </button>
        )}
        <button
          type="button"
          className="modal__cancel-button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;
