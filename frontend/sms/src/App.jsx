import "./App.css";
import { NavbarHeader } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { Contest } from "./components/Contest";
import { MainRoute } from "./components/MainRoute";
import { Private } from "./route/PrivateRoute";
export default function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Private path="/users">
          <MainRoute/>
        </Private>
        <Private path="/contest">
          <Contest/>
        </Private>
        <Route>...404 error No page found</Route>
      </Switch>
    </div>
  );
}
