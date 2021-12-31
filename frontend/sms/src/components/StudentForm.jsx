import { useState } from "react";
import styled from "styled-components";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addUserError,
  addUserLoading,
  addUserSuccess,
} from "../redux/users/action";
import axios from "axios";
const Style = styled.div`
  /* box-shadow: 0px 2px 5px #aaa9a9; */
  margin-top: 30px;
  h2 {
    text-align: center;
  }
  .form {
    width: 80%;
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
    gap: 10px;
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
export const StudentForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    city: "",
    age: "",
    gender: "",
    contact: "",
    qualification: "",
    type: "",
    password: "abc@123",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleAddStudent = async () => {
    dispatch(addUserLoading());
    try {
      const newData = await axios.post("http://localhost:5000/register", data);
      dispatch(addUserSuccess(newData.data.user));
    } catch (err) {
      alert(err);
      dispatch(addUserError(err));
    }
  };
  return (
    <Style>
      <h2>Add users here</h2>
      <div className="form">
        <label htmlFor="#">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <label htmlFor="#">Email:</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Email"
        />
        <label htmlFor="#">City:</label>
        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="Enter City"
        />
        <label htmlFor="#">Age:</label>
        <input
          onChange={handleChange}
          placeholder="Enter Age"
          type="number"
          name="age"
        />
        <label htmlFor="#">Contact:</label>
        <input
          onChange={handleChange}
          placeholder="Enter Contact Number"
          type="number"
          name="contact"
        />
      </div>
      <div className="buttonDiv">
        <DropdownButton
          as={ButtonGroup}
          id={`dropdown-variants-Secondary`}
          title="Gender"
        >
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                gender: "Male",
              });
            }}
            value="Dhar"
            eventKey="1"
          >
            Male
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                gender: "Female",
              });
            }}
            eventKey="2"
          >
            Female
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          as={ButtonGroup}
          id={`dropdown-variants-Secondary`}
          title="Type"
        >
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                type: "Admin",
              });
            }}
            value="Dhar"
            eventKey="1"
          >
            Admin
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                type: "Student",
              });
            }}
            eventKey="2"
          >
            Student
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          as={ButtonGroup}
          id={`dropdown-variants-Secondary`}
          title="Qualification"
        >
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                qualification: "Graduate",
              });
            }}
            value="Dhar"
            eventKey="1"
          >
            Graduate
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setData({
                ...data,
                qualification: "Postgraduate",
              });
            }}
            eventKey="2"
          >
            Post Graduate
          </Dropdown.Item>
        </DropdownButton>
        <button className="button" onClick={handleAddStudent}>
          Add
        </button>
      </div>
    </Style>
  );
};
