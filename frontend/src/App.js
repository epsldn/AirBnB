import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage/SignUpFormPage";
import * as sessionReducer from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionReducer.getSession()).then(_ => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/">
          <h1>Hello from app</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
