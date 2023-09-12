import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  let [selectElement, setSelectedElement] = useState(-1);

  let getClassName = (selectElement: number, index: number) => {
    return selectElement === index
      ? "list-group-item active"
      : "list-group-item";
  };

  return (
    <>
      <h1>{heading}</h1>
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
