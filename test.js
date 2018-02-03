'use strict'

const assert = require('assert')
const removeSuffix = require('.')

describe('removeSuffix()', function () {
  it('should return remainder and removed suffix', function () {
    const [rest, suffix] = removeSuffix('abc', 'c')
    assert.strictEqual(rest, 'ab')
    assert.strictEqual(suffix, 'c')
  })

  it('should return subject and empty string if suffix not found', function () {
    const [rest, suffix] = removeSuffix('abc', 'x')
    assert.strictEqual(rest, 'abc')
    assert.strictEqual(suffix, '')
  })

  it('should remove any suffix in the argument list', function () {
    assert.strictEqual(removeSuffix('abc', 'b', 'c')[0], 'ab')
  })

  it('should remove any suffix in an array', function () {
    assert.strictEqual(removeSuffix('abc', ['c', 'b'])[0], 'ab')
  })

  it('should support the bind operator', function () {
    assert.strictEqual(removeSuffix.call('abc', 'c')[0], 'ab')
  })
})
