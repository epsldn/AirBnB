import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./component/LoginFormPage/LoginFormPage";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <h1>Hell from app</h1>
    </Switch>
  );
}

export default App;
