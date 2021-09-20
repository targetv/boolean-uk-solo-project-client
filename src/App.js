import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";

function App() {
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
            <LoginPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
