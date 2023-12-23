"use client";
import Image from "next/image";
import Arrow from "../../assets/Arrow circle up white.svg";
import Add from "../../assets/Add2.svg";
import DeleteIcon from "../../assets/trash bin trash.svg";
import updateIcon from "../../assets/update.svg";
import Link from "next/link";
import { josfin_slab_400, josfin_slab_600, jura } from "@/util/font";
import data from "@/data";
import { useState } from "react";

export default function Records() {
  const [students, setStudents] = useState(data);
  const remove = (id) => {
    setStudents(students.filter((student) => id !== student.id));
  };
  return (
    <div className="flex h-screen relative">
      <div className="h-full bg-sidebar p-6 rounded-r-3xl cursor-pointer">
        <Link href={"/"}>
          <Image src={Arrow} className="text-white" width={45} height={45} />
        </Link>
      </div>
      <div className="container flex flex-col justify-start items-start ml-32 gap-14 mt-20">
        <div className={`text-3xl ${jura.className}`}>Records Fields</div>
        <div className="w-5/6 h-[370px] overflow-auto hide-scrollbar">
          <table className={`w-full ${josfin_slab_400.className}`}>
            <thead className="text-2xl sticky top-0 bg-white z-50">
              <tr className="bg-[#FCF6FF] shadow-xl">
                <th className="text-center py-2 border-0 mb-8">Name</th>
                <th className="text-center py-2 border-0 mb-8">Matric</th>
                <th className="text-center py-2 border-0 mb-8">College</th>
                <th className="text-center py-2 border-0 mb-8">Department</th>
                <th className="text-center py-2 border-0 mb-8">Email</th>
                <th className="text-center py-2 border-0 mb-8" />
              </tr>
            </thead>
            {students.length > 0 ? (
              <tbody className={`text-lg ${josfin_slab_600.className}`}>
                {students.map((student, index) => {
                  const { id, name, matricNo, college, department, email } =
                    student;
                  return (
                    <tr key={index} className="hover:shadow-lg text-center">
                      <td className="border-b border-black py-4">{name}</td>
                      <td className="border-b border-black py-4">{matricNo}</td>
                      <td className="border-b border-black py-4">{college}</td>
                      <td className="border-b border-black py-4">
                        {department}
                      </td>
                      <td className="border-b border-black py-4">{email}</td>
                      <td className="border-b border-black py-4">
                        <div className="flex items-center gap-4">
                          <Link href={`/records/${id}`}>
                            <Image
                              className="cursor-pointer"
                              src={updateIcon}
                              width={25}
                              height={25}
                            />
                          </Link>
                          <Image
                            className="cursor-pointer"
                            src={DeleteIcon}
                            width={50}
                            height={50}
                            onClick={() => remove(id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-4 text-3xl">
                    No records found
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <Link href={"/create"}>
        <Image
          className=" absolute right-8 bottom-8 cursor-pointer"
          src={Add}
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
}
