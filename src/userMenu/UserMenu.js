import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/auth/auth-operations";
import { getUserName } from "../redux/auth/auth-selectors";

// const mapStateToProps = (state) => ({
//   name: getUserName(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

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

// import React from "react";
// import { connect } from "react-redux";
// import { logOut } from "../redux/auth/auth-operations";
// import { getUserName } from "../redux/auth/auth-selectors";

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div>
//     <img src={avatar} alt="" width="32" />
//     <span>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = (state) => ({
//   name: getUserName(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
