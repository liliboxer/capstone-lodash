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
      let tmp = start;
      let start = end;
      let end = tmp;
    };





  },
/////////////////////////////////////////////



};



// Do not write or modify code below this line.
module.exports = _;
