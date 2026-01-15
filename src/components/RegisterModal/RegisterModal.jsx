import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose }) => {
  const defaultValues = { email: "", password: "", name: "", avatarUrl: "" };

  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      name="sign-up"
      title="Sign Up"
      buttonText={"Next"}
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
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL{" "}
        <input
          type="text"
          name="avatarUrl"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
