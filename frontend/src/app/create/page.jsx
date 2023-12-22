"use client";
import { useState } from "react";

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
    <div className="h-screen bg-form bg-[80vh 80vw]  bg-no-repeat">
      <div>
        <div></div>
        <div>
          <h1>Add Student</h1>
          <span>Fill the Form</span>
        </div>
      </div>
      <form action="post">
        <input
          type="text"
          onChange={handleChange}
          value={studentData.surname}
          placeholder="surname"
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.firstName}
          placeholder="first name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.matricNo}
          placeholder="matric number"
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.college}
          placeholder="college"
        />
        <input
          type="text"
          onChange={handleChange}
          value={studentData.department}
          placeholder="department"
        />
        <input
          type="email"
          onChange={handleChange}
          value={studentData.email}
          placeholder="email"
        />
        <div></div>
      </form>
    </div>
  );
}
