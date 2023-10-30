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
  {
    title: "useEffect",
    description:
      "コンポーネントを外部システムと同期できるuseEffectの使用法について",
    path: "/use-effect",
  },
  {
    title: "不要なuseEffectのケース集",
    description: "useEffectが不要なケース集",
    path: "/unnecessary-us-effect-cases",
  },
  {
    title: "メモ化の可否ケース集",
    description: "メモ化できるケース、できないケース例",
    path: "/can-memoize",
  },
] as const satisfies readonly Experiment[];
