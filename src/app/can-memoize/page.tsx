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
        <Typography variant="h2">オブジェクトの比較</Typography>
        <Typography>
          React.memoを使用していても、propsで渡す値がオブジェクトの場合は再レンダーしてしまいます。
        </Typography>
        <ExperimentSandpack files={notMemoObject} />
      </div>
      <div>
        <Typography>
          コンポーネント外でオブジェクトを定義すれば再レンダーされなくなります。
        </Typography>
        <ExperimentSandpack files={memoObject} />
      </div>
    </Stack>
  );
}
