/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = version1.split('.'), v2 = version2.split('.')
  let len1 = v1.length, len2 = v2.length
  for (let i = 0; i < len1 || i < len2; i++) {
    let x = 0, y = 0
    if (i < len1) x = parseInt(v1[i])
    if (i < len2) y = parseInt(v2[i])
    if (x > y) return 1
    if (x < y) return -1
  }
  return 0
};

let version1 = "1.01", version2 = "1.001"
compareVersion(version1, version2)