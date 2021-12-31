import styled from "styled-components";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  getUserError,
  getUserLoading,
  getUserSuccess,
} from "../redux/users/action";
import axios from "axios";
const Style = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  border-radius: 4px;
`;

export const StudentsList = () => {
  const { user, loading, error } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getUserLoading());
    try {
      const { data } = await axios("http://localhost:5000/users");
      dispatch(getUserSuccess(data.user));
    } catch (err) {
      dispatch(getUserError(err));
    }
  }, [dispatch]);
  return loading ? (
    <div>...loading</div>
  ) : error ? (
    <div>...error</div>
  ) : (
    <Style>
      <Table hover responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Education</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.city}</td>
              <td>{e.age}</td>
              <td>{e.qualification}</td>
              <td>{e.gender}</td>
              <td>{e.contact}</td>
              <td>{e.admin ? "Admin" : "Student"}</td>
              <td>
                <Button
                  onClick={async () => {
                    dispatch(deleteUser(e._id));
                    await axios.delete(
                      `http://localhost:5000/users/${e._id}`
                    );
                  }}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Style>
  );
};
