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
        <Typography variant="h1">{foundExperiment.title}</Typography>
        <Typography my={1}>
          memoを使うことで、propsが変更されていない場合にコンポーネントの再レンダーをスキップできます。
          <br />
          コンポーネントがメモ化されていても、コンポーネント自体の状態が変化すると再レンダリングされます。
          <strong>
            メモ化は、親からコンポーネントに渡される props にのみ関係します。
          </strong>
          <Link href="https://ja.react.dev/reference/react/memo" target="_">
            https://ja.react.dev/reference/react/memo
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">React.memoを使用しない場合</Typography>
        <Typography my={1}>
          子コンポーネント（Greeting）へのpropsの値が変わらない場合、子コンポーネントを再レンダーする。
        </Typography>
        <ExperimentSandpack files={noMemorizedFiles} />
      </div>
      <div>
        <Typography variant="h2">React.memoを使用する場合</Typography>
        <Typography my={1}>
          子コンポーネント（Greeting）へのpropsの値が変わらない場合、子コンポーネントは再レンダーされない。
        </Typography>
        <ExperimentSandpack files={memorizedFiles} />
      </div>
    </Stack>
  );
}
