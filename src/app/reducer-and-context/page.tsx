import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("リデューサーとコンテキストの組み合わせ");

const basicUseIdFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/app.tsx"
);

const addTaskFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/add-task.tsx",
  "add-task.tsx"
);

const tasksContextFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/tasks-context.tsx",
  "tasks-context.tsx"
);

const taskListFile = readFileInCodeSandbox(
  "src/app/reducer-and-context/_components/task-list.tsx",
  "task-list.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function ReducerAndContext() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          リデューサーとコンテキストを組み合わせて、複雑な画面の状態を管理する方法の例をまとめます。
          <br />
          <Link
            href="https://react.dev/learn/scaling-up-with-reducer-and-context"
            target="_"
          >
            https://react.dev/learn/scaling-up-with-reducer-and-context
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">ReducerとContextを組み合わせる</Typography>
        <Typography>
          状態とその状態に関する処理（<code>dispatch</code>
          ）ごとにコンテキストを作成します。
          <br />
          <code>dispatch</code> のロジックを
          <code>useReducer</code>で実装しています。
          <br />
          バケツリレーを行わなくても状態を読み取り、<code>dispatch</code>
          を簡潔に行うことができるようになりました。
        </Typography>
        <ExperimentSandpack
          files={{
            ...basicUseIdFile,
            ...addTaskFile,
            ...tasksContextFile,
            ...taskListFile,
          }}
        />
      </div>
    </Stack>
  );
}
