import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import Link from "next/link";

const experiment = getExperiment("状態のリセット");

const keyResetFile = readFileInCodeSandbox(
  "src/app/state-reset/_components/key-reset.tsx"
);

const differentPositionRenderingResetFile = readFileInCodeSandbox(
  "src/app/state-reset/_components/different-position-rendering-reset.tsx"
);

const samePositionRenderingFile = readFileInCodeSandbox(
  "src/app/state-reset/_components/same-position-rendering.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function StateReset() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>状態のリセット方法についてまとめます。</Typography>
      </div>
      <div>
        <Typography variant="h2">keyを使用して状態をリセットする</Typography>
        <Typography>
          異なるKeyを渡すと渡されたコンポーネントの状態はリセットされます。
        </Typography>
        <ExperimentSandpack files={keyResetFile} />
      </div>
      <div>
        <Typography variant="h2">
          コンポーネントを異なる位置でレンダリングする
        </Typography>
        <Typography>
          <Link href="https://react.dev/learn/understanding-your-ui-as-a-tree#the-render-tree">
            UIツリー
          </Link>
          内で異なる位置でレンダリングした場合はDOMから削除されるたびに破棄されます。
          <br />
          ex）<code>selectedPerson</code>ごとに<code>Counter</code>
          コンポーネントが独立しています。これが異なる位置でレンダリングしているということです。
        </Typography>
        <ExperimentSandpack files={differentPositionRenderingResetFile} />
      </div>
      <div>
        <Typography variant="h2">
          同じ位置でレンダリングした場合はリセットされない
        </Typography>
        <Typography>
          <Link href="https://react.dev/learn/understanding-your-ui-as-a-tree#the-render-tree">
            UIツリー
          </Link>
          内で同じ位置でレンダリングしている場合は状態を保持します。
        </Typography>
        <ExperimentSandpack files={samePositionRenderingFile} />
      </div>
    </Stack>
  );
}
