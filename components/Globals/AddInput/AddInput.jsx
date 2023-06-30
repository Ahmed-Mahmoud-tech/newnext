import React from "react";
import Wrapper from "./AddInput.styled";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";

const AddInput = ({ items, setItems, name }) => {
  const [itemInput, setItemInput] = useState();
  const removeItem = (index) => {
    setItems(items.filter((item) => item !== items[index]));
  };
  const addItem = () => {
    itemInput?.trim().length > 0 && setItems([...items, itemInput.trim()]);
    setItemInput("");
  };
  return (
    <Wrapper>
      <div className="withButton">
        <input
          type="text"
          name={name}
          id={name}
          placeholder={name}
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button type="button" onClick={addItem}>
          +
        </button>
      </div>
      <div className="itemContainer">
        {items.map((value, index) => (
          <div className="item" key={index}>
            <span className="value">{value}</span>{" "}
            <span className="close" onClick={() => removeItem(index)}>
              <BsTrash />
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AddInput;
