import Message from "./Message";
// @ts-ignore
import ListGroup from "./components/ListGroup";

function App() {
  var items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];
  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup items={items} heading="We have 6 elements" />
      </div>
    </>
  );
}

export default App;
