import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useSyncExternalStore");

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
    </Stack>
  );
}
