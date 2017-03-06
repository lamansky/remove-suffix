'use strict'

const arrify = require('arrify')
const PossibleFunction = require('possible-function')

/**
 * Removes a suffix from the end of a string if found.
 * @param  {string} subject The string from which to remove the suffix.
 * @param  {string|array.<string>} suffixes One or more possible suffixes to
 *   search for. The first one found is removed.
 * @param  {removeSuffix~resultCallback=} resultCallback An optional callback that will be
 *   given the suffix and the remaining string.
 * @return {string} The string without its suffix, or the original string if no
 *   suffix was found.
 */
module.exports = function removeSuffix (subject, suffixes, resultCallback) {
  if (typeof this === 'string' || this instanceof String) {
    [suffixes, resultCallback] = arguments
    subject = this
  }

  resultCallback = PossibleFunction(resultCallback)

  suffixes = arrify(suffixes)
  for (const suffix of suffixes) {
    if (subject.endsWith(suffix)) {
      const rest = subject.substring(0, subject.length - suffix.length)
      resultCallback(suffix, rest)
      return rest
    }
  }

  resultCallback(null, subject)
  return subject
}

/**
 * A callback that is given the suffix and the remaining string after the suffix
 * is removed.
 * @callback removeSuffix~resultCallback
 * @param {string|null} suffix The suffix removed from the string, or `null` if
 *   no suffix was found.
 * @param {string} remainder The rest of the string after the suffix has been
 *   removed.
 * @returns {void}
 */
