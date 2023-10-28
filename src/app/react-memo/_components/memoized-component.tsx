import { memo, useState } from "react";

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = memo(({ name }) => {
  console.log(`Greeting was rendered at ${new Date().toLocaleTimeString()}`);

  return <p>Hello {name}</p>;
});

const MemoizedComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <form style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
      <label>名前</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>住所</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <Greeting name={name} />
    </form>
  );
};

export default MemoizedComponent;
