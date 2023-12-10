"use client";

import React, { Dispatch, SetStateAction } from "react";
import { DataI } from "./TableWithCheckbox";
import Checkbox from "./Checkbox";

export interface TableBodyProps {
  data: DataI[];
  setTableData: Dispatch<SetStateAction<DataI[]>>;
}

const TableBody = (props: TableBodyProps) => {
  //! State
  const { data, setTableData } = props;

  //! Function
  const checkboxHandler = (row: DataI, colIndex: number) => {
    const column = Object.keys(row).slice(4)[colIndex];

    setTableData((prev) => {
      const nextData = prev.map((elm) => {
        return elm.id === row.id
          ? {
              ...elm,
              [column]:
                !elm[
                  column as keyof Omit<
                    DataI,
                    | "id"
                    | "mathTeacher"
                    | "literatureTeacher"
                    | "englishTeacher"
                  >
                ],
            }
          : elm;
      });

      return nextData;
    });
  };

  const isSelectedItem = (row: DataI, colIndex: number) => {
    const column = Object.keys(row).slice(4)[colIndex];

    return row[
      column as keyof Omit<
        DataI,
        "id" | "mathTeacher" | "literatureTeacher" | "englishTeacher"
      >
    ];
  };

  //! Render
  return (
    <tbody>
      {data.map((row, rowIndex) => {
        return (
          <tr key={row.id}>
            {Object.values(row)
              .slice(0, 4)
              .map((el, colIndex) => {
                return (
                  <td key={el}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <span>{el}</span>
                      {colIndex !== 0 && (
                        <Checkbox
                          value={el}
                          checked={isSelectedItem(row, colIndex - 1)}
                          onChange={() => checkboxHandler(row, colIndex - 1)}
                        />
                      )}
                    </div>
                  </td>
                );
              })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
