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
    </Stack>
  );
}
