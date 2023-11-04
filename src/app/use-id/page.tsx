import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("useId");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function UseId() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          アクセシビリティ属性に渡すことができる一意のIDを生成するためのReactフックです。
          <br />
          <Link href="https://react.dev/reference/react/useId" target="_">
            https://react.dev/reference/react/useId
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
