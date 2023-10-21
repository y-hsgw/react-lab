import { Experiment } from "@/app/_types";

export const EXPERIMENTS = [
  {
    title: "React.memo",
    description:
      "コンポーネントの再レンダリングをスキップすることができるReact.Memoの使用法について",
    path: "/react-memo",
  },
  {
    title: "useState",
    description: "ステート",
    path: "/use-state",
  },
] as const satisfies readonly Experiment[];
