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
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "initial",
        color: isDark ? "white" : "initial",
      }}
    >
      <label>テーマ</label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <Greeting name="Tanaka" />
    </div>
  );
};

export default NoDependencyArray;
