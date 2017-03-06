# remove-suffix

A [Node.js](https://nodejs.org/) module that removes a suffix from a string.

Optionally supports the [bind operator](https://github.com/tc39/proposal-bind-operator) and/or the callback design pattern.

## Installation

```bash
npm install remove-suffix --save
```

## Usage

```javascript
const removeSuffix = require('remove-suffix')

const subject = 'abcdef'

// Removes the suffix:
removeSuffix(subject, 'def') // 'abc'

// Removes the first suffix found from among those in an array:
removeSuffix(subject, ['xyz', 'def', 'bc']) // 'abc'

// Supports the bind operator:
subject::removeSuffix('def') // 'abc'

// Supports callback pattern:
removeSuffix(subject, 'def', (suffix, remainder) => {
  console.log(suffix) // 'def'
  console.log(remainder) // 'abc'
})

// Callback pattern with bind operator and with non-existent suffix:
subject::removeSuffix('xyz', (suffix, remainder) => {
  console.log(suffix) // null
  console.log(remainder) // 'abcdef'
})
```
