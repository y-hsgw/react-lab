import { AppBar } from "@mui/material";
import { memo } from "react";

export const Header: React.FC = memo(() => {
  return <AppBar sx={{ position: "sticky" }}>Header</AppBar>;
});

Header.displayName = "Header";
