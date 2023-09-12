import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
              onSelectItem(item);
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
