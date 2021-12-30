import { Redirect } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { StudentsList } from "./StudentsList";

export const MainRoute = () => {
  let token;
  if (JSON.parse(localStorage.getItem("acess_token_sms"))) {
    token = JSON.parse(localStorage.getItem("acess_token_sms"));
  } else token = false;
  if (!token) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <>
      <StudentForm />
      <StudentsList />
    </>
  );
};
