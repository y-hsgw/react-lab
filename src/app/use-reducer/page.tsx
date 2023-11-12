import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("useReducer");

const basicUseReducerFile = readFileInCodeSandbox(
  "src/app/use-reducer/_components/basic-use-reducer.tsx"
);

const prevStateFile = readFileInCodeSandbox(
  "src/app/use-reducer/_components/prev-state.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseReducer() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントにリデューサーを追加できるReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useReducer" target="_">
            https://react.dev/reference/react/useReducer
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          コンポーネントのトップレベルで呼び出して、リデューサーを使用して状態を管理します。
          <br />
          ex）todoリストの配列を管理しています。
        </Typography>
        <ExperimentSandpack files={basicUseReducerFile} />
      </div>
      <div>
        <Typography variant="h2">前の状態に基づいて状態を更新する</Typography>
        <Typography>
          useStateの
          <Link href="https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state">
            アップデーター関数
          </Link>
          と同様にリデューサーはレンダリング中に実行されます。(アクションは次のレンダリングまでキューに入れられます。)
          <br />
          ex）todoリストの追加ボタンクリック後、最初に<code>added</code>
          が実行され、<code>done</code>の値がfalseになります。その次に
          <code>changed</code>が実行され
          <code>done</code>
          の値がtrueになります。
        </Typography>
        <ExperimentSandpack files={prevStateFile} />
      </div>
    </Stack>
  );
}
