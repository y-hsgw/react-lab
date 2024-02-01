"use client";

import { CircularProgress, Modal, styled } from "@mui/material";
import { memo } from "react";

const CircularProgressWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.grey[50],
}));

interface Props {
  open: boolean;
}

export const LoadingModal: React.FC<Props> = memo(({ open }) => {
  return (
    <Modal open={open}>
      <CircularProgressWrapper>
        <StyledCircularProgress />
      </CircularProgressWrapper>
    </Modal>
  );
});
