import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "./navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact className={styles.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
