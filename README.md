# TypeScript
A collection of lint, format, and build configs used at Fauna for TypeScript projects.

## Included configs (`./config/`)
- `eslint.config.js`, a minimal placeholder eslint config.
- `.gitignore`, a minimal placeholder .gitignore file.
- `prettierrc.js`, a minimal placeholder prettier config. this is a _stand-alone_ prettier config, and is used as a stand-alone; it's not integrated into eslint ([by choice](https://prettier.io/docs/en/integrating-with-linters.html)). run it before running eslint. we use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to remove eslint rules that collide with prettier, so prettier is authoritative on stylistic formatting.
