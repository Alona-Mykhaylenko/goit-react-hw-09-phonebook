import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth/auth-selectors";

const PublicRoute = ({ isAuthenticated, children, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        children
      )}
    </Route>
  );
};

// render={(props) =>
//   isAuthenticated && routeProps.restricted ? (
//     <Redirect to="/contacts" />
//   ) : (
//     <Component {...props} />
//   )
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

export default PublicRoute;

// import React from "react";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
// import { getIsAuthenticated } from "../redux/auth/auth-selectors";

// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to="/contacts" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
