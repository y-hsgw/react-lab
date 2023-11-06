import { Stack, Typography } from "@mui/material";
import { getExperiment } from "../_utils/get-experiment";
import { Metadata } from "next";
import Link from "next/link";
import { ExperimentSandpack } from "../_components/organisms/experiment-sandpack";
import { bestPracticeFile } from "./_utils/best-practice-file";
import { unifiedContextFile } from "./_utils/unified-context-file";

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
      <div>
        <Typography variant="h2">
          Contextをstateとdispatchに分けない場合
        </Typography>
        <Typography>
          <code>dispatch</code>
          を実行するたびに、<code>state</code>
          を使用している箇所が再レンダリングされます。
          <br />
          そのため、<code>Context</code>は<code>state</code>と
          <code>dispatch</code>
          に分けておいた方が無駄なレンダリングが防げます。
          <br />
          ex）<code>TaskListItem</code>コンポーネントの<code>console.log</code>
          で確認できます。タスクを編集中に、他のタスクも同時にレンダリングされていることがあります。
        </Typography>
        <ExperimentSandpack files={unifiedContextFile} />
      </div>
    </Stack>
  );
}
