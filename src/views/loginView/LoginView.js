import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import styles from "./loginView.module.css";

const initialState = {
  email: "",
  password: "",
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(state));

    setState(initialState);
  };

  return (
    <div className={styles.formBox}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
}
