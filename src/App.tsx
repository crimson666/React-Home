import { useState } from "react";
import Messege from "./Messege";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  let items = ["apple", "MI", "Nokia", "LG"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const itemSelected = (itemSelected: string) => {
    console.log("selected item " + itemSelected);
  };

  return (
    <Router>
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
        {/* <Switch>
          <Route exact path="/SomePath">
        <SomeComponent/>  
        <Route/>
        <Switch/> */}
        <Button
          color={"success"}
          data={"Some Random button"}
          onClick={() => {
            setAlertVisibility(true);
          }}
        />
      </div>
    </Router>
  );
}

export default App;
