import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("不要なuseEffectのケース集");

const resetStateOnPropsChangeWithEffectFile = readFileInCodeSandbox(
  "src/app/unnecessary-us-effect-cases/_components/reset-state-on-props-change-with-use-effect.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UnnecessaryUseEffectCases() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useEffectが不要なケースをまとめます。
          <br />
          <Link
            href="https://ja.react.dev/learn/you-might-not-need-an-effect"
            target="_"
          >
            https://ja.react.dev/learn/you-might-not-need-an-effect
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">
          propsが変更されたときに全てのstateをリセットする
        </Typography>
        <Typography>
          propsの値が変更された時にuseStateのstate変数をリセットするケースについて比較します。
        </Typography>
      </div>
      <div>
        <Typography variant="h3">useEffectを使用しない場合</Typography>
        <Typography>
          <code>key</code>
          属性を使用することでstateをリセットすることができます。
        </Typography>
        <ExperimentSandpack files={resetStateOnPropsChangeWithEffectFile} />
      </div>
    </Stack>
  );
}
