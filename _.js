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

    if (end === undefined) {
      end = start;
      start = 0;
    };

    if (start > end) {
      let tmp = start;
      start = end;
      end = tmp;
    };

    if ((number >= start) && (number < end)) {
      return true;
    } else {
      return false;
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
    if (object[key] !== undefined) {
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
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    };
    return undefined;
  },
/////////////////////////////////////////////
  drop (array, n) {

    if (n === undefined) {
      let droppedArray = array.slice(1);
      return droppedArray;
    } else {
      let droppedArray = array.slice(n);
      return droppedArray;
    };
  },
/////////////////////////////////////////////

  dropWhile (array, predicate) {

    let flippedPredicate = (element, index, array) => {
      return !predicate(element, index, array);
    };

    let dropNumber = array.findIndex(flippedPredicate);
    let droppedArray = _.drop(array, dropNumber);
    return droppedArray;

  },

/////////////////////////////////////////////
  chunk (array, size) {

    let finalArray = [];
    for (let i = 0; i < array.length; i = i + size) {
      let smallArray = array.slice(i, i + size)
      finalArray.push(smallArray);
    }
    return finalArray;
  },
/////////////////////////////////////////////
};



// Do not write or modify code below this line.
module.exports = _;
