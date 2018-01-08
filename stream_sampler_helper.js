StreamSamplerHelper = function () {

  isInt = function(value) {
    return !isNaN(value) && 
       parseInt(Number(value)) == value && 
       !isNaN(parseInt(value, 10));
  };

  getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  getUniqueRandomInts = function(desiredSize, max) {
    var uniqueRandomInts = [];

    while(uniqueRandomInts.length < desiredSize) {

      var candidate = getRandomInt(0, max);
      if(uniqueRandomInts.indexOf(candidate) == -1) {
        uniqueRandomInts.push(candidate)
      }
    }
    return uniqueRandomInts;
  };

  return {
    "getUniqueRandomInts" : getUniqueRandomInts
  };

}();


module.exports = {
   getUniqueRandomInts: StreamSamplerHelper.getUniqueRandomInts
};
