import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

interface listProps {
  listBla: string[];
  heading: string;
  onSelect: (itemSelected: string) => void;
}

function ListGroup({ listBla, heading, onSelect }: listProps) {
  const [selectedItem, setSelectItemIndex] = useState(-1);
  //JS Magic if some condition && something, if 1st one is true it will return the 2nd condition
  const ifNoList = () => {
    return listBla.length === 0 && <h1> No Iteams</h1>;
  };

  // const handleClickEvent = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <Fragment>
      <h1>Some random List of {heading}</h1>
      {ifNoList()}
      <ul className="list-group">
        {listBla.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectItemIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
