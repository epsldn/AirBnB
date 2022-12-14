import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import AllSpots from "./components/AllSpots/AllSpots";
import Navigation from "./components/Navigation";
import CreateSpotForm from "./components/SpotForms/CreateSpotForm";
import EditSpotForm from "./components/SpotForms/EditSpotForm";
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
      <header id={isNaN(location.pathname[location.pathname.length - 1]) ? null : "stop-navigation"}>
        <div className={`navigation-container ${location.pathname.includes("/spots/") && !isNaN(location.pathname[location.pathname.length - 1]) ? "spot-showcase" : ""}`}>
          <Navigation isLoaded={isLoaded} />
        </div>
      </header>
      <main className={`app-content ${location.pathname.includes("/spots/") && !isNaN(location.pathname[location.pathname.length - 1]) ? "spot-showcase" : ""}`}>
        <Switch>
          <Route exact path="/spots/create">
            <CreateSpotForm />
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
          <div className="about-me-section">
            <p>An AirBnB clone by Efrain Saldana</p>
            &nbsp;
            <a href="https://github.com/epsldn/AirBnB" id="github" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>}
    </>
  );
}

export default App;
