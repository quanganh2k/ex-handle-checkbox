"use client";

import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export interface DataI {
  id: number;
  mathTeacher: string;
  literatureTeacher: string;
  englishTeacher: string;
  [key: `col_${string}`]: boolean;
}

const dummyData: DataI[] = [
  {
    id: 1,
    mathTeacher: "Toan1",
    literatureTeacher: "Van1",
    englishTeacher: "Anh1",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
  {
    id: 2,
    mathTeacher: "Toan2",
    literatureTeacher: "Van2",
    englishTeacher: "Anh2",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
  {
    id: 3,
    mathTeacher: "Toan3",
    literatureTeacher: "Van3",
    englishTeacher: "Anh3",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
  {
    id: 4,
    mathTeacher: "Toan4",
    literatureTeacher: "Van4",
    englishTeacher: "Anh4",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
  {
    id: 5,
    mathTeacher: "Toan5",
    literatureTeacher: "Van5",
    englishTeacher: "Anh5",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
  {
    id: 6,
    mathTeacher: "Toan6",
    literatureTeacher: "Van6",
    englishTeacher: "Anh6",
    col_mathTeacher: false,
    col_literatureTeacher: false,
    col_englishTeacher: false,
  },
];

const TableWithCheckbox = () => {
  //! State
  const [tableData, setTableData] = useState(dummyData);

  //! Function
  const renderData = (data: DataI[]) => {
    const results = [];
    for (let i = 0; i < data.length; i++) {
      const rowData = data[i];

      for (const [key, value] of Object.entries(rowData)) {
        if (value === true) {
          const keyObj = key.split("_")[1];
          results.push(rowData[keyObj as keyof DataI]);
        }
      }
    }
    return results;
  };

  //! Render
  return (
    <div>
      <table style={{ width: "100%" }}>
        <TableHead data={tableData} setTableData={setTableData} />
        <TableBody data={tableData} setTableData={setTableData} />
      </table>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h2 style={{ textAlign: "center" }}>Selected Items</h2>
          <div style={{ margin: " 0 auto" }}>
            {renderData(tableData).map((elm) => {
              return (
                <div
                  style={{
                    marginBottom: "10px",
                    textAlign: "center",
                    color: "#0175ff",
                  }}
                >
                  {elm}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWithCheckbox;
