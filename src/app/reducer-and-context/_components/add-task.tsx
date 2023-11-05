import { ChangeEvent, useState } from "react";

interface Props {
  onAddTask: (text: string) => void;
}

const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
    onAddTask(text);
  };

  return (
    <>
      <input placeholder="タスクの追加" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddTask;
