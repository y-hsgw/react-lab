"use client";

import { memo, useCallback } from "react";
import { ButtonCard } from "../../molecules/button-card";
import { Typography } from "@mui/material";
import { LabCardListItem } from "./types";
import { useRouter } from "next/navigation";

type Props = LabCardListItem;

export const LabCard: React.FC<Props> = memo(({ title, description, path }) => {
  const { push } = useRouter();

  const handleClick = useCallback(() => {
    push(path);
  }, [path, push]);

  return (
    <ButtonCard onClick={handleClick}>
      <Typography component={"h3"}>{title}</Typography>
      <Typography>{description}</Typography>
    </ButtonCard>
  );
});

LabCard.displayName = "LabCard";
