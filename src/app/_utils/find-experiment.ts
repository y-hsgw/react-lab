import { EXPERIMENTS } from "./experiments";

type ExperimentTitle = (typeof EXPERIMENTS)[number]["title"];

export const findExperiment = (title: ExperimentTitle) => {
  const foundExperiments = EXPERIMENTS.find(
    (experiment) => experiment.title === title
  );
  if (!foundExperiments) throw new Error("実験対象が見つかりません");

  return foundExperiments;
};
