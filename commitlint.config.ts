// commitlint.config.ts
import { RuleConfigSeverity } from "@commitlint/types";

import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error, // Level: 0_disabled, 1_warning, 2_error
      "always", // Applicable: 'always' | 'never'
      [
        // Value
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "perf", // A code change that improves performance
        "test", // Adding missing tests or correcting existing tests
        "chore", // Changes to the build process or auxiliary tools and libraries such as documentation generation
        "ci", // Changes to our CI configuration files and scripts
        "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "revert", // Reverts a previous commit
      ],
    ],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "subject-case": [
      RuleConfigSeverity.Error,
      "always", // Can also be 'never'
      // Value can be an array of cases:
      // ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case', 'camel-case', 'kebab-case']
      // For this example, we're keeping it simple with 'lower-case'
      "lower-case",
    ],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    // Add more rules here if needed
    // Example: 'body-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    // Example: 'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
  },
  // Use our own formatter for more descriptive output
  formatter: "./scripts/commitlint-formatter.js",
};

export default Configuration;
