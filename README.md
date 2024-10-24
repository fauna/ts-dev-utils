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

## Workflows

### Development
Develop on this package by running `npm install && npm link`. Then, navigate to a package that depends on this project and run `npm link @fauna/typescript`. [npm link](https://docs.npmjs.com/cli/v10/commands/npm-link) builds a symlink from the node_modules directory of the dependent package to `@fauna/typescript`, allowing you to develop locally in real time. When done, run `npm unlink @fauna/typescript` from any directory.
