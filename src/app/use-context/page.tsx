import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("useContext");

const basicUseContextFile = readFileInCodeSandbox(
  "src/app/use-context/_components/basic-use-context.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseContext() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントからコンテキストを読み取ってサブスクライブできるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useContext" target="_">
            https://react.dev/reference/react/useContext
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          コンポーネントのトップレベルで呼び出してコンテキストを読み取り、サブスクライブします。
          <br />
          <code>Button</code>
          コンポーネントでバケツリレーせず、<code>theme</code>
          状態を呼び出すことができます。
        </Typography>
        <ExperimentSandpack files={basicUseContextFile} />
      </div>
    </Stack>
  );
}
