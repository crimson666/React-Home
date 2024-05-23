import Messege from "./Messege";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["apple", "MI", "Nokia", "LG"];
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
    </div>
  );
}

export default App;
