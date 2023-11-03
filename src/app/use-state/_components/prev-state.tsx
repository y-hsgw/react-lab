import { useState } from "react";

const PrevState: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handlePlusOneClick = () => {
    increment();
  };

  const handlePlusThreeButtonClick = () => {
    increment();
    increment();
    increment();
  };

  return (
    <div>
      <p>カウンター：{count}</p>
      <button onClick={handlePlusOneClick}>+1</button>
      <button onClick={handlePlusThreeButtonClick}>+3</button>
    </div>
  );
};

export default PrevState;
