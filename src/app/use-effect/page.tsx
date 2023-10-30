import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";

const experiment = getExperiment("useEffect");

const useEffectEventListeningFile = readFileInCodeSandbox(
  "src/app/use-effect/_components/use-effect-event-listening.tsx"
);

const noDependencyArrayFile = readFileInCodeSandbox(
  "src/app/use-effect/_components/no-dependency-array.tsx"
);

const dependencyArrayFile = readFileInCodeSandbox(
  "src/app/use-effect/_components/dependency-array.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseEffect() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントを外部システムと同期できるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useEffect" target="_">
            https://react.dev/reference/react/useEffect
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">イベントのリッスン</Typography>
        <Typography>
          useEffect内で何かしらをリッスンしている場合、クリーアップ関数ではそのリッスンを解除する必要があります。
        </Typography>
        <ExperimentSandpack files={useEffectEventListeningFile} />
      </div>
      <div>
        <Typography variant="h2">依存配列なしの場合</Typography>
        <Typography>
          依存配列が無い場合、テーマを切り替える度にuseEffectが実行されます。
        </Typography>
        <ExperimentSandpack files={noDependencyArrayFile} />
      </div>
      <div>
        <Typography variant="h2">依存配列ありの場合</Typography>
        <Typography>
          依存配列がある場合、テーマを切り替えてもuseEffectは実行されないです。
          <br />
          名前が更新される度、useEffectが実行されるようになります。
        </Typography>
        <ExperimentSandpack files={dependencyArrayFile} />
      </div>
    </Stack>
  );
}
