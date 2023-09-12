import Message from "./Message";
// @ts-ignore
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];
  let selectedItem =(item:String)=>{
      console.log(item)
    }
  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup items={items} heading="We have 6 elements" onSelectItem={selectedItem}/>
      </div>
    </>
  );
}

export default App;
