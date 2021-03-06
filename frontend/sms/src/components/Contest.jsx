import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AddContest } from "./AddContest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteContest,
  getCONTESTError,
  getCONTESTLoading,
  getCONTESTSuccess,
} from "../redux/contest/action";
import axios from "axios";
export const Contest = () => {
  let { auth, contest } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getCONTESTLoading());
    try {
      const DATA = await axios.get("http://localhost:5000/contests");
      dispatch(getCONTESTSuccess(DATA.data.contest));
    } catch (err) {
      dispatch(getCONTESTError(err));
    }
  }, []);
  if (!auth.token) {
    return <Redirect to="/login" />;
  }
  if (!auth.token.user.admin) {
    return <Redirect to="/contest" />;
  }
  return contest.loading ? (
    <div>loading....</div>
  ) : contest.error ? (
    <div>error...</div>
  ) : (
    <>
      <AddContest />
      <div style={{ width: "90%", margin: "auto" }}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Time</th>
              <th>Deadline</th>
              <th>Tags</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contest.contest.map((e, i) => (
              <tr key={e._id}>
                <td>{i + 1}</td>
                <td>{e.title || ""}</td>
                <td>{e.type || ""}</td>
                <td>{e.time || ""}</td>
                <td>{e.deadline || ""}</td>
                <td>{e.tags || ""}</td>
                <td>
                  <Button
                    onClick={async () => {
                      dispatch(deleteContest(e._id));
                      console.log(e._id, "hello");
                      await axios.delete(`http://localhost:5000/contests/${e._id}`)
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
      </div>
    </>
  );
};
