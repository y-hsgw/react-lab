"use client";

import { memo } from "react";
import { LabCard } from "../lab-card";
import { styled } from "@mui/material";
import { EXPERIMENTS } from "@/app/_utils/experiments";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const LabCards: React.FC = memo(() => {
  return (
    <Wrapper>
      {EXPERIMENTS.map((experiment) => (
        <LabCard
          key={experiment.title}
          title={experiment.title}
          description={experiment.description}
          path={experiment.path}
        />
      ))}
    </Wrapper>
  );
});

LabCards.displayName = "LabCards";
