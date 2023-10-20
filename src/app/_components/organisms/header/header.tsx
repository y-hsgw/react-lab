import { AppBar, IconButton, Toolbar } from "@mui/material";
import { memo } from "react";
import MenuIcon from "@mui/icons-material/menu";

export const Header: React.FC = memo(() => {
  return (
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        React Lab
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = "Header";
