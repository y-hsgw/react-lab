import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { findExperiment } from "../_utils/find-experiment";

const foundExperiment = findExperiment("useCallback");

export const metadata: Metadata = {
  title: `React Lab - ${foundExperiment.title} -`,
  description: foundExperiment.description,
};

export default function UseCallback() {
  return (
    <Stack gap={2}>
      <div>
        <Typography component="h2" variant="h4" fontWeight="bold">
          {foundExperiment.title}
        </Typography>
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
