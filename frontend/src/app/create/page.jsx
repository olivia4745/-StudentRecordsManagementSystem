"use client";
import { useState } from "react";
import Arrow from "../../assets/Arrow circle up.svg";
import Upload from "../../assets/Upload.svg";
import Image from "next/image";
import {
  inter,
  josfin_slab_400,
  josfin_slab_600,
  josfin_slab_700,
  jura,
} from "@/util/font";

export default function create() {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    matricNo: "",
    college: "",
    department: "",
    email: "",
    passport: null,
  });

  const [passportImage, setPassportImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "passport") {
      const file = e.target.files[0]; // Get the selected file
      setStudentData((prev) => ({
        ...prev,
        passport: file, // Update passport in studentData with the selected file
      }));
    } else {
      setStudentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("firstName", String(studentData.firstName));
    formData.append("lastName", String(studentData.lastName));
    formData.append("matricNo", String(studentData.matricNo));
    formData.append("college", String(studentData.college));
    formData.append("department", String(studentData.department));
    formData.append("email", String(studentData.email));
    formData.append("passport", studentData.passport);
    for (const entry of formData.entries()) {
      console.log(entry);
    }
  };

  return (
    <div className="h-screen bg-form bg-cover bg-center bg-no-repeat">
      <div className="flex gap-4 mb-8 text-center pt-6">
        <div>
          <Image
            src={Arrow}
            width={40}
            height={40}
            className="rotate-180 text-[#0A0226]"
          />
        </div>
        <div className="text-[#0A0226]">
          <h1 className={`${jura.className} text-4xl`}>Add Student</h1>
          <span className={`${josfin_slab_400.className}`}>Fill the Form</span>
        </div>
      </div>
      <form
        className="bg-white rounded-2xl mx-16 px-10 pt-16 pb-8 h-3/4"
        action="post"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <div
            className={`flex flex-col flex-1 gap-8 ${josfin_slab_600.className} text-xl h-full`}
          >
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={studentData.firstName}
              placeholder="First Name"
              className="border-b-2 border-b-black focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={studentData.lastName}
              placeholder="Last Name"
              className="border-b-2 border-b-black focus:outline-none"
            />
            <input
              type="text"
              name="matricNo"
              onChange={handleChange}
              value={studentData.matricNo}
              placeholder="Matriculation No"
              className="border-b-2 border-b-black focus:outline-none"
            />
            <input
              type="text"
              name="college"
              onChange={handleChange}
              value={studentData.college}
              placeholder="College"
              className="border-b-2 border-b-black focus:outline-none"
            />
            <input
              type="text"
              name="department"
              onChange={handleChange}
              value={studentData.department}
              placeholder="Department"
              className="border-b-2 border-b-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={studentData.email}
              placeholder="Email"
              className=" border-b-2 border-b-black focus:outline-none"
            />
          </div>
          <div className="flex-1 w-full h-full flex justify-end items-center mt-16">
            <div className="text-center">
              <span
                className={`uppercase text-2xl ${josfin_slab_700.className}`}
              >
                Passport
              </span>
              <div className="cursor-pointer w-60 h-44 border border-dashed border-black rounded-xl bg-[#FCF6FF] flex flex-col items-center justify-center">
                {studentData.passport ? (
                  <img
                    src={URL.createObjectURL(studentData.passport)}
                    alt="Passport"
                    width={120}
                    height={120}
                  />
                ) : (
                  <>
                    <label className="cursor-pointer" htmlFor="file-upload">
                      <Image src={Upload} width={60} height={60} />
                      <input
                        name="passport"
                        type="file"
                        id="file-upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChange} // Ensure this onChange handler is correctly connected
                      />
                      <span className={`w-full ${josfin_slab_600.className}`}>
                        Upload File
                      </span>
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex w-full text-center justify-center relative top-20 left-60 gap-8">
          <div
            className={`bg-gradient-to-br from-purple-600 to-indigo-900 text-[#FCF6FF] text-xl ${inter.className} px-10 rounded-full w-56 cursor-pointer py-2`}
          >
            Discard
          </div>
          <div
            onClick={handleSubmit}
            className={`bg-[#FBF2FF] ${inter.className} px-10 rounded-full w-56 cursor-pointer text-xl py-2`}
          >
            Save
          </div>
        </div>
      </form>
    </div>
  );
}
