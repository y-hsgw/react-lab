import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("useImperativeHandle");

const basicUseImperativeHandleFile = readFileInCodeSandbox(
  "src/app/use-imperative-handle/_components/basic-use-imperative-handle.tsx"
);

const multipleRefsFile = readFileInCodeSandbox(
  "src/app/use-imperative-handle/_components/multiple-refs.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseImperativeHandle() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          refとして公開されるハンドルをカスタマイズできるReactフックです。
          <br />
          <Link
            href="https://react.dev/reference/react/useImperativeHandle"
            target="_"
          >
            https://react.dev/reference/react/useImperativeHandle
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          DOMノード全体を公開するのではなく、呼び出したいメソッドのみに制限する等カスタマイズが可能です。
        </Typography>

        <ExperimentSandpack files={basicUseImperativeHandleFile} />
      </div>
      <div>
        <Typography variant="h2">複数のDOMを参照する場合</Typography>
        <Typography>
          複数のDOMを受け渡す場合でも<code>useImperativeHandle</code>
          が使用できる
        </Typography>
        <ExperimentSandpack files={multipleRefsFile} />
      </div>
    </Stack>
  );
}
