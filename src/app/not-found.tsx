"use client";

import { Stack, Typography, styled } from "@mui/material";
import Link from "next/link";

const Wrapper = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Typography variant="h1">404</Typography>
      <Typography>
        このページはすでに削除されているか、URLが間違っている可能性があります。
      </Typography>
      <Link href="/">Topページへ戻る</Link>
    </Wrapper>
  );
};

export default NotFoundPage;
