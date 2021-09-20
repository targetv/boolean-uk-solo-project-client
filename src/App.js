import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
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
