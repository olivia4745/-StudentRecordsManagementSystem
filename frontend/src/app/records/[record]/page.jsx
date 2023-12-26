"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import data from "@/data";
import { inter, josfin_slab_600, jura } from "@/util/font";
import Image from "next/image";
import Arrow from "../../../assets/studentDetailArrow.svg";
import AddImage from "../../../assets/Add image.svg";
import Link from "next/link";

export default function StudentDetail() {
  const { record } = useParams();
  const [student, setStudent] = useState(
    ...data.filter(({ id }) => Number(record) === id)
  );
  return (
    <div className=" h-screen w-screen relative bg-detailPrimary">
      <div className="bg-detailPrimary h-1/3 w-full flex justify-center text-center relative">
        <Link className="absolute top-8 left-8" href={"/records"}>
          <Image src={Arrow} />
        </Link>
        <div className="text-center justify-center items-center pt-7">
          <span className="">Student Photo</span>
          <div className="relative h-full w-[200px]">
            <div className="bg-white h-[200px] w-[200px] rounded-full absolute -bottom-12 mx-auto">
              <div className="relative w-full h-full z-10">
                <Image
                  className="absolute bottom-0 right-0 cursor-pointer"
                  src={AddImage}
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 right-14 flex flex-col items-end justify-center gap-8">
          <div
            className={`py-3 px-10 w-52 bg-white text-center rounded-full shadow-xl cursor-pointer ${inter.className} text-xl `}
          >
            Update
          </div>
          <span className={`text-5xl ${jura.className}`}>Student Profile</span>
        </div>
        <div></div>
      </div>
      <div className="bg-detailSecondary w-full h-2/3 rounded-t-3xl flex flex-col justify-center gap-14 items-center">
        <div className={`${josfin_slab_600.className} text-5xl`}>
          {`${student.firstName} ${student.lastName}`}
        </div>
        <div
          className={`flex justify-center items-center h-16 gap-20 w-full text-3xl ${josfin_slab_600.className}`}
        >
          <span>{student.matricNo}</span>
          <div className="border border-[#823cab] h-full" />
          <span>{student.college}</span>
          <div className="border border-[#823cab] h-full" />
          <span>{student.department}</span>
        </div>
        <div>{student.email}</div>
      </div>
    </div>
  );
}
