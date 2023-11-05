import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface Task {
  id: number;
  name: string;
  done: boolean;
}

type Action =
  | ({
      type: "added";
    } & Omit<Task, "done">)
  | {
      type: "changed";
      task: Task;
    }
  | {
      type: "deleted";
      id: Task["id"];
    };

const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          name: action.name,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        return task.id === action.task.id ? action.task : task;
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action`);
    }
  }
};

const TasksContext = createContext<Task[]>([]);

const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

interface Props {
  children: ReactNode;
}

export const TasksProvider: React.FC<Props> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  const dispatch = useContext(TasksDispatchContext);
  if (!dispatch) throw Error("not found taskDispatch");

  return dispatch;
};
