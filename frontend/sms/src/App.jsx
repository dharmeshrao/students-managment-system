import "./App.css";
import { NavbarHeader } from "./components/Navbar";
import { StudentForm } from "./components/StudentForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { StudentsList } from "./components/StudentsList";
import { Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Switch>
        <Route path="/" exact>
          <StudentForm />
          <StudentsList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>...404 error No page found</Route>
      </Switch>
    </div>
  );
}
