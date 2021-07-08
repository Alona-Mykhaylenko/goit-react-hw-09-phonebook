import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import styles from "./loginView.module.css";

// const mapDispatchToProps = {
//   onLogin: logIn,
// };

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

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { logIn } from "../../redux/auth/auth-operations";
// import styles from "./loginView.module.css";

// class LoginView extends Component {
//   state = { email: "", password: "" };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className={styles.formBox}>
//         <h1>Login page</h1>

//         <form onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Email <br />
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={styles.label}>
//             Password <br />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit" className={styles.submitButton}>
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
