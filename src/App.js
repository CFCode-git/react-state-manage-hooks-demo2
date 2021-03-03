import "./App.css";
import { Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import { routerMap } from "./routerMap";

function App() {
  return (
    <>
      <div>hi</div>
      <Router>
        <ul>
          <li>
            <Link to="/page-a">PageA</Link>
          </li>
          <li>
            <Link to="/page-b">PageB</Link>
          </li>
        </ul>
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Redirect from="/" to="/page-a" />
            {routerMap.map((item) => (
              <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              />
            ))}
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}

export default App;
