import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AllSpots from "./components/AllSpots/AllSpots";
import Navigation from "./components/Navigation";
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
        <div className="navigation-container">
          <Navigation isLoaded={isLoaded} />
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <AllSpots />
          </Route>
        </Switch>
      </main>
      <footer>
        <div className="footer-container">
          <h1>Placeholder</h1>
          <h1>Placeholder</h1>
        </div>
      </footer>
    </>
  );
}

export default App;
