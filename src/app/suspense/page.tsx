import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("Suspense");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function Suspense() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          子コンポーネントが読み込みを完了するまでフォールバックを表示できます
          <br />
          <Link href="https://react.dev/reference/react/Suspense" target="_">
            https://react.dev/reference/react/Suspense
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
