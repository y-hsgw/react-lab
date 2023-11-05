import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useReducer");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseReducer() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          コンポーネントにリデューサーを追加できるReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useReducer" target="_">
            https://react.dev/reference/react/useReducer
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
