import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("メモ化の可否ケース集");

const notMemoObject = readFileInCodeSandbox(
  "src/app/can-memoize/_components/not-memo-object.tsx"
);

const memoObject = readFileInCodeSandbox(
  "src/app/can-memoize/_components/memo-object.tsx"
);

const useMemoObject = readFileInCodeSandbox(
  "src/app/can-memoize/_components/use-memo-object.tsx"
);

const notMemoFunction = readFileInCodeSandbox(
  "src/app/can-memoize/_components/not-memo-function.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function CanMemoize() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          メモ化できるケースとできないケースを下記にまとめました。
        </Typography>
      </div>
      <div>
        <Typography variant="h2">オブジェクトのメモ化ケース</Typography>
        <Typography>
          React.memoを使用していても、propsで渡す値がオブジェクトの場合はメモ化できません。
          <br />
          ex）チェックボックスでテーマを切り替えた時、<code>Greeting</code>
          コンポーネントが再レンダーされています。
        </Typography>
        <ExperimentSandpack files={notMemoObject} />
      </div>
      <div>
        <Typography>
          コンポーネント外でオブジェクトを定義すればメモ化可能です。
        </Typography>
        <ExperimentSandpack files={memoObject} />
      </div>
      <div>
        <Typography>
          もしくは<code>useMemo</code>を使用することでもメモ化可能です。
        </Typography>
        <ExperimentSandpack files={useMemoObject} />
      </div>
      <div>
        <Typography variant="h2">関数のメモ化ケース</Typography>
        <Typography>
          React.memoを使用していても、propsで渡す値が関数の場合はメモ化できません。
          <br />
          ex）チェックボックスでテーマを切り替えた時、<code>Button</code>
          コンポーネントが再レンダーされています。
        </Typography>
        <ExperimentSandpack files={notMemoFunction} />
      </div>
    </Stack>
  );
}
