const config = [
  {
    ignores: [
      "**/node_modules",
      ".history",
      "dist",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
    },
  },
  {
    files: ["test/**/*.mjs"],

    rules: {
      "no-unused-expressions": "off",
      "no-empty-function": "off",
      "camelcase": "off",
    },
  },
];

const sharedGlobals = {
  console: "readonly",
  URLSearchParams: "readonly",
  Blob: "readonly",
  URL: "readonly",
  FormData: "readonly",
  fetch: "readonly",
};

const nodeGlobals = {
  ...sharedGlobals,
  Buffer: "readonly",
  process: "readonly",
};

const browserGlobals = {
  ...sharedGlobals,
};

module.exports = { config, nodeGlobals, browserGlobals, };
