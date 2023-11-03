import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useState");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseMemo() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          useStateコンポーネントに状態変数を追加できる Reactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useState" target="_">
            https://react.dev/reference/react/useState
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
