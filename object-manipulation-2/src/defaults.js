/* exported defaults */

// for every key in the source object
// if key in target object does not exist
// source object property gets copied to target object

function defaults(target, source) {
  for (var key in source) {
    if ((key in target) === false) {
      target[key] = source[key];
    }
  }
}
