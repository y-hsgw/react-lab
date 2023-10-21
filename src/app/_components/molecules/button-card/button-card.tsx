import { Card, CardActionArea, CardContent, styled } from "@mui/material";
import { memo } from "react";

const StyledCard = styled(Card)({
  height: "100%",
});

const StyledCardActionArea = styled(CardActionArea)({
  height: "100%",
});

const StyledCardContent = styled(CardContent)({
  height: "100%",
});

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonCard: React.FC<Props> = memo(({ children, onClick }) => {
  return (
    <StyledCard>
      <StyledCardActionArea onClick={onClick}>
        <StyledCardContent>{children}</StyledCardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
});

ButtonCard.displayName = "ButtonCard";
