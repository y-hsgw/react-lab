import { ChangeEvent, useState } from "react";
import { useTasks } from "./tasks-context";

const AddTask: React.FC = () => {
  const [text, setText] = useState("");
  const { dispatchTasks } = useTasks();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (!text) return;

    setText("");
    dispatchTasks({ type: "added", id: new Date().getTime(), name: text });
  };

  return (
    <>
      <input placeholder="タスクの追加" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddTask;
