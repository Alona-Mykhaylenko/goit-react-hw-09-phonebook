import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "./navigation.module.css";

// const mapStateToProps = (state) => ({
//   isLoggedIn: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);

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

// import React from "react";
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
// import styles from "./navigation.module.css";

// const Navigation = ({ isLoggedIn }) => {
//   return (
//     <nav>
//       <NavLink to="/" exact className={styles.link}>
//         Home
//       </NavLink>

//       {isLoggedIn && (
//         <NavLink to="/contacts" exact className={styles.link}>
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// const mapStateToProps = (state) => ({
//   isLoggedIn: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
