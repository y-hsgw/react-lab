"use client";

import { TextField, Typography } from "@mui/material";
import { memo, useState } from "react";

interface Props {
  name: string;
}
const Greeting: React.FC<Props> = memo(({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <Typography>{name}</Typography>;
});

Greeting.displayName = "Greeting";

export const MemoizedComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <Typography>Memo化</Typography>
      <TextField
        label="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="住所"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Greeting name={name} />
    </div>
  );
};

MemoizedComponent.displayName = "MemoizedComponent";
