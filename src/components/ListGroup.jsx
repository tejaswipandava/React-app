function ListGroup() {
  var items = ["egg", "chicken", "rice", "vegetables", "pasta", "pizza"];
  items = [];
  //problem with this approach is we will loose the h1 tag
  if (items.length === 0)
    return (
      <>
        <h1>We have 2 elements</h1>
        <p>No elements found</p>
      </>
    );

  return (
    <>
      <h1>We have 2 elements</h1>
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
