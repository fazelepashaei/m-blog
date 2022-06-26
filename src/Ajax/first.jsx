import { useState } from "react";

function First() {
  const [datatid, setDataid] = useState(0);
  function Getpost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      // .then((json) => alert(json));
      .then((json) => console.log(json));
    // .then((json) => useState(json));
    return (
      <div style={{ backgroundColor: "red" }}>
        <h1>hhhhh</h1>;
      </div>
    );
  }
  return (
    <div>
      <button onClick={Getpost}>clickmeeee</button>
    </div>
  );
}

export default First;
