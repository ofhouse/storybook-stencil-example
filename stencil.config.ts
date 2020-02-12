import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "storybook-stencil-example",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
};
