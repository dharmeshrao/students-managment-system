import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import {
  getAuthError,
  getAuthloading,
  getAuthSucess,
} from "../redux/auth/action";
const Style = styled.div`
  width: 40%;
  padding: 30px;
  height: 380px;
  border-radius: 4px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0px 2px 5px #aaa9a9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    text-align: center;
  }
  label {
    font-weight: 700;
    font-size: 16px;
  }
  input {
    border: none;
    padding: 8px;
    border-bottom: 1px solid gray;
    :active {
      outline: none;
    }
    ::placeholder {
      font-size: 16px;
    }
    :focus {
      outline: none;
    }
  }
  button {
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #f04455;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin: auto;
  }
`;

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleLogin = async () => {
    dispatch(getAuthloading());
    try {
      const Data = await axios.post("http://localhost:5000/login", data);
      dispatch(getAuthSucess(Data.data));
    } catch (err) {
      dispatch(getAuthError(err));
    }
  };
  const store = useSelector((store) => store.auth);
  if (store.token) {
    if (store.token.user.admin) {
      return <Redirect to="/" />;
    } else return <Redirect to="/contest" />;
  }
  return (
    <Style>
      <h2>Login here</h2>
      <label htmlFor="#">Email</label>
      <input
        onChange={handleChange}
        name="email"
        placeholder="Enter your email"
        type="text"
      />
      <label htmlFor="#">Password</label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button onClick={() => handleLogin()}>Login</button>
    </Style>
  );
};
