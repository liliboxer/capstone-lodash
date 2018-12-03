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
  inRange (number, startValue, endValue) {
    if (number < startValue) {
      return false;
    } else if (number > endValue) {
      return false;
    } else if (number >= startValue && number <= endValue) {
      return true;
    } else if (endValue === null) {
      let startValue = 0;
      let endValue = 0;
    } else if (startValue > endValue) {
      let tmp = startValue;
      let startValue = endValue;
      let endValue = tmp;
    };
  },





};



// Do not write or modify code below this line.
module.exports = _;
