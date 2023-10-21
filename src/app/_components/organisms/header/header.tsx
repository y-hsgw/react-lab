"use client";

import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { memo } from "react";
import MenuIcon from "@mui/icons-material/menu";
import Link from "next/link";

const Title = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});

export const Header: React.FC = memo(() => {
  return (
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Title href={"/"}>
          <Typography component={"h1"} variant="h5">
            React Lab
          </Typography>
        </Title>
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = "Header";
