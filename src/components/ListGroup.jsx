import { useState } from "react";

function ListGroup() {
  var items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];

  const getClassName = (selectElement, index) => {
    return selectElement === index
      ? "list-group-item active"
      : "list-group-item";
  };

  let [selectElement, setSelectedElement] = useState(-1);

  return (
    <>
      <h1>We have 2 elements</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={getClassName(selectElement, index)}
            key={item}
            onClick={() => {
              setSelectedElement(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
