/*
  Intended to estimate the cost of adding new rules to an eslint config.
  Produces output like:

  Fixable errors (19 total; sorted alphabetically)
    - no-var (error): 1
    - prefer-template (error): 4
    - sort-imports (error): 14

  Not fixable (400 total; sorted alphabetically)
    - camelcase (error): 54
    - class-methods-use-this (error): 9
    - complexity (warn): 7
    - consistent-return (error): 3
    - eqeqeq (error): 2
    - new-cap (error): 1
    - no-console (error): 17
    - no-empty-function (error): 1
    - no-undef (error): 2
    - no-unused-vars (error): 3
    - no-use-before-define (error): 14
    - no-warning-comments (warn): 13
    - sort-keys (error): 235
*/

function totalsFormatter(results) {
  const errors = results.reduce((aggregate, file) => {
    file.messages && file.messages.forEach((message) => {
      if (!aggregate[message.ruleId]) {
        aggregate[message.ruleId] = { unfixable: 0, fixable: 0, severity: message.severity };
      }

      if (message.fix) {
        aggregate[message.ruleId].fixable++;
      } else {
        aggregate[message.ruleId].unfixable++;
      }
    });

    return aggregate;
  }, {});

  const totalFixable = Object.values(errors).reduce((sum, error) => { return sum += error.fixable }, 0);
  const totalUnfixable = Object.values(errors).reduce((sum, error) => { return sum += error.unfixable }, 0);

  let fixableResults = "";
  for (const [key, value] of Object.entries(errors)) {
    if (value.fixable)
      fixableResults += `\n  - ${key} (${value.severity === 2 ? "error" : "warn"}): ${value.fixable}`
  }
  let unfixableResults = "";
  for (const [key, value] of Object.entries(errors)) {
    if (!value.fixable)
      unfixableResults += `\n  - ${key} (${value.severity === 2 ? "error" : "warn"}): ${value.unfixable}`
  }


  fixableResults = fixableResults.split('\n').sort((a, b) => a.localeCompare(b)).join('\n');
  unfixableResults = unfixableResults.split('\n').sort((a, b) => a.localeCompare(b)).join('\n');
  let result = `Fixable errors (${totalFixable} total; sorted alphabetically)${fixableResults}\n\n`;
  result += `Not fixable (${totalUnfixable} total; sorted alphabetically)${unfixableResults}\n`;
  return result;
};

module.exports = totalsFormatter;
