import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useContext");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseContext() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントからコンテキストを読み取ってサブスクライブできるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useContext" target="_">
            https://react.dev/reference/react/useContext
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
