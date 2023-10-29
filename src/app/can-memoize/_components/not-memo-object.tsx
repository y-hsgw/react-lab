import { memo, useState } from "react";

interface User {
  name: string;
  age: number;
}

interface Props {
  user: User;
}

const Greeting: React.FC<Props> = memo(({ user }) => {
  console.log(`Greeting was rendered at ${new Date().toLocaleTimeString()}`);

  return <p>Hello {user.name}</p>;
});

const NotMemoObject: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const user: User = {
    name: "Tanaka",
    age: 20,
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
      <Greeting user={user} />
    </div>
  );
};

export default NotMemoObject;
