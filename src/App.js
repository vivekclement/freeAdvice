import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);

    // console.log(data.slip.advice);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Free Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have been adviced <strong>{props.count}</strong> times today.
    </p>
  );
}
