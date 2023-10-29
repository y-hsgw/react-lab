import { memo, useState } from "react";

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = memo(({ onClick }) => {
  console.log(`Button was rendered at ${new Date().toLocaleTimeString()}`);

  return <button onClick={onClick}>Click!!</button>;
});

const NotMemoFunction: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const func = () => {
    console.log("called func");
  };

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
      <Button onClick={func} />
    </div>
  );
};

export default NotMemoFunction;
