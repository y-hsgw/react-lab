import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("メモ化の可否ケース集");

const notMemoObjectFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/not-memo-object.tsx"
);

const memoObjectFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/memo-object.tsx"
);

const useMemoObjectFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/use-memo-object.tsx"
);

const notMemoFunctionFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/not-memo-function.tsx"
);

const memoFunctionFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/memo-function.tsx"
);

const useCallbackFunctionFile = readFileInCodeSandbox(
  "src/app/can-memoize/_components/use-callback-function.tsx"
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
        <ExperimentSandpack files={notMemoObjectFile} />
      </div>
      <div>
        <Typography>
          コンポーネント外でオブジェクトを定義すればメモ化可能です。
        </Typography>
        <ExperimentSandpack files={memoObjectFile} />
      </div>
      <div>
        <Typography>
          もしくは<code>useMemo</code>を使用することでもメモ化可能です。
        </Typography>
        <ExperimentSandpack files={useMemoObjectFile} />
      </div>
      <div>
        <Typography variant="h2">関数のメモ化ケース</Typography>
        <Typography>
          React.memoを使用していても、propsで渡す値が関数の場合はメモ化できません。
          <br />
          ex）チェックボックスでテーマを切り替えた時、<code>Button</code>
          コンポーネントが再レンダーされています。
        </Typography>
        <ExperimentSandpack files={notMemoFunctionFile} />
      </div>
      <div>
        <Typography>
          コンポーネント外で関数を定義すればメモ化可能です。
        </Typography>
        <ExperimentSandpack files={memoFunctionFile} />
      </div>
      <div>
        <Typography>
          もしくは<code>useCallback</code>を使用することでもメモ化可能です。
        </Typography>
        <ExperimentSandpack files={useCallbackFunctionFile} />
      </div>
    </Stack>
  );
}
