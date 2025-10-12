import "./ModalWithForm.css";

function ModalWithForm({
  name,
  children,
  buttonText,
  title,
  activeModal,
  onClose,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === "add-garment" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close"
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
