import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("Suspense");

const basicSuspenseFile = readFileInCodeSandbox(
  "src/app/suspense/_components/basic-suspense.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function Suspense() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          子コンポーネントが読み込みを完了するまでフォールバックを表示できます
          <br />
          <Link href="https://react.dev/reference/react/Suspense" target="_">
            https://react.dev/reference/react/Suspense
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          <code>Suspense</code>でラップしたコンポーネントが読み込まれている間、
          <code>fallback</code>で指定したコンポーネントを表示します。
        </Typography>
        <ExperimentSandpack files={basicSuspenseFile} />
      </div>
    </Stack>
  );
}
