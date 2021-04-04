'use strict';
function sliceFn(input, begin, end) {
  if (isString(input))
    return input.slice(begin, end);

  return slice.call(input, begin, end);
}
