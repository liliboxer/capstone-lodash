const _ = {

/////////////////////////////////////////////
  clamp (number, lowerBound, upperBound) {
    if (number < lowerBound) {
      return lowerBound;
    } else if (number > upperBound) {
      return upperBound;
    } else {
      return number;
    };
  },
/////////////////////////////////////////////
  inRange (number, start, end) {

    if ((number >= start) && (number < end)) {
      return true;
    } else {
      return false;
    };

    if (end = undefined) {
      let end = start;
      let start = 0;
    };

    if (start > end) {
      let tmp = end;
      let end = start;
      let start = tmp;
    };

  },
/////////////////////////////////////////////
  words (string) {
    let words = string.split(" ");
    return words
  },
/////////////////////////////////////////////
  pad (string, length) {
    if (length <= string.length) {
      return string;
    };

  let startPaddingLength = Math.floor((length - string.length)/2);

  let endPaddingLength = length - startPaddingLength - string.length

  let padding = ' '

  let paddedString = padding.repeat(startPaddingLength) + string + padding.repeat(endPaddingLength)

  },
/////////////////////////////////////////////
};



// Do not write or modify code below this line.
module.exports = _;
