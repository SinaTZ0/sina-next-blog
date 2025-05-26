/* eslint-disable unicorn/prefer-node-protocol */
/* eslint-disable unicorn/import-style */
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import * as importX from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintPluginUnicorn.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    rules: {
      "import-x/order": [
        "error", // or 'error'
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          pathGroups: [
            {
              pattern: "next",
              group: "internal",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "internal",
              position: "before",
            },

            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external", "object"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import-x/no-deprecated": "error",
      "import-x/first": "error",
    },
  },
];

export default eslintConfig;
