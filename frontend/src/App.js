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
      <header>
        <Navigation isLoaded={isLoaded} />
      </header>
      <main>
        <Switch>
          <Route path="/">
            <h1>Hello from app</h1>
          </Route>
        </Switch>
      </main>
      <footer>
        <h1>Placeholder</h1>
        <h1>Placeholder</h1>
      </footer>
    </>
  );
}

export default App;
