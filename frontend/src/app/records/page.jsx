import React from "react";

export default function Records() {
  return (
    <div>
      <div></div>
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
