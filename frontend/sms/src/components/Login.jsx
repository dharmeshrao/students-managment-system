import styled from "styled-components";

const Style = styled.div`
  width: 40%;
  padding:30px;
  height: 300px;
  border-radius: 4px;
  margin:auto;
  margin-top: 50px;
  box-shadow: 0px 2px 5px #aaa9a9;
  display: flex;
  flex-direction: column;
  gap:10px;
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
      :focus{
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
  return (
    <Style>
        <h2>Login here</h2>
      <input name="email" placeholder="Enter your email" type="text" />
      <input type="text" name="password" placeholder="Enter your password" />
      <button>Login</button>
    </Style>
  );
};
