import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = ({ name }) => {
  console.log(`Greeting was rendered at ${new Date().toLocaleTimeString()}`);

  return <Typography>Hello {name}</Typography>;
};

const NoMemoizedComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Stack mt={1} gap={1}>
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
    </Stack>
  );
};

export default NoMemoizedComponent;
