import React, { useState } from "react";
import { Child } from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  console.log("parent rendered");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count- {count}
      </button>
      <button onClick={() => setCount(0)}>{count} </button>
      <button onClick={() => setCount(5)}>{count} </button>
      <Child />
    </div>
  );
}
