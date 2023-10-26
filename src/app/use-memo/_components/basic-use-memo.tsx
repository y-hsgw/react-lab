import { useMemo } from "react";

interface Props {
  todos: string[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo === ""),
    [todos]
  );

  return (
    <div>
      {filteredTodos.map((todo) => (
        <p key={todo}>{todo}</p>
      ))}
    </div>
  );
};

const BasicUseMemo: React.FC = () => {
  return (
    <div>
      <TodoList todos={[]} />
    </div>
  );
};

export default BasicUseMemo;
