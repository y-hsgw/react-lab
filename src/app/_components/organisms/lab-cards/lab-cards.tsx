"use client";

import { memo } from "react";
import { LAB_CARDS } from "./utils/lab-cards";
import { LabCard } from "../lab-card";
import { styled } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const LabCards: React.FC = memo(() => {
  return (
    <Wrapper>
      {LAB_CARDS.map((card) => (
        <LabCard
          key={card.title}
          title={card.title}
          description={card.description}
          path={card.path}
        />
      ))}
    </Wrapper>
  );
});

LabCards.displayName = "LabCards";
