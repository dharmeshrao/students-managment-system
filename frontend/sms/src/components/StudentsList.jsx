import styled from "styled-components";
import { Table } from "react-bootstrap";
const Style = styled.div`
  width: 80%;
  margin: auto;
  /* text-align: center; */
  margin-top: 50px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px #aaa9a9;
`;

export const StudentsList = () => {
  return (
    <Style>
      <Table hover responsive="sm">
        <thead>
          <tr>
            <th> #</th>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Education</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td> 2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </Style>
  );
};
