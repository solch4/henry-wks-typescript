import React, { useState } from "react";

interface AppProps {
  title: string;
}

function App({ title }: AppProps): JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Henry Workshop - {title}</h3>
      <hr />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br />
      <span>{counter}</span>
    </div>
  );
}

export default App;
