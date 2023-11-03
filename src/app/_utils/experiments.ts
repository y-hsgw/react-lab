import { Experiment } from "@/app/_types";

export const EXPERIMENTS = [
  {
    title: "useState",
    description: "コンポーネントに状態変数を追加できるuseStateの使用法について",
    path: "/use-state",
  },
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
    title: "useRef",
    description: "レンダリングに必要のない値を参照できるuseRefの使用法について",
    path: "/use-ref",
  },
  {
    title: "不要なuseEffectのケース集",
    description: "useEffectが不要なケース集",
    path: "/unnecessary-use-effect-cases",
  },
  {
    title: "メモ化の可否ケース集",
    description: "メモ化できるケース、できないケース例",
    path: "/can-memoize",
  },
  {
    title: "useSyncExternalStore",
    description:
      "外部ストアをサブスクライブできるようにするuseSyncExternalStoreの使用法について",
    path: "/use-sync-external-store",
  },
] as const satisfies readonly Experiment[];
