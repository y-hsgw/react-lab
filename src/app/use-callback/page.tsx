import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("useCallback");

const inactiveUseCallbackFile = readFileInCodeSandbox(
  "src/app/use-callback/_components/inactive-use-callback.tsx"
);

const activeUseCallbackFile = readFileInCodeSandbox(
  "src/app/use-callback/_components/active-use-callback.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseCallback() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useCallbackは、再レンダリングの間に関数定義をキャッシュできるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useCallback" target="_">
            https://react.dev/reference/react/useCallback
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h2">useCallbackを使用しない場合</Typography>
        <Typography my={1}>
          テーマを切り替えても<code>Button</code>
          コンポーネントは再レンダーされます。
        </Typography>
        <ExperimentSandpack files={inactiveUseCallbackFile} />
      </div>
      <div>
        <Typography variant="h2">useCallbackを使用した場合</Typography>
        <Typography my={1}>
          テーマを切り替えても<code>Button</code>
          コンポーネントは再レンダーされないです。
        </Typography>
        <ExperimentSandpack files={activeUseCallbackFile} />
      </div>
    </Stack>
  );
}
