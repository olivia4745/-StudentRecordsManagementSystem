import Image from "next/image";
import Arrow from "../../assets/Arrow circle up.svg";
import Link from "next/link";

export default function Records() {
  return (
    <div className="flex h-screen">
      <div className="h-full bg-sidebar p-6 rounded-r-3xl cursor-pointer">
        <Link href={"/"}>
          <Image
            src={Arrow}
            className="text-white rotate-180"
            width={45}
            height={45}
          />
        </Link>
      </div>
      <div>
        <div>Records Fields</div>
        <div>
          <table>
            <th>
              <td></td>
              <td></td>
              <td></td>
            </th>
            {Array(2).map(() => (
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
