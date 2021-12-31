import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AddContest } from "./AddContest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCONTESTError,
  getCONTESTLoading,
  getCONTESTSuccess,
} from "../redux/contest/action";
import axios from "axios";
export const PublicContest = () => {
  let { contest, auth } = useSelector((store) => store);
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

  if (auth.token.user.admin) return <Redirect to="/" />;
  return contest.loading ? (
    <div>loading....</div>
  ) : contest.error ? (
    <div>error...</div>
  ) : (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          Contests
        </h2>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Time</th>
              <th>Deadline</th>
              <th>Tags</th>
            </tr>
            {contest.contest.map((e, i) => (
              <tr key={e._id}>
                <td>{i + 1}</td>
                <td>{e.title || ""}</td>
                <td>{e.type || ""}</td>
                <td>{e.time || ""}</td>
                <td>{e.deadline || ""}</td>
                <td>{e.tags || ""}</td>
              </tr>
            ))}
          </thead>
          <tbody>{console.log(contest)}</tbody>
        </Table>
      </div>
    </>
  );
};
