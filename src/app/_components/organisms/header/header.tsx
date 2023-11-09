"use client";

import { AppBar, Toolbar, styled } from "@mui/material";
import { memo } from "react";
import Link from "next/link";

const StyledAppBar = styled(AppBar)({
  position: "sticky",
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}));

const Title = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  fontSize: theme.typography.h3.fontSize,
}));

export const Header: React.FC = memo(() => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Title href="/">React Lab</Title>
      </StyledToolbar>
    </StyledAppBar>
  );
});

Header.displayName = "Header";
