import fs from "fs";

export const readFileInCodeSandbox = (path: string) => {
  return {
    "App.js": fs.readFileSync(path, "utf-8"),
  };
};
