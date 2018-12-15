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
    } else {
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = length - startPaddingLength - string.length;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    };
  },
/////////////////////////////////////////////
  has (object, key) {
    if (object.key !== undefined) {
      return true;
    } else {
      return false;
    }
  },
/////////////////////////////////////////////
  invert (originalObject) {
    let invertedObject = {};
    for (let originalKey in originalObject) {
      let originalValue = originalObject.originalKey;
      invertedObject.originalValue = originalKey
    };
    return invertedObject;
  },
/////////////////////////////////////////////
  findKey (object, predicate) {
    for (let key in object) {
      let value = object.key;
      let predicateReturnValue = predicate[object.value];
      if (predicateReturnValue = true) {
        return key;
      };
      return undefined;
    };
  },
/////////////////////////////////////////////
  drop (array, n) {
    if (n === undefined) {
      let n = 1;
    };
    let droppedArray = array.slice(n);
    return droppedArray;
  },
/////////////////////////////////////////////
};



// Do not write or modify code below this line.
module.exports = _;
