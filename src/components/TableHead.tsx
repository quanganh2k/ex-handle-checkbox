"use client";

import React, { Dispatch, SetStateAction } from "react";
import { DataI } from "./TableWithCheckbox";
import Checkbox from "./Checkbox";

interface TableHeadrProps {
  data: DataI[];
  setTableData: Dispatch<SetStateAction<DataI[]>>;
}

const TableHead = (props: TableHeadrProps) => {
  //! State
  const { data, setTableData } = props;

  //! Function
  const handleHeaderCheckboxChange = (columnName: string) => {
    setTableData((prev) => {
      const cachedTableData = JSON.parse(
        localStorage.getItem("tableData") || ""
      );

      const isHandleUncheck = prev.every(
        (row) => !!row[columnName as keyof DataI]
      );

      if (isHandleUncheck) {
        return cachedTableData;
      } else {
        localStorage.setItem("tableData", JSON.stringify(prev));
        const nextData = prev.map((row) => ({
          ...row,
          [columnName]: row[columnName as keyof DataI]
            ? row[columnName as keyof DataI]
            : !row[columnName as keyof DataI],
        }));

        return nextData;
      }
    });
  };

  //! Render
  return (
    <thead>
      <tr>
        {Object.keys(data[0])
          .slice(0, 4)
          .map((el) => {
            return (
              <th key={el}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>{el}</span>
                  {el !== "id" && (
                    <Checkbox
                      value={el}
                      checked={data.every((elm) => elm[`col_${el}`])}
                      onChange={() => handleHeaderCheckboxChange(`col_${el}`)}
                    />
                  )}
                </div>
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHead;
