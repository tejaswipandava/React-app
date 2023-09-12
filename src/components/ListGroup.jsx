function ListGroup() {
  var items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];
  items = [];

  var message = items.length === 0 ? <p>No element found</p> : null;

  return (
    <>
      <h1>We have 2 elements</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
