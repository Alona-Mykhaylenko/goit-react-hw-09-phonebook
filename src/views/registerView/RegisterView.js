import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import styles from "./registerView.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(state));
    setState(initialState);
  };

  return (
    <div className={styles.formBox}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit}>
        <label classN ame={styles.label}>
          Name <br />
          <input
            type="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Email <br />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password <br />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
