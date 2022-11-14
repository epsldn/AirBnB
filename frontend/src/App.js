import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./component/LoginFormPage/LoginFormPage";
import * as sessionReducer from "./store/sessionReducer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionReducer.getSession()).then(_ => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <h1>Hell from app</h1>
    </Switch>
  );
}

export default App;
