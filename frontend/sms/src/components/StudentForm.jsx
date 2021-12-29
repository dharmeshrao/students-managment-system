import { useState } from "react";
export const StudentForm = () => {
  const [data, setData] = useState({
    name: "",
    city: "",
    age: "",
    gender: "",
    contact: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleAddStudent = () => {
    console.log(data);
  };
  return (
    <div>
      <input onChange={handleChange} type="text" name="name" />
      <input onChange={handleChange} type="text" name="city" />
      <input onChange={handleChange} type="number" name="age" />
      <select onChange={handleChange} name="gender" id="">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input onChange={handleChange} type="number" name="contact" />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

// "name": "Dharmesh",
// "city": "Gurgaon",
// "age": 21,
// "gender": "male",
// "contact": 9898,
