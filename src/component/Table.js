import React from "react";

const Table = ({ mapList }) => {
  console.log(mapList);
  return (
    <>
      <div>
        <center>
          <h1>Table</h1>
        </center>

        <table>
          <thead>
            <tr>
              {/* <th>Salesforce Fields</th>
          <th>CallHub Custom Fields</th> */}
              <th>Field 1</th>
              <th>Field 2</th>
            </tr>
          </thead>
          <tbody>
            {mapList.map((elem) => {
              return (
                <tr>
                  <td>{elem.left}</td>
                  <td>{elem.right}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
