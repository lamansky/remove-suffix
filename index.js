'use strict'

const flatten = require('@lamansky/flatten')
const longestFirst = require('longest-first')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator(function removeSuffix (subject, ...suffixes) {
  const suffix = longestFirst(flatten(suffixes)).find(s => subject.endsWith(s))
  return suffix ? [subject.substring(0, subject.length - suffix.length), suffix] : [subject, '']
})
