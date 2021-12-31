import "./App.css";
import { NavbarHeader } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { Contest } from "./components/Contest";
import { MainRoute } from "./components/MainRoute";
import { Private } from "./route/PrivateRoute";
import { PublicContest } from "./components/PublicContest";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAuthError,
  getAuthloading,
  getAuthSucess,
} from "./redux/auth/action";
import { getLocalstorage } from "./utils/localStorage";
export default function App() {
  const [dummy, setDummy] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setTimeout(() => {
      setDummy(dummy ? false : true);
    }, 500);
    localStorage.removeItem("acess_sms");
  };
  useEffect(() => {
    dispatch(getAuthloading());
    try {
      let data = getLocalstorage("acess_sms");
      dispatch(getAuthSucess(data));
    } catch (err) {
      console.log(err);
      dispatch(getAuthError(err));
    }
  }, [dummy]);

  return (
    <div className="App">
      <NavbarHeader handleDelete={handleDelete} />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contest">
          <PublicContest />
        </Route>
        <Private path="/users">
          <MainRoute />
        </Private>
        <Private path="/">
          <Contest />
        </Private>
        <Route>...404 error No page found</Route>
      </Switch>
    </div>
  );
}
