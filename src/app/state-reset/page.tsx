import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("状態のリセット");

const keyResetFile = readFileInCodeSandbox(
  "src/app/state-reset/_components/key-reset.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function StateReset() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>状態のリセット方法についてまとめます。</Typography>
      </div>
      <div>
        <Typography variant="h2">keyを使用して状態をリセットする</Typography>
        <Typography>
          異なるKeyを渡すと渡されたコンポーネントの状態はリセットされます。
        </Typography>
        <ExperimentSandpack files={keyResetFile} />
      </div>
    </Stack>
  );
}
