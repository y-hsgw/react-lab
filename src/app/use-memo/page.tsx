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

const useMemoObjectFiles = readFileInCodeSandbox(
  "src/app/use-memo/_components/use-memo-object.tsx"
);

const useMemoPropertyFiles = readFileInCodeSandbox(
  "src/app/use-memo/_components/use-memo-property.tsx"
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
        <Typography component="h3" variant="h6" fontWeight="bold">
          基本的な使用法
        </Typography>
        <Typography>
          第二引数の依存配列の要素が変化していなければ、再計算をスキップする。
        </Typography>
        <ExperimentSandpack files={basicUseMemoFiles} />
      </div>
      <div>
        <Typography component="h3" variant="h6" fontWeight="bold">
          依存配列にオブジェクトを丸ごと指定するケース
        </Typography>
        <Typography>
          ex）<code>user</code>
          オブジェクトの<code>name</code>と<code>age</code>
          プロパティが変更された場合、<code>validateAge</code>
          （useMemoの値）は再計算されます。
        </Typography>
        <ExperimentSandpack files={useMemoObjectFiles} />
      </div>
      <div>
        <Typography component="h3" variant="h6" fontWeight="bold">
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
        <ExperimentSandpack files={useMemoPropertyFiles} />
      </div>
    </Stack>
  );
}
