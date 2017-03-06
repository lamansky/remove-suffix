'use strict'

const assert = require('assert')
const removeSuffix = require('.')

describe('removeSuffix()', function () {
  it('should remove a single suffix', function () {
    assert.strictEqual(removeSuffix('abc', 'c'), 'ab')
  })

  it('should return subject as-is if suffix not found', function () {
    assert.strictEqual(removeSuffix('abc', 'x'), 'abc')
  })

  it('should remove any of a list of suffixes', function () {
    assert.strictEqual(removeSuffix('abc', ['c', 'b']), 'ab')
  })

  it('should accept a `this` context in lieu of the first parameter', function () {
    assert.strictEqual(removeSuffix.call('abc', 'c'), 'ab')
  })

  it('should give the callback the suffix and the remainder', function (done) {
    removeSuffix('abc', 'c', (suffix, rest) => {
      assert.strictEqual(suffix, 'c')
      assert.strictEqual(rest, 'ab')
      done()
    })
  })

  it('should give the callback null if no suffix is present', function (done) {
    removeSuffix('abc', 'x', (suffix, rest) => {
      assert.strictEqual(suffix, null)
      assert.strictEqual(rest, 'abc')
      done()
    })
  })
})
