"use client";

import { memo } from "react";
import { ExperimentCard } from "../lab-card";
import { styled } from "@mui/material";
import { EXPERIMENTS } from "@/app/_utils/experiments";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const ExperimentCards: React.FC = memo(() => {
  return (
    <Wrapper>
      {EXPERIMENTS.map((experiment) => (
        <ExperimentCard
          key={experiment.title}
          title={experiment.title}
          description={experiment.description}
          path={experiment.path}
        />
      ))}
    </Wrapper>
  );
});

ExperimentCards.displayName = "ExperimentCards";
