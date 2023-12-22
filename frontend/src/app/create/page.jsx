import React, { useState } from "react";

export default function create() {
  const [studentData, setStudentData] = useState({
    surname: "",
    firstName: "",
    matricNo: "",
    college: "",
    department: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <div></div>
        <div>
          <h1></h1>
          <span></span>
        </div>
      </div>
      <form action="post">
        <input
          type="text"
          onChange={handleChange}
          value={studentData.surname}
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.firstName}
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.matricNo}
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.college}
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.department}
        />
        <input type="email" onChange={handleChange} value={studentData.email} />
        <div></div>
      </form>
    </div>
  );
}
