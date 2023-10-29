import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("メモ化の可否ケース集");

const basicUseMemoFiles = readFileInCodeSandbox(
  "src/app/use-memo/_components/basic-use-memo.tsx"
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
          メモ化できるケースとできないケースを下記にまとめました。
        </Typography>
      </div>
      <div>
        <Typography variant="h2">オブジェクトの比較</Typography>
        <Typography>
          第二引数の依存配列の要素が変化していなければ、再計算をスキップする。
        </Typography>
        <ExperimentSandpack files={basicUseMemoFiles} />
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
    </Stack>
  );
}
