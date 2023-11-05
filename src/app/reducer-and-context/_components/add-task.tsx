import { ChangeEvent, useState } from "react";

const AddTask: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
  };

  return (
    <>
      <input placeholder="タスクの追加" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddTask;
