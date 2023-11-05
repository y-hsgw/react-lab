import { ChangeEvent, createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<Theme>("light");

const Button: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      決定
    </button>
  );
};

const Form: React.FC = () => {
  return (
    <form>
      <Button />
    </form>
  );
};

const BasicUseContext: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <label>
        ダークモードの有効化
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleChange}
        />
      </label>
      <Form />
    </ThemeContext.Provider>
  );
};

export default BasicUseContext;
