import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { readFileInCodeSandbox } from "../_utils/readFileInCodeSandbox";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const experiment = getExperiment("useSyncExternalStore");

const browserApiFile = readFileInCodeSandbox(
  "src/app/use-sync-external-store/_components/browser-api.tsx"
);

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseSyncExternalStore() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useSyncExternalStoreは、外部ストアをサブスクライブできるようにするReactフックです。
          <br />
          <Link
            href="https://react.dev/reference/react/useSyncExternalStore"
            target="_"
          >
            https://react.dev/reference/react/useSyncExternalStore
          </Link>
        </Typography>
      </div>
      <div>
        <Typography variant="h3">ブラウザAPIのサブスクライブ</Typography>
        <Typography>
          ブラウザーによって公開され、時間の経過とともに変化する値をサブスクライブするケースで使用できます。
          <br />
          ex）デバイスをネットワークから切断すると「❌
          Disconnected」が表示されます。
        </Typography>
        <ExperimentSandpack files={browserApiFile} />
      </div>
    </Stack>
  );
}
