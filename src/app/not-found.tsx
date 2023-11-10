"use client";

import { Stack, Typography, styled } from "@mui/material";
import Link from "next/link";

const Wrapper = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Typography>404</Typography>
      <Link href="/">Topページへ戻る</Link>
    </Wrapper>
  );
};

export default NotFoundPage;
