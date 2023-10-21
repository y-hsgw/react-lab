"use client";

import { styled } from "@mui/material";
import { LabCards } from "./_components/organisms/lab-cards";

const StyledMain = styled("main")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Home() {
  return (
    <StyledMain>
      <LabCards />
    </StyledMain>
  );
}
