import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { StudentsList } from "./StudentsList";

export const MainRoute = () => {
  const store = useSelector((store) => store.auth);
  if (!store.token) {
    return <Redirect to="contest" />;
  }
  if (!store.token.user.admin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <StudentForm />
      <StudentsList />
    </>
  );
};
