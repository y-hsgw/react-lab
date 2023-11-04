import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useImperativeHandle");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseImperativeHandle() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          refとして公開されるハンドルをカスタマイズできるReactフックです。
          <br />
          <Link
            href="https://react.dev/reference/react/useImperativeHandle"
            target="_"
          >
            https://react.dev/reference/react/useImperativeHandle
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
