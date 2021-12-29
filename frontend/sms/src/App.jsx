
import "./App.css";
import { NavbarHeader } from "./components/Navbar";
import { StudentForm } from "./components/StudentForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./components/Login";
import { StudentsList } from "./components/StudentsList";
function App() {
  return (
    <div className="App">
      <NavbarHeader/>
      <StudentForm />
      {/* <Login/> */}
      <StudentsList/>
    </div>
  );
}

export default App;
