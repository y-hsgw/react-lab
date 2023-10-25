import { Stack, Typography } from "@mui/material";
import { findExperiment } from "../_utils/find-experiment";
import { Metadata } from "next";

const foundExperiment = findExperiment("useMemo");

export const metadata: Metadata = {
  title: `React Lab - ${foundExperiment.title} -`,
  description: foundExperiment.description,
};

export default function UseMemo() {
  return (
    <Stack gap={2}>
      <div>
        <Typography component="h2" variant="h4" fontWeight="bold">
          {foundExperiment.title}
        </Typography>
      </div>
    </Stack>
  );
}
