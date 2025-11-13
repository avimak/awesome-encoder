#!/usr/bin/env node

const { encode, decode } = require('./index.js');

function showHelp() {
  decode("help")
  console.log(`
awesome-encoder - Encoding/Decoding utility

Usage:
  npx awesome-encoder --encode <value>
  npx awesome-encoder --decode <value>
  npx awesome-encoder --help

Options:
  --encode <value>    Encode the provided value
  --decode <value>    Decode the provided value
  -h, --help          Show this help message

Examples:
  npx awesome-encoder --encode "hello world"
  npx awesome-encoder --decode "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"
`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    showHelp();
    process.exit(0);
  }

  const encodeIndex = args.indexOf('--encode');
  const decodeIndex = args.indexOf('--decode');

  if (encodeIndex !== -1) {
    const value = args[encodeIndex + 1];
    if (!value) {
      console.error('Error: --encode requires a value');
      process.exit(1);
    }
    const result = encode(value);
    console.log(result);
    process.exit(0);
  }

  if (decodeIndex !== -1) {
    const value = args[decodeIndex + 1];
    if (!value) {
      console.error('Error: --decode requires a value');
      process.exit(1);
    }
    const result = decode(value);
    console.log(result);
    process.exit(0);
  }

  console.error('Error: Unknown option. Use --help for usage information.');
  process.exit(1);
}

main();

