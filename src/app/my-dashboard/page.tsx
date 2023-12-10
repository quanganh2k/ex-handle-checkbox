"use client";
import Checkbox from "@/components/Checkbox";
import React, { useState } from "react";

interface DataInterface {
  id: number;
  name: string;
  age: number;
}

const data: DataInterface[] = [
  {
    id: 1,
    name: "Quang Anh",
    age: 20,
  },
  {
    id: 2,
    name: "Neymar",
    age: 33,
  },
  {
    id: 3,
    name: "Messi",
    age: 22,
  },
  {
    id: 4,
    name: "Ronaldo",
    age: 42,
  },
];

const MyDashboard = () => {
  //! State
  const [selectedItems, setSelectedItems] = useState<DataInterface[]>([]);

  //! Function
  const checkAllHandler = () => {
    const isHandleUncheckAll = selectedItems.length === data.length;

    if (!isHandleUncheckAll) {
      if (selectedItems.length > 0) {
        const additionalItems = data.filter((el) => {
          const indexFound = selectedItems.findIndex((elm) => elm.id === el.id);
          if (indexFound === -1) {
            return el;
          }
        });
        setSelectedItems([...selectedItems, ...additionalItems]);
      } else {
        setSelectedItems(data);
      }
    } else {
      setSelectedItems([]);
    }
  };

  const checkboxHandler = (item: DataInterface) => {
    const isSelected = selectedItems.find((elm) => elm.id === item.id);

    if (isSelected) {
      const nextSelectedItems = selectedItems.filter((el) => el.id !== item.id);
      setSelectedItems(nextSelectedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isChecked = (id: number) => {
    return selectedItems.map((el) => el.id).indexOf(id) !== -1 ? true : false;
  };

  console.log("selected", selectedItems);

  //! Render
  return (
    <div>
      <h2>Options filter</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ width: "100px" }}>Check all</div>
        <Checkbox
          value={"all"}
          checked={selectedItems.length === data.length}
          onChange={checkAllHandler}
        />
      </div>

      {data.map((el) => {
        return (
          <div
            key={el.id}
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <div style={{ width: "100px" }}>{el.name}</div>
            <div>
              <Checkbox
                value={el.id}
                checked={isChecked(el.id)}
                onChange={() => checkboxHandler(el)}
              />
            </div>
          </div>
        );
      })}

      <h2>Results</h2>
      {selectedItems.map((el) => {
        return (
          <div key={el.id}>
            {el.name} - {el.age} years old
          </div>
        );
      })}
    </div>
  );
};

export default MyDashboard;
