# TypeScript
A collection of lint, format, and build configs used at Fauna for TypeScript projects.

## Included configs (`./config/`)
- `eslint.config.js`, a minimal base eslint config.
  - `js/eslint.config.js`, an extension of the base config intended for raw javascript projects.
- `.gitignore`, a minimal placeholder .gitignore file.
- `prettierrc.js`, a base prettier config. this is a _stand-alone_ prettier config; it's not integrated into eslint ([by choice](https://prettier.io/docs/en/integrating-with-linters.html)). Run it before running eslint. We use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to remove eslint rules that collide with prettier, so prettier is authoritative on the formatting it can do.

## Included scripts (`./script/`)
- `eslint-formatter.js`, a custom eslint output formatter intended for estimating the cost of adding new rules to an eslint config. From a consumer of `@fauna/typescript`, run it like `npx eslint --format ./node_modules/@fauna/typescript/scripts/eslint-formatter.js .`.
- `version-bump.js`, a script intended for use in CI environments to automatically version bump a npm package. Useful for packages that should be versioned and deployed on every merge to `main`.

## Usage

### Install
#### I use npm
```
npm install --save-dev @fauna/typescript
```

#### I use yarn
```
yarn add -D @fauna/typescript
```

## Configure
### ES Lint Config
In `eslint.config.js` put:

```(javascript)
import { config as defaultConfig } from "@fauna/typescript/config/js/eslint.config.js";

export default [
  ...defaultConfig,
   // ...any customizations you'd like
];
```
### Prettier Config
In `prettier.config.js`
```(javascript)
import basePrettierConfig from "@fauna/typescript/config/prettierrc.js";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...basePrettierConfig,
  // ...any customizations you'd like
};

export default config;
```

## Script
You can then write scripts in your `package.json` such as:

```(json)
  "scripts": {
    "lint": "eslint . --fix",
    "format": "prettier -w --log-level silent .",
    "format:check": "prettier -c ."
  }
```
