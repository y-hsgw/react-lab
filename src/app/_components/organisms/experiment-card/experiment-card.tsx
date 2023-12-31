"use client";

import { memo, useCallback } from "react";
import { ButtonCard } from "../../molecules/button-card";
import { Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { Experiment } from "@/app/_types";

const Wrapper = styled("div")(({ theme }) => ({
  width: "33.333%",
  height: 150,
  padding: theme.spacing(1),
}));

type Props = Experiment;

export const ExperimentCard: React.FC<Props> = memo(
  ({ title, description, path }) => {
    const { push } = useRouter();

    const handleClick = useCallback(() => {
      push(path);
    }, [path, push]);

    return (
      <Wrapper>
        <ButtonCard onClick={handleClick}>
          <Typography
            color={({ palette }) => palette.primary.main}
            component="p"
            variant="h6"
          >
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </ButtonCard>
      </Wrapper>
    );
  }
);

ExperimentCard.displayName = "ExperimentCard";
