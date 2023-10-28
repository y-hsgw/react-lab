"use client";

import { AppBar, IconButton, Toolbar, styled } from "@mui/material";
import { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const StyledAppBar = styled(AppBar)({
  position: "sticky",
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
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
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Title href="/">React Lab</Title>
      </StyledToolbar>
    </StyledAppBar>
  );
});

Header.displayName = "Header";
