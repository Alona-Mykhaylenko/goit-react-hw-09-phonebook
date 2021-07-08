import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppBar from "./userMenu/appBar/AppBar";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/registerView/RegisterView"));
const LoginView = lazy(() => import("./views/loginView/LoginView"));
const ContactsView = lazy(() => import("./views/contactsView/ContactsView"));

export default function App() {
  const dispatch = useDispatch();

  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // const mapDispatchToProps = {
  //   onGetCurrentUser: getCurrentUser,
  // };

  return (
    <Router>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Component, Suspense, lazy } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import AppBar from "./userMenu/appBar/AppBar";
// import { connect } from "react-redux";
// import { getCurrentUser } from "./redux/auth/auth-operations";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const HomeView = lazy(() => import("./views/HomeView"));
// const RegisterView = lazy(() => import("./views/registerView/RegisterView"));
// const LoginView = lazy(() => import("./views/loginView/LoginView"));
// const ContactsView = lazy(() => import("./views/contactsView/ContactsView"));

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   state = {};
//   render() {
//     return (
//       <Router>
//         <AppBar />

//         <Suspense fallback={<p>Loading...</p>}>
//           <Switch>
//             <Route exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/contacts"
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/contacts"
//               component={LoginView}
//             />

//             <PrivateRoute
//               path="/contacts"
//               component={ContactsView}
//               redirectTo="/login"
//             />
//           </Switch>
//         </Suspense>
//       </Router>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
