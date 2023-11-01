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

const resetStateOnPropsChangeWithKeyFile = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/reset-state-on-props-change-with-key.tsx"
);

const partialResetStateOnPropsChangeWithUseEffectFile = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/partial-reset-state-on-props-change-with-use-effect.tsx"
);

const partialResetStateOnPropsChangeFile = readFileInCodeSandbox(
  "src/app/unnecessary-use-effect-cases/_components/partial-reset-state-on-props-change.tsx"
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
        <ExperimentSandpack files={resetStateOnPropsChangeWithKeyFile} />
      </div>
      <div>
        <Typography variant="h2">
          propsが変更されたときに一部のstateを調整する
        </Typography>
        <Typography>
          propsの値が変更されたときに全部のstateではなく一部のみをリセットするケースについて比較します。
          <br />
          <code>List</code>
          コンポーネントは、propとして<code>items</code>
          （アイテムのリスト）を受け取り、選択されたアイテムを
          <code>selectionItem</code>ステート変数に保持します。<code>items</code>
          propの値が異なる配列を受け取るたびに、<code>selectionItem</code>
          ステートをundefinedにリセットしたいとします。 ただ、<code>name</code>
          （あなたの名前）ステートはリセットされないようにします。
        </Typography>
      </div>
      <div>
        <Typography variant="h3">useEffectを使用する場合</Typography>
        <Typography>
          useEffectを使用してpropsで受け取った<code>items</code>
          を依存配列に指定して、<code>items</code>
          propの値が異なる配列を受け取るたび
          <code>selectionItem</code>
          ステートをundefinedにリセットします。
          <br />
        </Typography>
        <ExperimentSandpack
          files={partialResetStateOnPropsChangeWithUseEffectFile}
        />
      </div>
      <div>
        <Typography variant="h3">useEffectを使用しない場合</Typography>
        <Typography>
          <code>selectedId</code>
          ステートを保持するようにし、その値が<code>items</code>
          内のIDと一致する場合は、<code>selectionItem</code>
          にその値を保持します。そうでない場合は、一致するアイテムが見つからなかったため、
          <code>selectionItem</code>はundefinedになります。
        </Typography>
        <ExperimentSandpack files={partialResetStateOnPropsChangeFile} />
      </div>
    </Stack>
  );
}
