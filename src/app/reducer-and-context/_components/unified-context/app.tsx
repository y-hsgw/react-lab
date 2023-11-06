import AddTask from "./add-task";
import TaskList from "./task-list";
import { TasksProvider } from "./tasks-context";

const App: React.FC = () => {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default App;
