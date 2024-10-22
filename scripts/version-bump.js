#!/usr/bin/env node

const { execSync } = require('node:child_process');
const { parseHeader } = require('parse-commit-message');

const latestCommitMessage = execSync("git log -1 --pretty=%B", { encoding: "utf-8" });
let versionType, type, scope;

try {
  const header = parseHeader(latestCommitMessage);
  type = header.type;
  scope = header.scope;
} catch (e) {
  scope = undefined;
  type = undefined;
}

if (scope === 'patch' || ['fix', 'chore', 'docs', 'refactor', 'perf', 'test', 'build'].includes(type)) {
  versionType = 'patch';
} else if (scope === 'minor' || ['feat', 'feature'].includes(type)) {
  versionType = 'minor';
} else if (scope === 'major') {
  versionType = 'major';
} else {
  versionType = 'patch';
}

console.log(`Parsed commit message:\n${latestCommitMessage}\n\nDetermined the version as ${versionType} (from scope ${scope} and change type ${type}).\n`);
console.log(execSync(`npm version ${versionType} --no-git-tag-version`, { encoding: "utf-8" }));
