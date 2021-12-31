import { useState } from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addCONTESTError,
  addCONTESTLoading,
  addCONTESTSuccess,
} from "../redux/contest/action";
import axios from "axios";
const Style = styled.div`
  /* box-shadow: 0px 2px 5px #aaa9a9; */
  margin-top: 30px;
  h2 {
    text-align: center;
  }
  .form {
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 80px;
    gap: 15px;
    label {
      font-weight: 700;
      font-size: 15px;
    }
    input {
      border: none;
      padding: 8px;
      border-bottom: 1px solid gray;
      :active {
        outline: none;
        background-color: white;
      }
      ::placeholder {
        font-size: 16px;
      }
      :focus {
        outline: none;
        background-color: white;
      }
      ::after {
        background-color: white;
      }
    }
  }
  .buttonDiv {
    display: flex;
    justify-content: center;
    width: 35%;
    margin: auto;
    margin-bottom: 30px;
    gap: 30px;
    align-items: center;

    .button {
      width: 100px;
      border: none;
      border-radius: 4px;
      background-color: #f04455;
      color: white;
      font-size: 16px;
      font-weight: 500;
      margin: auto;
      height: 40px;
    }
    select {
      /* width: 100px; */
      padding: 10px;
      border: none;
      height: 40px;
      border-radius: 4px;
      background-color: #8c8989;
      color: white;
      font-size: 16px;
      font-weight: 500;
      margin: auto;
      ::after {
        outline: none;
      }
    }
  }
`;
export const AddContest = () => {
  const [data, setData] = useState({
    title: "",
    time: "",
    deadline: "",
    tags: "",
    type: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleData = async () => {
    dispatch(addCONTESTLoading());
    try {
      const Data = await axios.post("http://localhost:5000/contests/", data);
      console.log("Thissssi dddaaf",Data.data);
      dispatch(addCONTESTSuccess(Data.data.contest));
    } catch (err) {
      console.log(err);
      dispatch(addCONTESTError(err));
    }
  };
  return (
    <Style>
      <h2>Add contest here</h2>
      <div className="form">
        <label htmlFor="Title">Title</label>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Add Title"
        />
        <DropdownButton
        style={{width:"150px"}}
          as={ButtonGroup}
          id={`dropdown-variants-Secondary`}
          title="Choose Type"
        >
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                type: "DSA",
              });
            }}
            value="Dhar"
            eventKey="1"
          >
            Dsa
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                type: "Coding",
              });
            }}
            eventKey="2"
          >
            Coding
          </Dropdown.Item>
        </DropdownButton>
        <label htmlFor="">Deadline</label>
        <input onChange={handleChange} type="date" name="deadline" />
        <label htmlFor="Tags">Tags</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add Tags"
          name="tags"
        />
      </div>
      <div className="buttonDiv">
        <label htmlFor="">Start Time</label>
        <input onChange={handleChange} name="time" type="time" />
        <Button onClick={handleData} variant="primary">
          Add
        </Button>
      </div>
    </Style>
  );
};
// title, type ( DSA or Coding ), deadline, tags, time
