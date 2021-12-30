import "./App.css";
import { NavbarHeader } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { Contest } from "./components/Contest";
import { MainRoute } from "./components/MainRoute";
export default function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainRoute />
        </Route>
        <Route to="/contest">
          <Contest />
        </Route>
        <Route>...404 error No page found</Route>
      </Switch>
    </div>
  );
}
