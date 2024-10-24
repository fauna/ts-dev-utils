const eslintConfigPrettier = require("eslint-config-prettier");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const js = require("@eslint/js");
const { config: base, nodeGlobals: globals } = require("../eslint.config.js");

// borrowed from fauna-shell
const config = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals
    },

    rules: {
      /* THESE ARE "POSSIBLE PROBLEMS" RULES, AND ALMOST ALL INDICATE SERIOUS RISK OF UNEXPECTED BEHAVIOR */
      // these are off by default in the recommended ruleset, but I propose we turn them on
      "array-callback-return": "error",
      "no-duplicate-imports": ["error", {
        "includeExports": true
      }],
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": ["error", { "functions": false }],
      "require-atomic-updates": "error",

      // this was off in our old ruleset, and I propose we turn it on
      "no-await-in-loop": "warn",

      // this is on in the recommended ruleset, but I propose we customize it slightly
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "no-unused-vars": ["error", { "caughtErrors": "none" }],

      // suggestion
      /* THESE ARE "SUGGESTION" RULES, AND ARE A COMBINATION OF STYLE DECISIONS AND LESS-FREQUENT EDGE CASES */

      // these are off by default in the recommended ruleset, but I propose we turn them on
      "class-methods-use-this": "error",
      "complexity": ["error", { max: 20 }],
      "complexity": ["warn", { max: 10 }],
      "consistent-return": "error",
      "default-case": "error",
      "default-case-last": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "max-depth": ["error", { max: 6 }],
      "max-depth": ["warn", { max: 4 }],
      "max-lines": ["warn", { max: 250 }],
      "max-lines": ["error", { max: 500 }],
      "max-params": ["error", { max: 4 }],
      "no-alert": "error",
      "no-caller": "error",
      "no-empty-function": "error",
      "no-extend-native": "error",
      "no-implicit-coercion": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-object-constructor": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-var": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "sort-imports": ["error", {
        "allowSeparatedGroups": true,
      }],

      // this was off in our old ruleset, and I propose we turn it on
      camelcase: "error",
      "new-cap": ["error", {
        "capIsNewExceptions": [
          // v4 built-in functions should be included in this list
          "Now",
        ]
      }],
      "no-warning-comments": "warn",
      "no-console": "error",
      "no-prototype-builtins": "off",


      // "node/no-unsupported-features": "off",
    },
  },
  ...base,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "sort-imports": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  // this disables eslint's formatting rules that collide with prettier's
  eslintConfigPrettier,
];

module.exports = { config };
