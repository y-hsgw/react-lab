import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useSyncExternalStore");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseRef() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useRefはレンダリングに必要のない値を参照できるReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useRef" target="_">
            https://react.dev/reference/react/useRef
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
