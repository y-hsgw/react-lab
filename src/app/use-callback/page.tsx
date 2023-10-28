import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";

const experiment = getExperiment("useCallback");

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
    </Stack>
  );
}
