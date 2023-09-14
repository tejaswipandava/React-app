import Message from "./Message";
import Alert from "./components/Alert";
// @ts-ignore
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];
  let selectedItem = (item: String) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Alert>Well finally i am able to print text</Alert>
      </div>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup
          items={items}
          heading="We have 6 elements"
          onSelectItem={selectedItem}
        />
      </div>
    </>
  );
}

export default App;
