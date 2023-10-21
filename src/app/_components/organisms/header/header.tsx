"use client";

import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
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

const Title = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});

export const Header: React.FC = memo(() => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Title href="/">
          <Typography component="h1" variant="h5">
            React Lab
          </Typography>
        </Title>
      </StyledToolbar>
    </StyledAppBar>
  );
});

Header.displayName = "Header";
