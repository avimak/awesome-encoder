# awesome-encoder

Security-first encoding/decoding utility.

## Usage

### Via npx

```bash
# Encode a value
npx awesome-encoder --encode "hello world"

# Decode a value
npx awesome-encoder --decode "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"

# Show help
npx awesome-encoder --help
```

### Via GitHub URL

```bash
npx https://github.com/avimak/awesome-encoder --encode "value"
npx https://github.com/avimak/awesome-encoder --decode "value"
```

## CLI Options

- `--encode <value>` - Encode the provided value
- `--decode <value>` - Decode the provided value
- `-h, --help` - Show help message

## Programmatic Usage

```javascript
const { encode, decode } = require('awesome-encoder');

const encoded = encode('hello world');
console.log(encoded);

const decoded = decode(encoded);
console.log(decoded);
```

## License

MIT

