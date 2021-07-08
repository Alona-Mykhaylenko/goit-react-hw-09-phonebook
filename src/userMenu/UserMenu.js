import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/auth/auth-operations";
import { getUserName } from "../redux/auth/auth-selectors";

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
