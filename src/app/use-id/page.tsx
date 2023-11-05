import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("useId");

const basicUseIdFile = readFileInCodeSandbox(
  "src/app/use-id/_components/basic-use-id.tsx"
);

const noUseIdFile = readFileInCodeSandbox(
  "src/app/use-id/_components/no-use-id.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseId() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          アクセシビリティ属性に渡すことができる一意のIDを生成するためのReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useId" target="_">
            https://react.dev/reference/react/useId
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">基本的な使用法</Typography>
        <Typography>
          コンポーネントのトップレベルで呼び出して、一意のIDを生成します。
          <br />
          ラベルをクリックしたら関連したInputにフォーカスします。
        </Typography>
        <ExperimentSandpack files={basicUseIdFile} />
      </div>
      <div>
        <Typography variant="h2">useIdを使用しない場合</Typography>
        <Typography>
          <code>TextField</code>
          コンポーネント内でハードコードのIDを指定しているため、
          <code>TextField</code>
          コンポーネントが画面上に複数回表示されたらIDが衝突してしまいます。
          <br />
          どのラベルをクリックしても全て「姓」のInputにフォーカスしています。
        </Typography>
        <ExperimentSandpack files={noUseIdFile} />
      </div>
    </Stack>
  );
}
