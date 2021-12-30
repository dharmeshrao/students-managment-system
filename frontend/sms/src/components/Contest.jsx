import { Redirect } from "react-router-dom";
import { StudentForm } from "./StudentForm";

export const Contest = () => {
  let token;
  if (JSON.parse(localStorage.getItem("acess_token_sms"))) {
    token = JSON.parse(localStorage.getItem("acess_token_sms"));
  } else token = false;
  if (!token) {
    return <Redirect to="/" />;
  }
  if (token.user.admin) {
    return (
      <>
        <StudentForm />
        <h1>This is contest page</h1>;
      </>
    );
  }
  return (
    <>
      <h1>This is contest page</h1>;
    </>
  );
};
