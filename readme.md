# remove-suffix

Removes a string from the end of another string.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i remove-suffix
```

## API

The module exports a single function.

### Parameters

1. Bindable: `subject` (string): The string that may or may not have a suffix to be removed.
2. `...suffixes` (one or more of: string or Array of strings): The first suffix found will be removed. Longer suffixes are checked first.

### Return Value

A two-element Array:

1. The string without its suffix, or the original string if no suffix was found.
2. The suffix if one was found; otherwise an empty string.

## Example

```javascript
const removeSuffix = require('remove-suffix')

const subject = 'abcdef'
let result, suffix

// Removes the suffix
[result] = removeSuffix(subject, 'def')
result // 'abc'

// Returns suffix as second element, or returns an empty string if not found
[result, suffix] = removeSuffix(subject, 'xyz')
result // 'abcdef'
suffix // ''

// Removes the first suffix found. Longer suffixes are checked first.
// Suffixes can be given as an arguments list or in an array.
[result, suffix] = removeSuffix(subject, 'xyz', 'def', 'bc')
result // 'abc'
suffix // 'def'

// Supports the bind operator
subject::removeSuffix('def') // ['abc', 'def']
```

## Related

* [remove-prefix](https://github.com/lamansky/remove-prefix): Removes a string from the beginning of another string.
