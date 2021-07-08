import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth/auth-selectors";

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);

export default function PrivateRoute({
  children,
  isAuthenticated,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}

// import React from "react";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
// import { getIsAuthenticated } from "../redux/auth/auth-selectors";

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
