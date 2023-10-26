import { Stack, Typography } from "@mui/material";
import { findExperiment } from "../_utils/find-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const foundExperiment = findExperiment("useMemo");

const basicUseMemoFiles = readFileInCodeSandbox(
  "src/app/use-memo/_components/basic-use-memo.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${foundExperiment.title} -`,
  description: foundExperiment.description,
};

export default function UseMemo() {
  return (
    <Stack gap={2}>
      <div>
        <Typography component="h2" variant="h4" fontWeight="bold">
          {foundExperiment.title}
        </Typography>
        <Typography my={1}>
          useMemoは、再レンダリング間の計算結果をキャッシュできるReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useMemo" target="_">
            https://react.dev/reference/react/useMemo
          </Link>
        </Typography>
      </div>
      <div>
        <ExperimentSandpack files={basicUseMemoFiles} />
      </div>
    </Stack>
  );
}
