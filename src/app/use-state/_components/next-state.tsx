import { useState } from "react";

const NextState: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
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

export default NextState;
