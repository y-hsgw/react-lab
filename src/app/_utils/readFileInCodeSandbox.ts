import fs from "fs";

export const readFileInCodeSandbox = (path: string, fileName = "App.tsx") => {
  return {
    [fileName]: fs.readFileSync(path, "utf-8"),
  };
};
