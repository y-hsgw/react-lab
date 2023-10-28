import { Experiment } from "@/app/_types";

export const EXPERIMENTS = [
  {
    title: "React.memo",
    description:
      "コンポーネントの再レンダリングをスキップすることができるReact.Memoの使用法について",
    path: "/react-memo",
  },
  {
    title: "useMemo",
    description:
      "再レンダリング間の計算結果をキャッシュできるuseMemoの使用法について",
    path: "/use-memo",
  },
  {
    title: "useCallback",
    description:
      "再レンダリングの間に関数定義をキャッシュできるuseCallbackの使用法について",
    path: "/use-callback",
  },
] as const satisfies readonly Experiment[];
