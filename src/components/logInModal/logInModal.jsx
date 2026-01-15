import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { NavLink } from "react-router-dom";
import "./logInModal.css";

const LogInModal = ({ isOpen, onClose }) => {
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
      <NavLink to="/sign-up" className="sign-up-link">
        <p className="sign-up-text"> or Sign Up</p>
      </NavLink>
    </ModalWithForm>
  );
};

export default LogInModal;
