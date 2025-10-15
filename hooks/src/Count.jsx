
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const inCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
