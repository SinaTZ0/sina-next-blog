const EXPLANATIONS = /** @type {Record<string, string>} */ ({
  'type-empty':
    "Type may not be empty – every commit message should start with a type such as 'feat', 'fix', 'docs', etc.\n  Example: feat(auth): add login endpoint",
  'subject-empty':
    "Subject may not be empty – after the type (and optional scope) you need a short description of the change.\n  Example: feat(auth): add login endpoint",
});

function formatter(results) {
  const list = results?.results ?? [];

  const outputs = [];

  for (const result of list) {
    if (result.valid) continue;

    outputs.push('------------------------------------------------------------------');
    outputs.push(`❌  Commit message: "${result.input.trim()}"`);
    outputs.push('   Problems found:');

    for (const err of result.errors) {
      const explain = EXPLANATIONS[err.name] || err.message;
      outputs.push(`  • ${explain}`);
    }

    outputs.push('------------------------------------------------------------------');
  }

  // If everything was valid, default formatter returns empty string – we mimic that.
  return outputs.join('\n');
}

module.exports = formatter; 