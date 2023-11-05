import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";

const experiment = getExperiment("リデューサーとコンテキストの組み合わせ");

export const metadata: Metadata = {
  title: `React Lab - ${experiment.title} -`,
  description: experiment.description,
};

export default function ReducerAndContext() {
  return (
    <Stack gap={2}>
      <div>
        <Typography variant="h1">{experiment.title}</Typography>
        <Typography my={1}>
          リデューサーとコンテキストを組み合わせて、複雑な画面の状態を管理する方法の例をまとめます。
          <br />
          <Link
            href="https://react.dev/learn/scaling-up-with-reducer-and-context"
            target="_"
          >
            https://react.dev/learn/scaling-up-with-reducer-and-context
          </Link>
        </Typography>
      </div>
    </Stack>
  );
}
