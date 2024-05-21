import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let listBla = ["apple", "MI", "Nokia", "LG"];
  //JS Magic if some condition && something, if 1st one is true it will return the 2nd condition
  const ifNoList = () => {
    return listBla.length === 0 && <h1> No Iteams</h1>;
  };
  return (
    <Fragment>
      <h1>Some random List</h1>
      {ifNoList()}
      <ul className="list-group">
        {listBla.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
