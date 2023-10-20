import { Card, CardActionArea, CardContent } from "@mui/material";
import { memo } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonCard: React.FC<Props> = memo(({ children, onClick }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
});

ButtonCard.displayName = "ButtonCard";
