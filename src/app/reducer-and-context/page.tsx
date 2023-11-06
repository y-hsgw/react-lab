import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { bestPracticeFile } from "./_utils/best-practice-file";

const experiment = getExperiment("ReducerとContextの組み合わせ");

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
      <div>
        <Typography variant="h2">ReducerとContextを組み合わせる</Typography>
        <Typography>
          状態とその状態に関する処理（<code>dispatch</code>
          ）ごとにコンテキストを作成します。
          <br />
          <code>dispatch</code> のロジックを
          <code>useReducer</code>で実装しています。
          <br />
          バケツリレーを行わなくても状態を読み取り、<code>dispatch</code>
          を簡潔に行うことができるようになりました。
        </Typography>
        <ExperimentSandpack files={bestPracticeFile} />
      </div>
    </Stack>
  );
}
