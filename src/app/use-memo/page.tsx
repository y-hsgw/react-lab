import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("useMemo");

const basicUseMemoFile = readFileInCodeSandbox(
  "src/app/use-memo/_components/basic-use-memo.tsx"
);

const useMemoObjectFile = readFileInCodeSandbox(
  "src/app/use-memo/_components/use-memo-object.tsx"
);

const useMemoPropertyFile = readFileInCodeSandbox(
  "src/app/use-memo/_components/use-memo-property.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseMemo() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useMemoは、再レンダリング間の計算結果をキャッシュできるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useMemo" target="_">
            https://react.dev/reference/react/useMemo
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          第二引数の依存配列の要素が変化していなければ、再計算をスキップする。
        </Typography>
        <ExperimentSandpack files={basicUseMemoFile} />
      </div>
      <div>
        <Typography variant="h2">
          依存配列にオブジェクトを指定する際の注意点
        </Typography>
        <Typography>
          Reactは
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is">
            Object.is
          </Link>
          を使用して依存配列の比較を行います。そのため、下記ケースによって再計算するタイミングが異なるので注意が必要です。
        </Typography>
      </div>
      <div>
        <Typography variant="h3">
          依存配列にオブジェクトを丸ごと指定するケース
        </Typography>
        <Typography>
          ex）<code>user</code>
          オブジェクトの<code>name</code>と<code>age</code>
          プロパティが変更された場合、<code>validateAge</code>
          （useMemoの値）は再計算されます。
        </Typography>
        <ExperimentSandpack files={useMemoObjectFile} />
      </div>
      <div>
        <Typography variant="h3">
          依存配列に再計算したいオブジェクトのプロパティを指定するケース
        </Typography>
        <Typography>
          ex）<code>user</code>
          オブジェクトの<code>age</code>
          プロパティが変更された場合、<code>validateAge</code>
          （useMemoの値）は再計算されます。<code>name</code>
          プロパティが変更された場合、<code>validateAge</code>
          は再計算されません。
        </Typography>
        <ExperimentSandpack files={useMemoPropertyFile} />
      </div>
    </Stack>
  );
}
