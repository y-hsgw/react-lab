import { EXPERIMENTS } from "./experiments";

type ExperimentTitle = (typeof EXPERIMENTS)[number]["title"];

export const findExperiment = (title: ExperimentTitle) =>
  EXPERIMENTS.find((experiment) => experiment.title === title);
