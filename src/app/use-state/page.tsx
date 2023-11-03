import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("useState");

const basicUseStateFile = readFileInCodeSandbox(
  "src/app/use-state/_components/basic-use-state.tsx"
);

const prevStateFile = readFileInCodeSandbox(
  "src/app/use-state/_components/prev-state.tsx"
);

const nextStateFile = readFileInCodeSandbox(
  "src/app/use-state/_components/next-state.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseState() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useStateコンポーネントに状態変数を追加できる Reactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useState" target="_">
            https://react.dev/reference/react/useState
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          戻り値の配列の最初の要素が現在の状態。2つ目の要素が要素が状態を更新する
          <code>set</code>関数。
          <br />
          ex）<code>name</code>を状態として保持し、
          <code>onChange</code>イベントが実行するたびに<code>set</code>
          関数を実行して<code>name</code>の状態を更新しています。
        </Typography>
        <ExperimentSandpack files={basicUseStateFile} />
      </div>
      <div>
        <Typography variant="h2">前の状態に基づいて状態を更新する</Typography>
        <Typography>
          set関数の引数にアップデーター関数を指定すると前の状態を基に更新ができるようになります。
          ex）「+3」ボタンをクリックしたらカウンターが3つ増加する
        </Typography>
      </div>
      <div>
        <Typography variant="h3">アップデーター関数を使用する場合</Typography>
        <Typography>
          前の状態のcountを基に1つ増加するようになっています。
        </Typography>
        <ExperimentSandpack files={prevStateFile} />
      </div>
      <div>
        <Typography variant="h3">次の状態を直接使用する場合</Typography>
        <Typography>
          <code>set</code>関数を実行しても、すでに実行されているコードの
          <code>count</code>状態は更新されないです。
        </Typography>
        <ExperimentSandpack files={nextStateFile} />
      </div>
    </Stack>
  );
}
