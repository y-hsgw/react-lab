import { memo, useCallback, useState } from "react";

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = memo(({ onClick }) => {
  console.log(`Button was rendered at ${new Date().toLocaleTimeString()}`);

  return <button onClick={onClick}>Hello</button>;
});

const Form: React.FC = () => {
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    window.alert(`Hello! ${name}`);
  }, [name]);

  return (
    <div>
      <label>名前</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handleClick} />
    </div>
  );
};

const ActiveUseCallback: React.FC = () => {
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
      <Form />
    </div>
  );
};

export default ActiveUseCallback;
