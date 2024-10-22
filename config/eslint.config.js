// borrowed from fauna-shell
const config = [
  {
    ignores: ["**/node_modules", ".history"],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
    },

    rules: {
      "no-await-in-loop": "off",
      "new-cap": "off",
      "quote-props": "off",
      "no-negated-condition": "off",
      "no-warning-comments": "off",
      "spaced-comment": "off",
      "max-nested-callbacks": "off",
      "no-else-return": "off",
      "no-console": "off",
      "no-multi-str": "off",
      "no-prototype-builtins": "off",

      "node/no-unsupported-features": "off",
      camelcase: "off",
    },
  },
  {
    files: ["test/**/*.mjs"],

    rules: {
      "no-unused-expressions": "off",
    },
  },
];

module.exports = config;
