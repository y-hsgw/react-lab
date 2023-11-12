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
      type: "changed";
      todo: Todo;
    };

const todoReducer = (todoList: Todo[], action: Action) => {
  switch (action.type) {
    case "added": {
      return [...todoList, action.todo];
    }
    case "changed": {
      return todoList.map((todo) => {
        return todo.id === action.todo.id ? action.todo : todo;
      });
    }
    default: {
      throw Error(`Unknown action`);
    }
  }
};

const PrevState: React.FC = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  const [todoName, setTodoName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handleAddButtonClick = () => {
    const id = new Date().getTime();
    dispatch({
      type: "added",
      todo: {
        id,
        done: false,
        name: todoName,
      },
    });
    dispatch({
      type: "changed",
      todo: {
        id,
        done: true,
        name: todoName,
      },
    });
  };

  const handleDoneCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    dispatch({
      type: "changed",
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

export default PrevState;
