/**
 * Test if a string starts with another string.
 *
 * This is a more performant version of the `String.prototype.startsWith` method.
 *
 * @see https://jsbench.me/1hlkqqd0ff/1
 * @param {string} str The string to test.
 * @param {string} search The string to search for.
 * @returns {boolean} Does `str` starts with `search`?
 */
function startsWith(str, search) {
	if (search.length === 0) {
		return true;
	}

	if (search.length === 1) {
		return str[0] === search;
	}

	return str.substring(0, search.length) === search;
}

exports.startsWith = startsWith;

/**
 * Test if a string starts with another string.
 *
 * This is a more performant version of the `String.prototype.endsWith` method.
 *
 * @see https://jsbench.me/1hlkqqd0ff/2
 * @param {string} str The string to test.
 * @param {string} search The string to search for.
 * @returns {boolean} Does `str` ends with `search`?
 */
function endsWith(str, search) {
	if (search.length === 0) {
		return true;
	}

	if (search.length === 1) {
		return str[str.length - 1] === search;
	}

	return str.substring(str.length - search.length) === search;
}

exports.endsWith = endsWith;
