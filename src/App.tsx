import { useState } from "react";
import Messege from "./Messege";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  let items = ["apple", "MI", "Nokia", "LG"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const itemSelected = (itemSelected: string) => {
    console.log("selected item " + itemSelected);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
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
      {/* 
        <Switch>
          <Route exact path="/SomePath">
            <SomeComponent/>  
          <Route/>
          <Route exact path="/navPath/:id"> or to set dinamically say in loop list <Link to={`/some/${key.id}`}><Link/>
            <PathComponent/>  
          <Route/>
        <Switch/> 
        <Link to="/"> this is some link <Link/>
        //useEffect and clearup effect
        */}
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
