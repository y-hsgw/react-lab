import { readFileInCodeSandbox } from "@/app/_utils/readFileInCodeSandbox";

const basicUseIdFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/unified-context/app.tsx"
);

const addTaskFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/unified-context/add-task.tsx",
  "add-task.tsx"
);

const tasksContextFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/unified-context/tasks-context.tsx",
  "tasks-context.tsx"
);

const taskListFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/unified-context/task-list.tsx",
  "task-list.tsx"
);

export const unifiedContextFile = {
  ...basicUseIdFile,
  ...addTaskFile,
  ...tasksContextFile,
  ...taskListFile,
} as const;
