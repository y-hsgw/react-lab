import fs from "fs";

export const readFileInCodeSandbox = (path: string) => {
  return {
    "App.tsx": fs.readFileSync(path, "utf-8"),
  };
};
