import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

function App() {
  let items = [
    "Daniel",
    "David",
    "Deborah",
    "Daffodili",
    "Destiny",
    "Dubem",
    "Desmond",
    "Diamond",
    "Divine",
  ];
  const [showAlert, setToShowAlert] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <h1>Welcome</h1>
      </div>
      <Welcome></Welcome>
      <ListGroup
        items={items}
        heading="Names"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {showAlert ? (
        <div className="alert alert-primary">
          <Alert onClicked={() => setToShowAlert(false)}>Hello World</Alert>
        </div>
      ) : null}
      <Button
        color="primary"
        onLoginClick={() => {
          setToShowAlert(true);
          console.log("INFO: login button has been pressed");
        }}
      >
        Log In
      </Button>
    </>
  );
}

export default App;
