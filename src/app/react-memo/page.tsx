import { Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import { findExperiment } from "../_utils/find-experiment";
import fs from "fs";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";

const foundExperiment = findExperiment("React.memo");

const files = {
  "App.js": fs.readFileSync(
    "src/app/react-memo/_components/memoized-component.tsx",
    "utf-8"
  ),
};

export const metadata: Metadata = {
  title: `React Lab - ${foundExperiment.title} -`,
  description: foundExperiment.description,
};

export default function ReactMemo() {
  return (
    <>
      <Typography component="h2" variant="h5" fontWeight="bold">
        {foundExperiment.title}
      </Typography>
      <Typography>
        memo を使うことで、props
        が変更されていない場合にコンポーネントの再レンダーをスキップできます。
      </Typography>
      <Typography>
        <Link href="https://ja.react.dev/reference/react/memo" target="_">
          https://ja.react.dev/reference/react/memo
        </Link>
      </Typography>
      <Typography fontWeight="bold">React.memoを使用しない場合</Typography>
      <Typography fontWeight="bold">React.memoを使用する場合</Typography>
      <ExperimentSandpack files={files} />
    </>
  );
}
