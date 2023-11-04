import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("useRef");

const controlDOMFile = readFileInCodeSandbox(
  "src/app/use-ref/_components/control-dom.tsx"
);

const forwardRefFile = readFileInCodeSandbox(
  "src/app/use-ref/_components/forward-ref.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseRef() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useRefはレンダリングに必要のない値を参照できるReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useRef" target="_">
            https://react.dev/reference/react/useRef
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">refを使用したDOMの操作</Typography>
        <Typography>
          DOMを操作するために<code>ref</code>を使用するのが特に一般的です。
          <br /> ex）<code>ref</code>で取得したDOMに<code>scrollIntoView</code>
          を実行してスクロールを表現しています。
        </Typography>
        <ExperimentSandpack files={controlDOMFile} />
      </div>
      <div>
        <Typography variant="h2">
          カスタムコンポーネントへrefを渡す方法
        </Typography>
        <Typography>
          <Link href="https://react.dev/reference/react/forwardRef" target="_">
            forwardRef
          </Link>
          でラップする
        </Typography>
        <ExperimentSandpack files={forwardRefFile} />
      </div>
    </Stack>
  );
}
