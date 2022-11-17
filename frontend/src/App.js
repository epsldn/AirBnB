import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import AllSpots from "./components/AllSpots/AllSpots";
import Navigation from "./components/Navigation";
import SpotForm from "./components/SpotForm/SpotForms";
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
        <div className={`navigation-container ${location.pathname.includes("/spots/") && !isNaN(location.pathname[location.pathname.length - 1]) ? "spot-showcase" : ""}`}>
          <Navigation isLoaded={isLoaded} />
        </div>
      </header>
      <main className={`app-content ${location.pathname.includes("/spots/") && !isNaN(location.pathname[location.pathname.length - 1]) ? "spot-showcase" : ""}`}>
        <Switch>
          <Route exact path="/spots/create">
            <SpotForm />
          </Route>
          <Route exact path="/spots/update">
            <SpotForm />
          </Route>
          <Route exact path="/spots/:spotId">
            <SpotShowCase />
          </Route>
          <Route exact path="/">
            <AllSpots />
          </Route>
        </Switch>
      </main>
      {isNaN(location.pathname[location.pathname.length - 1]) && <footer>
        <div className={`footer-container ${location.pathname.includes("/spots/") && !isNaN(location.pathname[location.pathname.length - 1]) ? "spot-showcase" : ""}`}>
          <h1>Placeholder</h1>
          <h1>Placeholder</h1>
        </div>
      </footer>}
    </>
  );
}

export default App;
