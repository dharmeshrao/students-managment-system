import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Table, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCONTESTError,
  getCONTESTLoading,
  getCONTESTSuccess,
  sortDate,
  sortDSA,
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
      <div style={{ width: "70%", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          Contests
        </h2>
        <DropdownButton
          as={ButtonGroup}
          id={`dropdown-variants-Secondary`}
          title="Sort Contest"
        >
          <Dropdown.Item
            value="Dhar"
            eventKey="1"
            onClick={() => {
              try {
                const payload = "DSA";
                dispatch(sortDSA(payload));
              } catch (err) {}
            }}
          >
            Dsa
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => {
              try {
                const payload = "Coding";
                dispatch(sortDSA(payload));
              } catch (err) {}
            }}
          >
            Coding
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(sortDate());
            }}
            eventKey="2"
          >
            Date
          </Dropdown.Item>
        </DropdownButton>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
