import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./logInModal.css";

const LogInModal = ({ isOpen, onClose, onSignUpClick }) => {
  const defaultValues = { email: "", password: "" };

  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      name="log-in"
      title="Log In"
      buttonText={"Log In"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          name="Email"
          className="modal__input"
          id="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="text"
          name="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <div className="login__button-group">
        <button
          type="button"
          onClick={onSignUpClick}
          className="login__modal-link"
        >
          <p className="login__modal-text">or Sign up</p>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LogInModal;
