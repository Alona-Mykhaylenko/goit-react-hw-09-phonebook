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

export default PublicRoute;
