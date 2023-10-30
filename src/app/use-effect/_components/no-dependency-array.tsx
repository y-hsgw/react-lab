import { useEffect, useState } from "react";

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = ({ name }) => {
  useEffect(() => {
    console.log(`Hello ${name}`);
  });

  return <p>Hello {name}</p>;
};

const NoDependencyArray: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "initial",
        color: isDark ? "white" : "initial",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 8,
      }}
    >
      <label>テーマ</label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label>名前</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Greeting name={name} />
    </div>
  );
};

export default NoDependencyArray;
