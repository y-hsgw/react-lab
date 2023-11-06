import { readFileInCodeSandbox } from "@/app/_utils/readFileInCodeSandbox";

const basicUseIdFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/best-practice/app.tsx"
);

const addTaskFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/best-practice/add-task.tsx",
  "add-task.tsx"
);

const tasksContextFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/best-practice/tasks-context.tsx",
  "tasks-context.tsx"
);

const taskListFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/best-practice/task-list.tsx",
  "task-list.tsx"
);

export const bestPracticeFile = {
  ...basicUseIdFile,
  ...addTaskFile,
  ...tasksContextFile,
  ...taskListFile,
} as const;
