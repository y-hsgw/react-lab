import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { findExperiment } from "../_utils/find-experiment";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const foundExperiment = findExperiment("React.memo");

const memorizedFiles = readFileInCodeSandbox(
  "src/app/react-memo/_components/memoized-component.tsx"
);

const noMemorizedFiles = readFileInCodeSandbox(
  "src/app/react-memo/_components/no-memorized-component.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${foundExperiment.title} -`,
  description: foundExperiment.description,
};

export default function ReactMemo() {
  return (
    <Stack gap={2}>
      <div>
        <Typography component="h2" variant="h5" fontWeight="bold">
          {foundExperiment.title}
        </Typography>
        <Typography>
          memo を使うことで、props
          が変更されていない場合にコンポーネントの再レンダーをスキップできます。
        </Typography>
        <Typography>
          <Link href="https://ja.react.dev/reference/react/memo" target="_">
            https://ja.react.dev/reference/react/memo
          </Link>
        </Typography>
      </div>
      <div>
        <Typography fontWeight="bold">React.memoを使用しない場合</Typography>
        <ExperimentSandpack files={noMemorizedFiles} />
      </div>
      <div>
        <Typography fontWeight="bold">React.memoを使用する場合</Typography>
        <ExperimentSandpack files={memorizedFiles} />
      </div>
    </Stack>
  );
}
