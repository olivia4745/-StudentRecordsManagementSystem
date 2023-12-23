import Image from "next/image";
import DesignerDesk from "../assets/Designer Desk 2.svg";
import HomeBg from "../assets/Texture Drawing Curly.svg";
import GetStartedArrow from "../assets/Arrow circle up.svg";
import { inter, julius } from "@/util/font";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-screen h-screen flex justify-between items-center bg-primary overflow-hidden">
      <div className="h-full w-[55%] flex flex-col items-start justify-center px-16 gap-8">
        <div className="flex w-full justify-between">
          <h1
            className={`flex flex-col uppercase ${julius.className} text-7xl`}
          >
            Student Record Database
          </h1>
          <Image src={DesignerDesk} width={200} height={200} />
        </div>
        <Link
          href={"/records"}
          className="flex bg-[#FBF2FF] items-center p-4 px-16 gap-8 rounded-full cursor-pointer"
        >
          <span className={`text-4xl ${inter.className}`}>Get Started</span>
          <Image className="rotate-0" src={GetStartedArrow} />
        </Link>
      </div>
      <div className="bg-secondary rounded-l-3xl h-full w-[45%]">
        <Image src={HomeBg} className="h-full -scale-x-100 w-full" />
      </div>
    </main>
  );
}
