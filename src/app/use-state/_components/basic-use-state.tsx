import { useState } from "react";

const BasicUseState: React.FC = () => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    window.alert(`Hello! ${name}`);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Hello</button>
    </div>
  );
};

export default BasicUseState;
