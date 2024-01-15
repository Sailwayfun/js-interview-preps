import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // setCount((prev) => prev + 1);
    console.log('side effect');
  }, [[]]);

  return (
    <>
      <div>
        <h1>useEffect empty array</h1>
        {/* <p>Count: { count }</p> */ }
      </div>
    </>
  );
}

export default App;
