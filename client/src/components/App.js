import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.scss";
import NotificationSystem from "./shared/react-notification-system-redux";
import Header from "./header";
import About from "../components/About";
import RegisterUser from "../containers/RegisterUser";
import SignInUser from "../containers/session/SignInUser";
import SignOutUser from "../containers/session/SignOutUser";
import Mypage from "../components/mypage/Mypage";
import generateRequireSignInWrapper from "../containers/generateRequireSignInWrapper";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin"
});

const App = () => {
  return (
    <Router>
      <div className="App">
        <NotificationSystem />

        <Header />

        <div className="main">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/signUp" component={RegisterUser} />
            <Route exact path="/signIn" component={SignInUser} />
            <Route
              exact
              path="/signOut"
              component={requireSignIn(SignOutUser)}
            />
            <Route exact path="/mypage" component={requireSignIn(Mypage)} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
