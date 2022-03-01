/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) // constant time
  const unique = [];                // 1 * 1 = O(1) // constant time
  for (
    let i = 0;                      // 1 * 1 = O(1) // constant time
    i < words.length;               // 2 * n = O(2n) ~= O(n) // linear
    i++                             // 2 * n = O(2n) ~= O(n) // linear
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) // linear
    if (!seen[word]) {              // 3 * n = O(3n) ~= O(n) // linear
      seen[word] = true;            // 2 * n = O(2n) ~= O(n) // linear
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) // linear
    }
  }
  return unique; // O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) // constant
  for (
    let i = 0;                      // 1 * 1 = O(1) // constant
    i < words.length;               // 2 * n = O(2n) ~= O(n) // linear
    i++                             // 2 * n = O(2n) ~= O(n) // linear
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) // linear
    let isUnique = true;            // 1 * n = O(n) // linear
    for (
      let c = 0;                    // 1 * n = O(n) // linear
      c < i;                        // 2 * n^2 = O(2n^2) ~= O(n^2) // quadratic
      c++                           // 2 * n^2 = O(2n^2) ~= O(n^2) // quadratic
    ) {
      const comparing = words[c];   // 2 * n^2 = O(2n^2) ~= O(n^2) // quadratic
      if (comparing === word) {     // 1 * n^2 = O(n^2) // quadratic
        isUnique = false;           // 1 * n^2 = O(n^2) // quadratic
      }
    }
    if (isUnique) {                 // 1 * n = O(n) // linear
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) // linear
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2) // quadratic
