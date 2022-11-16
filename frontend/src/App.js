import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import AllSpots from "./components/AllSpots/AllSpots";
import Navigation from "./components/Navigation";
import SpotShowCase from "./components/SpotShowcase/SpotShowcase";
import * as sessionReducer from "./store/session";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
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
          <Route path="/spots/:spotId">
            <SpotShowCase />
          </Route>
          <Route exact path="/">
            <AllSpots />
          </Route>
        </Switch>
      </main>
      {location.pathname === "/" && <footer>
        <div className="footer-container">
          <h1>Placeholder</h1>
          <h1>Placeholder</h1>
        </div>
      </footer>}
    </>
  );
}

export default App;
