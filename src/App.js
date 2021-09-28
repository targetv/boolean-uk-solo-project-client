import { Redirect, Route, Switch, useHistory } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import { useState, useEffect } from "react";

function App() {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  console.log("User Router", { authenticatedUser });

  useEffect(() => {
    if (authenticatedUser) return;
    const userAsJSON = localStorage.getItem("user");
    const user = JSON.parse(userAsJSON);

    if (user) {
      setAuthenticatedUser(user);
      history.push("/home");
    }
  }, [authenticatedUser]);

  const handelLogout = () => {
    localStorage.removeItem("user");
    setAuthenticatedUser(null);
  };

  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/landingpage" />
          </Route>
          <Route path="/landingpage">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage
              setAuthenticatedUser={setAuthenticatedUser}
              authenticatedUser={authenticatedUser}
            />
          </Route>
          <Route path="/register">
            <RegisterPage setAuthenticatedUser={setAuthenticatedUser} />
          </Route>
          <Route path="/account">
            {authenticatedUser ? (
              <AccountPage />
            ) : (
              <Redirect to="/landingpage" />
            )}
          </Route>
          <Route path="/home" exact>
            {authenticatedUser ? <HomePage /> : <Redirect to="/landingpage" />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
