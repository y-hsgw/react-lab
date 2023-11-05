import { ChangeEvent, useReducer, useState } from "react";

interface Todo {
  id: number;
  name: string;
  done: boolean;
}

type Action =
  | {
      type: "added";
      todo: Todo;
    }
  | {
      type: "change";
      todo: Todo;
    };

const todoReducer = (todoList: Todo[], action: Action) => {
  switch (action.type) {
    case "added": {
      return [...todoList, action.todo];
    }
    case "change": {
      return todoList.map((todo) => {
        return todo.id === action.todo.id ? action.todo : todo;
      });
    }
    default: {
      throw Error(`Unknown action`);
    }
  }
};

const BasicUseReducer: React.FC = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  const [todoName, setTodoName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handleAddButtonClick = () => {
    dispatch({
      type: "added",
      todo: {
        id: new Date().getTime(),
        done: false,
        name: todoName,
      },
    });
  };

  const handleDoneCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    dispatch({
      type: "change",
      todo: {
        ...todo,
        done: e.target.checked,
      },
    });
  };

  return (
    <>
      <label>
        TODO
        <input value={todoName} onChange={handleChange} />
      </label>
      <button onClick={handleAddButtonClick}>追加</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <label
              style={{
                textDecorationLine: todo.done ? "line-through" : undefined,
              }}
            >
              {todo.name}
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => handleDoneCheckboxChange(e, todo)}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BasicUseReducer;
