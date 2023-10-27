import { useMemo, useState } from "react";

interface User {
  name: string;
  age: number;
}

const UseMemoProperty: React.FC = () => {
  const [user, setUser] = useState<User>({ name: "", age: 0 });

  const validateAge = useMemo(() => {
    console.log("validateAge");
    return user.age < 0;
  }, [user.age]);

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label>名前</label>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <label>年齢</label>
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
      />
      {validateAge && (
        <p style={{ color: "red" }}>年齢は0以上を入力してください。</p>
      )}
    </form>
  );
};

export default UseMemoProperty;
