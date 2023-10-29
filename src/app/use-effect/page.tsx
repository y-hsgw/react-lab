import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { getExperiment } from "../_utils/get-experiment";

const experiment = getExperiment("useEffect");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseEffect() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントを外部システムと同期できるようにするReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useEffect" target="_">
            https://react.dev/reference/react/useEffect
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
