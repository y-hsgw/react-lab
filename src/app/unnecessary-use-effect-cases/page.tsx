import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("不要なuseEffectのケース集");

const resetStateOnPropsChangeWithEffectFile = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/reset-state-on-props-change-with-use-effect.tsx"
);

const resetStateOnPropsChangeWithKey = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/reset-state-on-props-change-with-key.tsx"
);

const partialResetStateOnPropsChangeWithKey = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/partial-reset-state-on-props-change-with-use-effect.tsx"
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
        <Typography variant="h3">useEffectを使用する場合</Typography>
        <Typography>
          useEffectを使用してpropsで受け取った値を依存配列に指定して、stateをリセットします。
        </Typography>
        <ExperimentSandpack files={resetStateOnPropsChangeWithEffectFile} />
      </div>
      <div>
        <Typography variant="h3">useEffectを使用しない場合</Typography>
        <Typography>
          <code>key</code>
          属性を使用することでstateをリセットすることができます。
        </Typography>
        <ExperimentSandpack files={resetStateOnPropsChangeWithKey} />
      </div>
      <div>
        <Typography variant="h2">
          propsが変更されたときに一部のstateを調整する
        </Typography>
        <Typography>
          propsの値が変更されたときに全部のstateではなく一部のみをリセットするケースについて比較します。
          <br />
          ex）追加したメンバーの中から任意のメンバーを選択。その後、再度メンバーを追加すると選択がリセットされるが、グループ名はリセットされない仕様を例とします。
        </Typography>
      </div>
      <div>
        <Typography variant="h3">useEffectを使用する場合</Typography>
        <Typography>
          useEffectを使用してpropsで受け取った値を依存配列に指定して、一部のstateをリセットします。
          <br />
        </Typography>
        <ExperimentSandpack files={partialResetStateOnPropsChangeWithKey} />
      </div>
    </Stack>
  );
}
