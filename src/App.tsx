import { useState } from "react";
import Messege from "./Messege";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["apple", "MI", "Nokia", "LG"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const itemSelected = (itemSelected: string) => {
    console.log("selected item " + itemSelected);
  };

  return (
    <div>
      <ListGroup
        listBla={items}
        heading="Mobile Brands"
        onSelect={itemSelected}
      />
      {/* <Alert Data={"Stuff to show"} /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Some Stuff <h1>this is Bold </h1>goes here
        </Alert>
      )}
      <Button
        color={"success"}
        data={"Some Random button"}
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
    </div>
  );
}

export default App;
