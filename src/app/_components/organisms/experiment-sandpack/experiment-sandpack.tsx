"use client";

import { Sandpack, SandpackFiles } from "@codesandbox/sandpack-react";

interface Props {
  files: SandpackFiles;
}

export const ExperimentSandpack: React.FC<Props> = ({ files }) => {
  return (
    <Sandpack
      options={{ showConsole: true }}
      customSetup={{
        dependencies: {
          "@mui/material": "^5.14.14",
          "@emotion/styled": "^11.11.0",
          "@emotion/react": "^11.11.1",
        },
      }}
      files={files}
      template="react"
    />
  );
};
