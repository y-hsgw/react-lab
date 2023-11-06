import React, { ChangeEvent, memo, useState } from "react";
import { Task, useTasks, useTasksDispatch } from "./tasks-context";

interface Props {
  task: Task;
}

const TaskListItem: React.FC<Props> = memo(({ task }) => {
  console.log(
    `TaskListItem was rendered at ${new Date().toLocaleTimeString()}`,
    task
  );

  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDoneCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  };

  const handleTaskNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        name: e.target.value,
      },
    });
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleDeleteButtonClick = () => {
    dispatch({ type: "deleted", id: task.id });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleDoneCheckboxChange}
      />

      {isEditing ? (
        <>
          <input value={task.name} onChange={handleTaskNameInputChange} />
          <button onClick={handleSaveButtonClick}>Save</button>
        </>
      ) : (
        <>
          {task.name}
          <button onClick={handleEditButtonClick}>Edit</button>
        </>
      )}

      <button onClick={handleDeleteButtonClick}>Delete</button>
    </label>
  );
});

const TaskList: React.FC = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskListItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
