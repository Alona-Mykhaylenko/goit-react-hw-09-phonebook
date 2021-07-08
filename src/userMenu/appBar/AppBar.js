import React from "react";

import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../UserMenu";
import styles from "./appBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <nav className={styles.formBox}>
      <h4 className={styles.logo}>Phonebook</h4>

      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}
