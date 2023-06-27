'use strict';
const fs = require('node:fs').promises;

async function cat(fileName) {
  const content = await fs.readFile(fileName, 'utf8');
  console.log(content);
}

console.log(process.argv[2]);

cat(process.argv[2]);