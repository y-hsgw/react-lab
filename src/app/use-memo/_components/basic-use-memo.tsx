import { useMemo, useState } from "react";

interface Props {
  todoList: string[];
}

const TodoList: React.FC<Props> = ({ todoList }) => {
  const [value, setValue] = useState("");

  console.time("filteredTodoList");
  const filteredTodoList = useMemo(() => {
    console.log("filteredTodoList");
    return todoList.filter((todo) => todo !== "");
  }, [todoList]);
  console.timeEnd("filteredTodoList");

  console.time("noMemorizedFilteredTodoList");
  const noMemorizedFilteredTodoList = () => {
    console.log("noMemorizedFilteredTodoList");
    return todoList.filter((todo) => todo !== "");
  };
  console.timeEnd("noMemorizedFilteredTodoList");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {filteredTodoList.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
      {noMemorizedFilteredTodoList().map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
    </div>
  );
};

const BasicUseMemo: React.FC = () => {
  const emptyStrings = new Array<string>(500).fill("");
  const textStrings = new Array<string>(1000).fill("text");
  const dummyTodoList = emptyStrings.concat(textStrings);
  return (
    <div>
      <TodoList todoList={dummyTodoList} />
    </div>
  );
};

export default BasicUseMemo;
