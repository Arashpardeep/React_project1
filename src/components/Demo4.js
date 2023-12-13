import { useState } from "react";

function Demo4() {
  const [count, setcount] = useState(10);
  const [name, setname] = useState("Max");

  function increase() {
    console.log("Hello");
    setcount(count + 1);
    setname(name === "Maxwell" ? "Peter" : "Maxwell");
  }

  return (
    <div>
      {count}
      {name}
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
}

export default Demo4;
